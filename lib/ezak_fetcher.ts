import { classify } from './classifier';
import type { Zakazka } from './fetcher';

const EZAK_URL = 'https://ezak.brno.cz/contract_index.html';

export async function getEzakZakazky(): Promise<Zakazka[]> {
  const dateFrom = new Date();
  dateFrom.setMonth(dateFrom.getMonth() - 6);

  try {
    const res = await fetch(EZAK_URL, {
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
      
      const parts = rowHtml.split(/<td[^>]*>/);
      // Col 0: link (we already parsed title)
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

      const id = `ezak-${detailPath.replace('.html', '')}`;

      items.push({
        id,
        zdroj: 'Profil - E-ZAK Brno',
        nazev: title,
        popis: `Zakázka z E-ZAK profilu statutárního města Brna.`,
        url: `https://ezak.brno.cz/${detailPath}`,
        datum_publikace: pubDate.toISOString(),
        datum_aktualizace: pubDate.toISOString(),
        disciplina,
        klicova_slova,
      });
    }

    return items;
  } catch (error: any) {
    console.error('getEzakZakazky error:', error);
    return []; // Soft fail
  }
}
