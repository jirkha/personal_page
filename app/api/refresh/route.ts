import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { getNenZakazky } from '@/lib/fetcher';

export const maxDuration = 60;

export async function POST() {
  try {
    // @ts-ignore - Bypass Next 16 signature change requiring CacheLife profile
    revalidateTag('nen-data');
    const data = await getNenZakazky();
    return NextResponse.json({ status: 'success', appendedCount: data.length, totalItems: data.length });
  } catch (error: any) {
    console.error("POST /api/refresh error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
