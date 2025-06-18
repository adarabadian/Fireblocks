import { getWeatherTheme, getWeatherBackground } from './weatherHelpers';
import type { WeatherData } from '../types/weather';

export const getBackgroundStyle = (weatherData: WeatherData | null) => {
  if (!weatherData) {
    return {
      background: '#f5f5f5',
    };
  }

  const theme = getWeatherTheme(weatherData.temperature);
  const background = getWeatherBackground(theme, weatherData.condition);
  
  return {
    background: background.gradient,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: background.overlays,
      pointerEvents: 'none',
    },
  };
}; 