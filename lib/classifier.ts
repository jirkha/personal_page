interface Disciplina {
  name: string;
  keywords: string[];
}

const discipliny: Disciplina[] = [
  { name: 'Dopravní modelování', keywords: ['model', 'visum', 'mikromodel', 'prognóza'] },
  { name: 'Dopravně-inženýrské studie', keywords: ['posu', 'kapacitní', 'studie proveditelnosti'] },
  { name: 'Veřejná doprava', keywords: ['mhd', 'jízdní řád', 'ids', 'dopravní podnik'] },
  { name: 'Cyklo a pěší doprava', keywords: ['cyklo', 'cyklostezka', 'pěší', 'prostupnost'] },
  { name: 'Udržitelná mobilita', keywords: ['pum', 'sump', 'mobilita'] },
  { name: 'ITS a telematika', keywords: ['its', 'ssz', 'telematika'] },
  { name: 'Parkování', keywords: ['p+r'] },
  { name: 'Bezpečnost', keywords: ['audit', 'bezpečnost', 'nehodovost'] }
];

export function classify(text: string): { disciplina: string | null, klicova_slova: string[] } {
  const normalized = text.toLowerCase();

  let bestMatch: string | null = null;
  let maxMatches = 0;
  let foundKeywords: string[] = [];

  for (const d of discipliny) {
    const matches = d.keywords.filter(kw => normalized.includes(kw));

    if (matches.length > 0) {
      foundKeywords.push(...matches);
      if (matches.length > maxMatches) {
        maxMatches = matches.length;
        bestMatch = d.name;
      }
    }
  }

  // Unikátní klíčová slova
  foundKeywords = Array.from(new Set(foundKeywords));

  return {
    disciplina: bestMatch,
    klicova_slova: foundKeywords
  };
}
