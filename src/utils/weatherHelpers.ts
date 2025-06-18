import type { ActivitySuggestion, WeatherData } from '../types/weather';
import { WEATHER_BACKGROUNDS, SPECIAL_CONDITION_BACKGROUNDS, type BackgroundTheme } from './weatherBackgrounds';
import {
  getTemperatureBasedSuggestions,
  getConditionBasedSuggestions,
  getWindAndHumiditySuggestions,
  getDefaultSuggestion
} from './activitySuggestionsConfig';

// Weather theme type
export type WeatherTheme = 'freezing' | 'cold' | 'cool' | 'mild' | 'warm' | 'hot';

// Get weather theme based on temperature
export const getWeatherTheme = (temperature: number): WeatherTheme => {
  if (temperature < 0) return 'freezing';
  if (temperature < 10) return 'cold';
  if (temperature < 20) return 'cool';
  if (temperature < 25) return 'mild';
  if (temperature < 30) return 'warm';
  return 'hot';
};

// Get dynamic background based on weather theme
export const getWeatherBackground = (theme: WeatherTheme, condition: string): BackgroundTheme => {
  // Special conditions override
  if (SPECIAL_CONDITION_BACKGROUNDS[condition]) {
    return SPECIAL_CONDITION_BACKGROUNDS[condition];
  }

  return WEATHER_BACKGROUNDS[theme];
};

// Helper function to gather all suggestions from different categories
const gatherAllSuggestions = (weatherData: WeatherData): ActivitySuggestion[] => {
  const { temperature, condition, windSpeed, humidity } = weatherData;
  const suggestions: ActivitySuggestion[] = [];

  suggestions.push(...getTemperatureBasedSuggestions(temperature, condition));
  suggestions.push(...getConditionBasedSuggestions(condition, temperature));
  suggestions.push(...getWindAndHumiditySuggestions(windSpeed, humidity, temperature));

  return suggestions;
};

// Helper function to ensure minimum suggestions
const ensureMinimumSuggestions = (suggestions: ActivitySuggestion[]): ActivitySuggestion[] => {
  if (suggestions.length === 0) {
    return [getDefaultSuggestion()];
  }
  return suggestions;
};

// Helper function to limit suggestions count
const limitSuggestionsCount = (suggestions: ActivitySuggestion[], maxCount: number = 2): ActivitySuggestion[] => {
  return suggestions.slice(0, maxCount);
};

// Activity suggestions based on weather conditions
export const getActivitySuggestions = (weatherData: WeatherData): ActivitySuggestion[] => {
  const allSuggestions = gatherAllSuggestions(weatherData);
  const suggestionsWithDefaults = ensureMinimumSuggestions(allSuggestions);
  return limitSuggestionsCount(suggestionsWithDefaults);
};

// Get weather icon URL (for OpenWeatherMap icons)
export const getWeatherIconUrl = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

// Capitalize first letter of each word
export const capitalizeWords = (str: string): string => {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}; 