import { NextResponse } from 'next/server';
import { fetchVZFeed } from '@/lib/fetcher';

export async function POST() {
  try {
    const result = await fetchVZFeed();
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("POST /api/refresh error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
