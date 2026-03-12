import { parseString } from 'xml2js';
import { promisify } from 'util';
import https from 'https';
import { getDb } from './db';
import { classify } from './classifier';
import { randomUUID } from 'crypto';

const parseXml = promisify(parseString);

// NEN profil zadavatele – veřejně dostupný XML export
const NEN_PROFILE = 'ObecVranovice';

function formatDate(d: Date): string {
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}${month}${year}`;
}

function httpsGet(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'curl/8.0',
        'Accept': '*/*',
      }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

export async function fetchVZFeed() {
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
    let xmlText = await httpsGet(url);

    // Odstranění BOM a prázdných znaků
    xmlText = xmlText.replace(/^\uFEFF/, '').trimStart();

    if (!xmlText.startsWith('<?xml') && !xmlText.startsWith('<profil')) {
      throw new Error('NEN nevrátil validní XML. Odpověď: ' + xmlText.substring(0, 100));
    }

    const result = await parseXml(xmlText) as any;

    const db = await getDb();
    let appendedCount = 0;

    const zakazky = result?.profil?.zakazka || [];

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


      const exist = await db.get("SELECT id FROM zakazky WHERE url = ?", [link]);
      if (exist) continue;

      const { disciplina, klicova_slova } = classify(nazev + ' ' + popis);
      
      // Zobrazovat pouze ty zakázky, které se zařadí do 1+ definovaných oblastí
      if (!disciplina) continue;

      const id = randomUUID();

      await db.run(
        `INSERT INTO zakazky (id, zdroj, nazev, popis, url, datum_publikace, datum_aktualizace, disciplina, klicova_slova)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          id,
          `NEN – ${NEN_PROFILE}`,
          nazev,
          popis.substring(0, 500),
          link,
          datumStr,
          lastUpdated.toISOString(),
          disciplina,
          JSON.stringify(klicova_slova)
        ]
      );
      appendedCount++;
    }

    return { status: 'success', appendedCount, totalItems: zakazky.length, source: url };
  } catch (error: any) {
    console.error('FetchVZFeed error:', error);
    throw new Error(error.message);
  }
}
