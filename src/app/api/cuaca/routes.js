import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const q = new URL(req.url).searchParams.get('q') || 'Banda Aceh';
  const API_KEY = process.env.OPENWEATHER_API_KEY;
  if (!API_KEY) return NextResponse.json({ error: 'Missing API key' }, { status: 500 });

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(q)}&units=metric&appid=${API_KEY}`;
  const res = await fetch(apiUrl);
  if (!res.ok) return NextResponse.json({ error: 'Upstream error' }, { status: 502 });
  const data = await res.json();
  return NextResponse.json(data);
}