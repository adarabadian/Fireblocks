// Weather API Response Types
export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface WindData {
  speed: number;
  deg: number;
}

export interface CloudData {
  all: number;
}

export interface CoordinatesData {
  lon: number;
  lat: number;
}

export interface SystemData {
  country: string;
  sunrise: number;
  sunset: number;
}

// Main Weather Response Interface
export interface WeatherApiResponse {
  coord: CoordinatesData;
  weather: WeatherCondition[];
  base: string;
  main: MainWeatherData;
  visibility: number;
  wind: WindData;
  clouds: CloudData;
  dt: number;
  sys: SystemData;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

// Simplified Weather Data for UI
export interface WeatherData {
  location: string;
  country: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  icon: string;
  timestamp: number;
}

// Weather Theme Types
export type WeatherTheme = 
  | 'freezing'     // < 0°C
  | 'cold'         // 0-10°C
  | 'cool'         // 10-20°C
  | 'mild'         // 20-25°C
  | 'warm'         // 25-30°C
  | 'hot';         // > 30°C

// Activity Suggestion Types
export interface ActivitySuggestion {
  id: string;
  message: string;
  icon: string;
  category: 'outdoor' | 'indoor' | 'general';
}

// API Error Types
export interface WeatherApiError {
  cod: string | number;
  message: string;
}

// Service Response Types
export interface WeatherServiceResponse {
  success: boolean;
  data?: WeatherData;
  error?: string;
}

// Search Types
export interface CitySearchResult {
  name: string;
  country: string;
  state?: string;
  lat: number;
  lon: number;
} 