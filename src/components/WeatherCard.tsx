import React, { useEffect, useRef } from 'react';
import type { WeatherData } from '../types/weather';
import { getWeatherTheme, getThemeGradients, getActivitySuggestions } from '../utils/weatherHelpers';
import WeatherDisplay from './WeatherDisplay';
import ActivitySuggestions from './ActivitySuggestions';
import './WeatherCard.css';

interface WeatherCardProps {
  weatherData: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const theme = getWeatherTheme(weatherData.temperature);
  const themeGradients = getThemeGradients(theme);
  const suggestions = getActivitySuggestions(weatherData);

  // Apply dynamic theme styling
  useEffect(() => {
    if (cardRef.current) {
      const card = cardRef.current;
      
      // Set CSS custom properties for dynamic theming
      card.style.setProperty('--theme-background', themeGradients.background);
      card.style.setProperty('--theme-accent', themeGradients.accent);
      
      // Add theme class for additional styling
      card.className = `weather-card weather-card--${theme}`;
    }
  }, [theme, themeGradients]);

  return (
    <div ref={cardRef} className="weather-card">
      <div className="weather-card-content">
        <WeatherDisplay weatherData={weatherData} />
        
        {suggestions.length > 0 && (
          <div className="suggestions-section">
            <ActivitySuggestions suggestions={suggestions} />
          </div>
        )}
      </div>
      
      <div className="theme-indicator">
        <span className="theme-name">{theme}</span>
        <span className="theme-temp">{weatherData.temperature}°C</span>
      </div>
    </div>
  );
};

export default WeatherCard; 