import { parseString } from 'xml2js';
import { promisify } from 'util';
import { classify } from './classifier';
import { getEzakZakazky } from './ezak_fetcher';

export interface Zakazka {
  id: string;
  zdroj: string;
  nazev: string;
  popis: string | null;
  url: string;
  datum_publikace: string;
  datum_aktualizace: string;
  disciplina: string | null;
  klicova_slova: string[];
}



const parseXml = promisify(parseString);

// NEN profily zadavatelů – veřejně dostupný XML export
const NEN_PROFILES = ['MDCR'];

function formatDate(d: Date): string {
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}${month}${year}`;
}

async function fetchNenProfile(profileName: string, dateFrom: Date, dateTo: Date): Promise<Zakazka[]> {
  const url = `https://nen.nipez.cz/profil/${profileName}/XMLdataVZ?od=${formatDate(dateFrom)}&do=${formatDate(dateTo)}`;

  try {
    const res = await fetch(url, { 
      next: { revalidate: 3600, tags: ['nen-data'] }
    });
    
    if (!res.ok) throw new Error(`Nelze stáhnout XML z NEN pro ${profileName}`);
    let xmlText = await res.text();

    xmlText = xmlText.replace(/^\uFEFF/, '').trimStart();

    if (!xmlText.startsWith('<?xml') && !xmlText.startsWith('<profil')) {
      throw new Error(`NEN nevrátil validní XML pro ${profileName}`);
    }

    const result = await parseXml(xmlText) as any;
    const zakazky = result?.profil?.zakazka || [];

    const processedZakazky: Zakazka[] = [];

    for (const z of zakazky) {
      const idObjektu = z.id_objektu?.[0] || '';
      const nazev = z.nazev_vz?.[0] || '';
      const popis = z.predmet_vz?.[0] || '';
      const linkId = idObjektu.replace(/\//g, '-');
      const link = `https://nen.nipez.cz/verejne-zakazky/detail-zakazky/${linkId}`;

      const cast = z.casti_vz?.[0]?.cast_zakazky?.[0];
      const datumStr = cast?.zadavaci_postup_casti?.[0]?.datum_uverejneni?.[0] || new Date().toISOString();
      const pubDate = new Date(datumStr);
      
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

      if (lastUpdated < dateFrom) continue;
      
      const { disciplina, klicova_slova } = classify(nazev + ' ' + popis);
      if (!disciplina) continue;

      processedZakazky.push({
        id: `nen-${linkId || Math.random().toString()}`,
        zdroj: `NEN – ${profileName}`,
        nazev,
        popis: popis.substring(0, 500),
        url: link,
        datum_publikace: datumStr,
        datum_aktualizace: lastUpdated.toISOString(),
        disciplina,
        klicova_slova
      });
    }

    return processedZakazky;
  } catch (error: any) {
    console.error(`getNenZakazky error pro ${profileName}:`, error);
    return [];
  }
}

export async function getNenZakazky(): Promise<Zakazka[]> {
  const dateTo = new Date();
  
  // Max 6 měsíců staré
  const dateFrom = new Date();
  dateFrom.setMonth(dateFrom.getMonth() - 6);

  // NEN vrací XML pouze pro rozsahy po 1.7.2024
  const minDate = new Date('2024-07-01');
  if (dateFrom < minDate) {
    dateFrom.setTime(minDate.getTime());
  }

  const results = await Promise.all(
    NEN_PROFILES.map(p => fetchNenProfile(p, dateFrom, dateTo))
  );

  return results.flat();
}

/** Sloučí zakázky ze všech zdrojů, odstraní duplicity dle URL a seřadí. */
export async function getAllZakazky(): Promise<Zakazka[]> {
  const [nen, ezak] = await Promise.all([getNenZakazky(), getEzakZakazky()]);

  const all = [...nen, ...ezak];

  // Deduplicate by URL
  const seen = new Set<string>();
  const unique = all.filter(z => {
    if (seen.has(z.url)) return false;
    seen.add(z.url);
    return true;
  });

  // Seřadit od nejnověji aktualizovaných
  unique.sort((a, b) => new Date(b.datum_aktualizace).getTime() - new Date(a.datum_aktualizace).getTime());

  return unique;
}
