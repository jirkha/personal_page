import { parseString } from 'xml2js';
import { promisify } from 'util';
import { classify } from './classifier';

const parseXml = promisify(parseString);

// NEN profil zadavatele – veřejně dostupný XML export
const NEN_PROFILE = 'ObecVranovice';

function formatDate(d: Date): string {
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}${month}${year}`;
}

export async function getNenZakazky() {
  const dateTo = new Date();
  
  // Max 6 měsíců staré
  const dateFrom = new Date();
  dateFrom.setMonth(dateFrom.getMonth() - 6);

  // NEN vrací XML pouze pro rozsahy po 1.7.2024
  const minDate = new Date('2024-07-01');
  if (dateFrom < minDate) {
    dateFrom.setTime(minDate.getTime());
  }

  const url = `https://nen.nipez.cz/profil/${NEN_PROFILE}/XMLdataVZ?od=${formatDate(dateFrom)}&do=${formatDate(dateTo)}`;

  try {
    // Na Vercelu využijeme Next.js cache v 1h intervalech (3600s) a bypassneme SQLite
    const res = await fetch(url, { 
      next: { revalidate: 3600, tags: ['nen-data'] }
    });
    
    if (!res.ok) throw new Error('Nelze stáhnout XML z NEN');
    let xmlText = await res.text();

    // Odstranění BOM a prázdných znaků
    xmlText = xmlText.replace(/^\uFEFF/, '').trimStart();

    if (!xmlText.startsWith('<?xml') && !xmlText.startsWith('<profil')) {
      throw new Error('NEN nevrátil validní XML. Odpověď: ' + xmlText.substring(0, 100));
    }

    const result = await parseXml(xmlText) as any;
    const zakazky = result?.profil?.zakazka || [];

    const processedZakazky = [];

    for (const z of zakazky) {
      const idNipez = z.id_nipez?.[0] || '';
      const idObjektu = z.id_objektu?.[0] || '';
      const nazev = z.nazev_vz?.[0] || '';
      const popis = z.predmet_vz?.[0] || '';
      const linkId = idObjektu.replace(/\//g, '-');
      const link = `https://nen.nipez.cz/verejne-zakazky/detail-zakazky/${linkId}`;

      const cast = z.casti_vz?.[0]?.cast_zakazky?.[0];
      const datumStr = cast?.zadavaci_postup_casti?.[0]?.datum_uverejneni?.[0] || new Date().toISOString();
      const pubDate = new Date(datumStr);
      
      // Hledání data poslední aktualizace z dokumentů a dalších uzlů
      let lastUpdated = pubDate;
      const docList = cast?.zadavaci_postup_casti?.[0]?.dokumenty?.[0]?.dokument || [];
      for (const doc of docList) {
        if (doc.cas_vlozeni_na_profil?.[0]) {
          const docDate = new Date(doc.cas_vlozeni_na_profil[0]);
          if (!isNaN(docDate.getTime()) && docDate > lastUpdated) {
            lastUpdated = docDate;
          }
        }
      }

      // Striktní kontrola na datum aktualizace
      if (lastUpdated < dateFrom) continue;
      
      const { disciplina, klicova_slova } = classify(nazev + ' ' + popis);
      
      // Zobrazovat pouze ty zakázky, které se zařadí do 1+ definovaných oblastí
      if (!disciplina) continue;

      processedZakazky.push({
        id: linkId || Math.random().toString(),
        zdroj: `NEN – ${NEN_PROFILE}`,
        nazev,
        popis: popis.substring(0, 500),
        url: link,
        datum_publikace: datumStr,
        datum_aktualizace: lastUpdated.toISOString(),
        disciplina,
        klicova_slova
      });
    }

    // Seřadit od nejnověji aktualizovaných
    processedZakazky.sort((a, b) => new Date(b.datum_aktualizace).getTime() - new Date(a.datum_aktualizace).getTime());

    return processedZakazky;
  } catch (error: any) {
    console.error('getNenZakazky error:', error);
    throw new Error(error.message);
  }
}
