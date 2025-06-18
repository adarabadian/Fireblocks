import React, { useEffect, useRef } from 'react';
import type { WeatherData } from '../types/weather';
import { getWeatherTheme, getThemeGradients } from '../utils/weatherHelpers';
import SearchBar from './SearchBar';
import './WeatherLayout.css';

interface WeatherLayoutProps {
  children?: React.ReactNode;
  onSearch: (query: string) => void;
  loading?: boolean;
  weatherData?: WeatherData | null;
}

const WeatherLayout: React.FC<WeatherLayoutProps> = ({ 
  children, 
  onSearch, 
  loading = false,
  weatherData 
}) => {
  const layoutRef = useRef<HTMLDivElement>(null);

  // Apply dynamic theming based on weather data
  useEffect(() => {
    if (layoutRef.current && weatherData) {
      const theme = getWeatherTheme(weatherData.temperature);
      const themeGradients = getThemeGradients(theme);
      
      // Set CSS custom properties for dynamic theming
      layoutRef.current.style.setProperty('--theme-background', themeGradients.background);
      layoutRef.current.style.setProperty('--theme-accent', themeGradients.accent);
      
      // Add theme class
      layoutRef.current.className = `weather-layout weather-layout--${theme}`;
    } else if (layoutRef.current) {
      // Reset to default theme when no weather data
      layoutRef.current.className = 'weather-layout weather-layout--default';
      layoutRef.current.style.removeProperty('--theme-background');
      layoutRef.current.style.removeProperty('--theme-accent');
    }
  }, [weatherData]);

  return (
    <div ref={layoutRef} className="weather-layout">
      <header className="weather-header">
        <div className="container">
          <h1 className="app-title">
            <span className="title-icon">🌤️</span>
            Weather App
          </h1>
          <p className="app-subtitle">
            Get current weather information and personalized activity suggestions
          </p>
        </div>
      </header>

      <main className="weather-main">
        <div className="container">
          <section className="search-section" aria-label="Search for weather">
            <SearchBar 
              onSearch={onSearch}
              loading={loading}
              placeholder="Enter city name (e.g., New York, London, Tokyo)"
            />
          </section>

          <section className="weather-content" aria-label="Weather information">
            {children}
          </section>
        </div>
      </main>

      <footer className="weather-footer">
        <div className="container">
          <p>&copy; 2024 Fireblocks Weather App • Powered by OpenWeatherMap</p>
        </div>
      </footer>
    </div>
  );
};

export default WeatherLayout; 