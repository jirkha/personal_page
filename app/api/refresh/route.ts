import { NextResponse } from 'next/server';
import { fetchVZFeed } from '@/lib/fetcher';

// Prodlužujeme timeout pro Vercel Hobby plan (max 60 sekund)
export const maxDuration = 60;

export async function POST() {
  try {
    const result = await fetchVZFeed();
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("POST /api/refresh error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
