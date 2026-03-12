import { getAllZakazky } from '@/lib/fetcher';
import DemoMonitorClient from './client';

// Revalidate každou hodinu, takže data jsou čerstvá i bez manuálního refreshe
export const revalidate = 3600;

export default async function DemoMonitorPage() {
  // Data načteme přímo na serveru (SSR) – žádné "Obnovit" potřeba při prvním načtení
  const zakazky = await getAllZakazky();

  return <DemoMonitorClient initialZakazky={zakazky} />;
}
