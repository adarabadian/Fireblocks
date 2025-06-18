import type { WeatherTheme, ActivitySuggestion, WeatherData } from '../types/weather';

// Temperature-based theme determination
export const getWeatherTheme = (temperature: number): WeatherTheme => {
  if (temperature < 0) return 'freezing';
  if (temperature < 10) return 'cold';
  if (temperature < 20) return 'cool';
  if (temperature < 25) return 'mild';
  if (temperature < 30) return 'warm';
  return 'hot';
};

// Theme-based gradient configurations
export const getThemeGradients = (theme: WeatherTheme) => {
  const gradients = {
    freezing: {
      background: 'linear-gradient(135deg, #b3c6e7 0%, #8ecae6 35%, #219ebc 100%)',
      accent: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)',
    },
    cold: {
      background: 'linear-gradient(135deg, #8ecae6 0%, #219ebc 35%, #023047 100%)',
      accent: 'linear-gradient(135deg, #bfdbfe 0%, #60a5fa 100%)',
    },
    cool: {
      background: 'linear-gradient(135deg, #8ecae6 0%, #219ebc 35%, #023047 100%)',
      accent: 'linear-gradient(135deg, #a7f3d0 0%, #34d399 100%)',
    },
    mild: {
      background: 'linear-gradient(135deg, #8ecae6 0%, #219ebc 25%, #ffb703 75%, #fb8500 100%)',
      accent: 'linear-gradient(135deg, #fef3c7 0%, #fbbf24 100%)',
    },
    warm: {
      background: 'linear-gradient(135deg, #ffb703 0%, #fb8500 50%, #f97316 100%)',
      accent: 'linear-gradient(135deg, #fed7aa 0%, #fb923c 100%)',
    },
    hot: {
      background: 'linear-gradient(135deg, #fb8500 0%, #f97316 50%, #dc2626 100%)',
      accent: 'linear-gradient(135deg, #fecaca 0%, #f87171 100%)',
    },
  };

  return gradients[theme];
};

// Activity suggestions based on weather conditions
export const getActivitySuggestions = (weatherData: WeatherData): ActivitySuggestion[] => {
  const { temperature, condition, windSpeed, humidity } = weatherData;
  const suggestions: ActivitySuggestion[] = [];

  // Temperature-based suggestions
  if (temperature >= 20 && temperature <= 25 && condition !== 'Rain') {
    suggestions.push({
      id: 'perfect-outdoor',
      message: 'Perfect weather for outdoor activities!',
      icon: '🌞',
      category: 'outdoor',
    });
  }

  if (temperature < 5 || condition === 'Snow') {
    suggestions.push({
      id: 'cozy-indoor',
      message: 'Ideal day to stay cozy indoors with a warm drink!',
      icon: '☕',
      category: 'indoor',
    });
  }

  if (temperature > 30) {
    suggestions.push({
      id: 'stay-cool',
      message: 'Stay cool and hydrated! Perfect for swimming or air-conditioned spaces.',
      icon: '🏊‍♂️',
      category: 'indoor',
    });
  }

  // Condition-based suggestions
  if (condition === 'Rain') {
    suggestions.push({
      id: 'rainy-day',
      message: 'Great day for reading a book or watching movies!',
      icon: '📚',
      category: 'indoor',
    });
  }

  if (condition === 'Clear' && temperature >= 15 && temperature <= 28) {
    suggestions.push({
      id: 'sunny-walk',
      message: 'Beautiful clear skies - perfect for a walk or picnic!',
      icon: '🚶‍♂️',
      category: 'outdoor',
    });
  }

  if (condition === 'Clouds' && temperature >= 18 && temperature <= 25) {
    suggestions.push({
      id: 'cloudy-comfortable',
      message: 'Comfortable weather for outdoor exploration!',
      icon: '🌤️',
      category: 'outdoor',
    });
  }

  if (windSpeed > 20) {
    suggestions.push({
      id: 'windy-indoor',
      message: 'Quite windy today - indoor activities might be more comfortable.',
      icon: '🏠',
      category: 'indoor',
    });
  }

  // Special weather conditions
  if (condition === 'Snow') {
    suggestions.push({
      id: 'snow-fun',
      message: 'Snow day! Perfect for winter sports or building a snowman!',
      icon: '⛄',
      category: 'outdoor',
    });
  }

  if (humidity > 80 && temperature > 25) {
    suggestions.push({
      id: 'humid-ac',
      message: 'High humidity - consider air-conditioned indoor activities.',
      icon: '❄️',
      category: 'indoor',
    });
  }

  // Default suggestion if no specific ones apply
  if (suggestions.length === 0) {
    suggestions.push({
      id: 'general-day',
      message: 'Have a wonderful day, whatever you choose to do!',
      icon: '😊',
      category: 'general',
    });
  }

  return suggestions.slice(0, 2); // Return max 2 suggestions
};

// Format temperature with unit
export const formatTemperature = (temp: number, unit: 'C' | 'F' = 'C'): string => {
  if (unit === 'F') {
    const fahrenheit = Math.round((temp * 9/5) + 32);
    return `${fahrenheit}°F`;
  }
  return `${Math.round(temp)}°C`;
};

// Format wind speed
export const formatWindSpeed = (speed: number): string => {
  return `${Math.round(speed)} km/h`;
};

// Format pressure
export const formatPressure = (pressure: number): string => {
  return `${pressure} hPa`;
};

// Format humidity
export const formatHumidity = (humidity: number): string => {
  return `${humidity}%`;
};

// Get weather icon URL (for OpenWeatherMap icons)
export const getWeatherIconUrl = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

// Capitalize first letter of each word
export const capitalizeWords = (str: string): string => {
  return str.replace(/\b\w/g, l => l.toUpperCase());
};

// Format timestamp to readable time
export const formatTime = (timestamp: number): string => {
  return new Date(timestamp).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
};

// Get time of day for additional context
export const getTimeOfDay = (timestamp: number): 'morning' | 'afternoon' | 'evening' | 'night' => {
  const hour = new Date(timestamp).getHours();
  
  if (hour >= 6 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
}; 