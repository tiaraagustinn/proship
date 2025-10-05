'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex justify-between items-center h-17">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/dishub-logo.png" alt="DISHUB" className="w-28 h-12" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-blue-600 font-bold">
              HOME
            </Link>
            <Link href="/user/cuaca-laut" className="text-gray-700 hover:text-blue-400 font-semibold transition-colors">
              CUACA LAUT
            </Link>
            <Link href="/user/ais" className="text-gray-700 hover:text-blue-400 font-semibold transition-colors">
              AIS TRACKER
            </Link>
            <Link href="/user/dashboard-monitoring" className="text-gray-700 hover:text-blue-400 font-semibold transition-colors">
              DASHBOARD MONITORING
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
