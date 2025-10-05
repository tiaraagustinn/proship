import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WeatherSection from '@/components/WeatherSection';
import ScheduleTable from '@/components/ScheduleTable';
import SeaWeatherMap from '@/components/SeaWeatherMap';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <WeatherSection />
      <ScheduleTable />
      <SeaWeatherMap />
      <Footer />
    </div>
  );
}
