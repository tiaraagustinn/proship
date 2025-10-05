import React from 'react';
import Header from '@/components/Header';
import SeaWeatherMap from '@/components/SeaWeatherMap';
import WeatherForecastSection from '@/components/WeatherForecastSection';
import Footer from '@/components/Footer';

export default function CuacaLautPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8">
        {/* Main Title */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Peta Cuaca Laut</h1>
        </div>

        {/* Sea Weather Map */}
        <SeaWeatherMap />

        {/* Weather Forecast Section */}
        <WeatherForecastSection />
      </main>
      <Footer />
    </div>
  );
}