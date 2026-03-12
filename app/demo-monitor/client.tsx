'use client';

import { useState } from 'react';
import type { Zakazka } from '@/lib/fetcher';

type Props = {
  initialZakazky: Zakazka[];
};

export default function DemoMonitorClient({ initialZakazky }: Props) {
  const [zakazky, setZakazky] = useState<Zakazka[]>(initialZakazky);
  const [loading, setLoading] = useState(false);
  const [disciplina, setDisciplina] = useState('');
  const [q, setQ] = useState('');

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/refresh', { method: 'POST' });
      const data = await res.json();
      if (data.status === 'success') {
        alert(`Obnoveno: ${data.totalItems || 0} zakázek (NEN + E-ZAK)`);
        // Reload dat po refreshi
        const res2 = await fetch('/api/zakazky');
        const newData = await res2.json();
        setZakazky(newData || []);
      } else {
        alert('Chyba při obnově: ' + (data.error || 'Neznámá chyba'));
      }
    } catch (e) {
      alert('Chyba spojení při obnově');
    } finally {
      setLoading(false);
    }
  };

  // Filtrace na straně klienta (ze SSR dat nebo po refresh)
  const filtered = zakazky.filter(z => {
    if (disciplina && z.disciplina !== disciplina) return false;
    if (q) {
      const lq = q.toLowerCase();
      if (!z.nazev.toLowerCase().includes(lq) && !(z.popis?.toLowerCase().includes(lq))) return false;
    }
    return true;
  });

  return (
    <div className="p-8 max-w-5xl mx-auto font-sans">
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-2 gap-4">
        <h1 className="text-3xl font-bold">Demo verze – Monitoring zakázek</h1>
        <button
          onClick={handleRefresh}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Načítám...' : 'Obnovit data'}
        </button>
      </div>
      <p className="text-slate-600 mb-6">
        Zobrazují se zakázky z <strong>NEN (Obec Vranovice, Min. dopravy)</strong> a <strong>E-ZAK (Brno, Kr. Vysočina, Správa železnic)</strong>,{' '}
        <strong>publikované nebo aktualizované za posledních 6 měsíců</strong>, které spadají do dopravní problematiky.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Hledat zakázky (název, popis)..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="border p-2 flex-grow rounded-md text-gray-800 shadow-sm focus:ring focus:ring-blue-200 outline-none transition"
        />
        <select
          value={disciplina}
          onChange={(e) => setDisciplina(e.target.value)}
          className="border p-2 rounded-md text-gray-800 shadow-sm focus:ring focus:ring-blue-200 outline-none transition"
        >
          <option value="">Všechny disciplíny</option>
          <option value="Dopravní modelování">Dopravní modelování</option>
          <option value="Dopravně-inženýrské studie">Dopravně-inženýrské studie</option>
          <option value="Veřejná doprava">Veřejná doprava</option>
          <option value="Cyklo a pěší doprava">Cyklo a pěší doprava</option>
          <option value="Udržitelná mobilita">Udržitelná mobilita</option>
          <option value="ITS a telematika">ITS a telematika</option>
          <option value="Parkování">Parkování</option>
          <option value="Bezpečnost">Bezpečnost</option>
        </select>
      </div>

      <div className="space-y-4">
        {filtered.length === 0 && !loading && (
          <div className="text-center p-12 border rounded-lg bg-gray-50 text-gray-500">
            <p>Žádné zakázky k zobrazení za posledních 6 měsíců.</p>
            <p className="text-sm mt-2">Zkuste upravit filtry nebo klikněte na „Obnovit data".</p>
          </div>
        )}
        {filtered.map(z => (
          <div key={z.id} className="border p-5 rounded-lg shadow-sm hover:shadow-md transition bg-white border-slate-200">
            <div className="flex justify-between items-start mb-2 gap-4">
              <h2 className="text-lg md:text-xl font-semibold leading-tight">
                <a href={z.url} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-500 transition">
                  {z.nazev}
                </a>
              </h2>
              <div className="flex flex-col items-end text-xs md:text-sm font-medium bg-slate-100 px-2 py-1 rounded text-slate-600 whitespace-nowrap">
                <span>Vydáno: {new Date(z.datum_publikace).toLocaleDateString('cs-CZ')}</span>
                {z.datum_aktualizace && z.datum_aktualizace !== z.datum_publikace && (
                  <span className="text-blue-600 font-semibold mt-1">Aktual.: {new Date(z.datum_aktualizace).toLocaleDateString('cs-CZ')}</span>
                )}
              </div>
            </div>
            <p className="text-xs text-slate-500 mb-3 font-semibold tracking-wide uppercase">Zdroj: {z.zdroj}</p>
            {z.popis && (
              <p className="text-slate-700 mb-4 text-sm leading-relaxed line-clamp-3">
                {z.popis}
              </p>
            )}

            <div className="flex flex-wrap gap-2 items-center mt-4">
              {z.disciplina && (
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded-full">
                  {z.disciplina}
                </span>
              )}
              {z.klicova_slova && z.klicova_slova.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {z.klicova_slova.map(k => (
                    <span key={k} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">
                      #{k}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
