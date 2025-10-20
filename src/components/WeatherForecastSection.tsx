'use client';
import useSWR from 'swr';
import WeatherCard from './WeatherCard';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function WeatherForecastSection() {
  const { data, error } = useSWR('/api/weather?q=Banda Aceh', fetcher);

  if (error) return <div className="p-6">Gagal memuat cuaca</div>;
  if (!data) return <div className="p-6">Memuat...</div>;

  const weather = {
    location: 'ULEE LHEUE',
    city: 'Banda Aceh',
    temperature: Math.round(data.main?.temp ?? 0),
    windSpeed: Math.round((data.wind?.speed ?? 0) * 3.6),
    humidity: data.main?.humidity ?? 0,
    time: new Date((data.dt ?? Date.now()/1000) * 1000).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    condition: data.weather?.[0]?.description ?? '-',
    weatherIcon: '⛅',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <WeatherCard {...weather} backgroundImage="/images/storm-bg.png" />
    </div>
  );
}