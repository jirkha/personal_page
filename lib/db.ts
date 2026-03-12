import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

export interface ZakazkaRow {
  id: string;
  zdroj: string;
  nazev: string;
  popis: string | null;
  url: string;
  datum_publikace: string;
  datum_aktualizace: string;
  disciplina: string | null;
  klicova_slova: string; // JSON array of strings
}

let db: Database | null = null;

export async function getDb(): Promise<Database> {
  if (db) return db;
  
  // Na Vercelu je systém souborů read-only s výjimkou /tmp
  const dbPath = process.env.VERCEL 
    ? path.join('/tmp', 'demo.sqlite') 
    : path.resolve(process.cwd(), 'demo.sqlite');
  
  db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS zakazky (
      id TEXT PRIMARY KEY,
      zdroj TEXT NOT NULL,
      nazev TEXT NOT NULL,
      popis TEXT,
      url TEXT,
      datum_publikace TEXT,
      datum_aktualizace TEXT,
      disciplina TEXT,
      klicova_slova TEXT
    )
  `);

  return db;
}
