import { NextResponse } from 'next/server';
import { getAllZakazky } from '@/lib/fetcher';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const disciplina = searchParams.get('disciplina');
  const q = searchParams.get('q');

  try {
    const data = await getAllZakazky();
    
    let filtered = data;

    if (disciplina) {
      filtered = filtered.filter((row: any) => row.disciplina === disciplina);
    }

    if (q) {
      const lowerQ = q.toLowerCase();
      filtered = filtered.filter((row: any) => 
        row.nazev.toLowerCase().includes(lowerQ) || 
        (row.popis && row.popis.toLowerCase().includes(lowerQ))
      );
    }

    return NextResponse.json(filtered);
  } catch (error: any) {
    console.error("GET /api/zakazky error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
