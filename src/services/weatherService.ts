import type { 
  WeatherApiResponse, 
  WeatherData, 
  WeatherServiceResponse, 
  WeatherApiError 
} from '../types/weather';
import { handleWeatherServiceError } from './errorHandlers';

// Configuration
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Validate API key
if (!API_KEY) {
  console.error('OpenWeatherMap API key is missing. Please add VITE_OPENWEATHER_API_KEY to your .env file');
}

// Fetch weather data from API
const fetchWeatherData = async (url: string): Promise<WeatherApiResponse> => {
  if (!API_KEY) {
    throw new Error('OpenWeatherMap API key is not configured. Please add VITE_OPENWEATHER_API_KEY to your .env file');
  }

  const response = await fetch(url);
  
  if (!response.ok) {
    const errorData: WeatherApiError = await response.json().catch(() => ({
      cod: response.status,
      message: `HTTP ${response.status}: ${response.statusText}`
    }));
    throw new Error(errorData.message || `Failed to fetch weather data`);
  }
  
  return response.json();
};

// Transform API response to clean UI data
const transformApiResponse = (apiData: WeatherApiResponse): WeatherData => {
  return {
    location: apiData.name,
    country: apiData.sys.country,
    temperature: Math.round(apiData.main.temp),
    feelsLike: Math.round(apiData.main.feels_like),
    condition: apiData.weather[0].main,
    description: apiData.weather[0].description,
    humidity: apiData.main.humidity,
    windSpeed: Math.round(apiData.wind.speed * 3.6), // Convert m/s to km/h
    pressure: apiData.main.pressure,
    icon: apiData.weather[0].icon,
    timestamp: apiData.dt * 1000, // Convert to milliseconds
  };
};

// Get weather data by city name
export const getWeatherByCity = async (cityName: string): Promise<WeatherServiceResponse> => {
  try {
    const url = `${BASE_URL}/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`;
    const apiData = await fetchWeatherData(url);
    const weatherData = transformApiResponse(apiData);
    
    return { success: true, data: weatherData };
  } catch (error) {
    const errorMessage = handleWeatherServiceError(error, 'Failed to fetch weather data', cityName);
    return { success: false, error: errorMessage };
  }
};

// Get weather data by coordinates
export const getWeatherByCoordinates = async (lat: number, lon: number): Promise<WeatherServiceResponse> => {
  try {
    const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const apiData = await fetchWeatherData(url);
    const weatherData = transformApiResponse(apiData);
    
    return { success: true, data: weatherData };
  } catch (error) {
    const errorMessage = handleWeatherServiceError(error, 'Failed to fetch weather data for your location');
    return { success: false, error: errorMessage };
  }
};

// Check if API key is configured
export const isApiKeyConfigured = (): boolean => {
  return Boolean(API_KEY && API_KEY !== 'demo_key');
};

// Get API status for debugging
export const getApiStatus = () => {
  return {
    hasApiKey: Boolean(API_KEY),
    apiKey: API_KEY ? `${API_KEY.substring(0, 8)}...` : 'Not set',
    baseUrl: BASE_URL,
  };
}; 