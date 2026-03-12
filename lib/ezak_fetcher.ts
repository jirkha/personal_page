import { classify } from './classifier';
import type { Zakazka } from './fetcher';

const EZAK_PROFILES = [
  { name: 'E-ZAK Brno', url: 'https://ezak.brno.cz/contract_index.html', baseUrl: 'https://ezak.brno.cz' },
  { name: 'E-ZAK Kr. Vysočina', url: 'https://ezak.kr-vysocina.cz/contract_index.html', baseUrl: 'https://ezak.kr-vysocina.cz' },
  { name: 'E-ZAK Správa železnic', url: 'https://zakazky.spravazeleznic.cz/contract_index.html', baseUrl: 'https://zakazky.spravazeleznic.cz' },
  { name: 'E-ZAK Jihomoravský kr.', url: 'https://zakazky.krajbezkorupce.cz/contract_index.html', baseUrl: 'https://zakazky.krajbezkorupce.cz' }
];

async function fetchEzakProfile(profileName: string, profileUrl: string, baseUrl: string, dateFrom: Date): Promise<Zakazka[]> {
  try {
    const res = await fetch(profileUrl, {
      next: { revalidate: 3600, tags: ['nen-data'] },
    });

    if (!res.ok) throw new Error(`E-ZAK fetch failed: ${res.status}`);
    const htmlText = await res.text();

    const items: Zakazka[] = [];
    
    // Pattern to match rows in the E-ZAK table
    const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
    let match;

    while ((match = rowRegex.exec(htmlText)) !== null) {
      const rowHtml = match[1];

      // Parse columns
      const linkMatch = /<a href="(contract_display_\d+\.html)">\s*([^<]+)\s*<\/a>/.exec(rowHtml);
      if (!linkMatch) continue;

      const detailPath = linkMatch[1];
      const title = linkMatch[2].trim();
      
      // Simple extraction of the date (usually in last columns)
      const datesRegex = /([0-9]{2}\.[0-9]{2}\.[0-9]{4})/g;
      const dates = [];
      let dMatch;
      while ((dMatch = datesRegex.exec(rowHtml)) !== null) {
        dates.push(dMatch);
      }
      
      let pubDate = new Date(); // fallback
      
      if (dates.length > 0) {
        // e.g. "12.03.2026"
        const [day, month, year] = dates[0][1].split('.');
        const parsedDate = new Date(`${year}-${month}-${day}T00:00:00Z`);
        if (!isNaN(parsedDate.getTime())) {
          pubDate = parsedDate;
        }
      }

      // Filter last 6 months
      if (pubDate < dateFrom) continue;

      const { disciplina, klicova_slova } = classify(title);
      if (!disciplina) continue;

      const id = `ezak-${baseUrl.replace(/[^a-zA-Z0-9]/g, '')}-${detailPath.replace('.html', '')}`;

      items.push({
        id,
        zdroj: `Profil - ${profileName}`,
        nazev: title,
        popis: `Zakázka z profilu zadavatele (${profileName}).`,
        url: `${baseUrl}/${detailPath}`,
        datum_publikace: pubDate.toISOString(),
        datum_aktualizace: pubDate.toISOString(),
        disciplina,
        klicova_slova,
      });
    }

    return items;
  } catch (error: any) {
    console.error(`fetchEzakProfile error for ${profileName}:`, error);
    return []; // Soft fail
  }
}

export async function getEzakZakazky(): Promise<Zakazka[]> {
  const dateFrom = new Date();
  dateFrom.setMonth(dateFrom.getMonth() - 6);

  // Získáme data ze všech E-ZAK profilů najednou
  const results = await Promise.all(
    EZAK_PROFILES.map(p => fetchEzakProfile(p.name, p.url, p.baseUrl, dateFrom))
  );

  return results.flat();
}
