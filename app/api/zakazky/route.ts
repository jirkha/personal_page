import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const disciplina = searchParams.get('disciplina');
  const q = searchParams.get('q');

  try {
    const db = await getDb();
    
    let query = "SELECT * FROM zakazky WHERE 1=1";
    const params: any[] = [];

    if (disciplina) {
      query += " AND disciplina = ?";
      params.push(disciplina);
    }

    if (q) {
      query += " AND (nazev LIKE ? OR popis LIKE ?)";
      params.push(`%${q}%`, `%${q}%`);
    }
    
    query += " ORDER BY datum_aktualizace DESC";

    const rows = await db.all(query, params);
    
    const zakazky = rows.map(row => ({
      ...row,
      klicova_slova: JSON.parse(row.klicova_slova || '[]')
    }));

    return NextResponse.json(zakazky);
  } catch (error: any) {
    console.error("GET /api/zakazky error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
