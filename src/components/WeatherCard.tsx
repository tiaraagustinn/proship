'use client';

import React from 'react';

interface WeatherCardProps {
  location: string;
  city: string;
  temperature: number;
  windSpeed: number;
  humidity: number;
  time: string;
  condition: string;
  weatherIcon: string;
  backgroundClass: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  location,
  city,
  temperature,
  windSpeed,
  humidity,
  time,
  condition,
  weatherIcon,
  backgroundClass
}) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-lg ${backgroundClass}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
      <div className="relative p-6 text-white">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold">{location}</h3>
            <p className="text-sm opacity-90">{city}</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-90">{time}</p>
          </div>
        </div>

        {/* Temperature */}
        <div className="mb-6">
          <div className="text-6xl font-bold mb-2">{temperature}°C</div>
        </div>

        {/* Weather Details */}
        <div className="space-y-2 mb-6">
          <div className="flex justify-between text-sm">
            <span>Angin:</span>
            <span className="font-medium">{windSpeed}km/jam</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Kelembapan:</span>
            <span className="font-medium">{humidity}%</span>
          </div>
        </div>

        {/* Weather Icon and Condition */}
        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="text-4xl mb-2">{weatherIcon}</div>
            <p className="text-sm font-medium">{condition}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;


