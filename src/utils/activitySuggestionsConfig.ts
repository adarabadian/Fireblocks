import type { ActivitySuggestion } from '../types/weather';

// Helper function to create activity suggestions
const createSuggestion = (
  id: string, 
  message: string, 
  icon: string, 
  category: 'outdoor' | 'indoor' | 'general'
): ActivitySuggestion => ({
  id,
  message,
  icon,
  category,
});

// Temperature range checkers
const isPerfectOutdoorTemp = (temperature: number): boolean => 
  temperature >= 20 && temperature <= 25;

const isColdTemp = (temperature: number): boolean => 
  temperature < 5;

const isHotTemp = (temperature: number): boolean => 
  temperature > 30;

const isMildTemp = (temperature: number): boolean =>
  temperature >= 15 && temperature <= 28;

const isComfortableTemp = (temperature: number): boolean =>
  temperature >= 18 && temperature <= 25;

// Individual suggestion generators for temperature-based conditions
const getPerfectOutdoorSuggestion = (): ActivitySuggestion =>
  createSuggestion(
    'perfect-outdoor',
    'Perfect weather for outdoor activities!',
    '🌞',
    'outdoor'
  );

const getColdWeatherSuggestion = (): ActivitySuggestion =>
  createSuggestion(
    'cozy-indoor',
    'Ideal day to stay cozy indoors with a warm drink!',
    '☕',
    'indoor'
  );

const getHotWeatherSuggestion = (): ActivitySuggestion =>
  createSuggestion(
    'stay-cool',
    'Stay cool and hydrated! Perfect for swimming or air-conditioned spaces.',
    '🏊‍♂️',
    'indoor'
  );

// Individual suggestion generators for weather conditions
const getRainyDaySuggestion = (): ActivitySuggestion =>
  createSuggestion(
    'rainy-day',
    'Great day for reading a book or watching movies!',
    '📚',
    'indoor'
  );

const getSunnyWalkSuggestion = (): ActivitySuggestion =>
  createSuggestion(
    'sunny-walk',
    'Beautiful clear skies - perfect for a walk or picnic!',
    '🚶‍♂️',
    'outdoor'
  );

const getCloudyComfortableSuggestion = (): ActivitySuggestion =>
  createSuggestion(
    'cloudy-comfortable',
    'Comfortable weather for outdoor exploration!',
    '🌤️',
    'outdoor'
  );

const getSnowFunSuggestion = (): ActivitySuggestion =>
  createSuggestion(
    'snow-fun',
    'Snow day! Perfect for winter sports or building a snowman!',
    '⛄',
    'outdoor'
  );

// Individual suggestion generators for wind and humidity
const getWindyIndoorSuggestion = (): ActivitySuggestion =>
  createSuggestion(
    'windy-indoor',
    'Quite windy today - indoor activities might be more comfortable.',
    '🏠',
    'indoor'
  );

const getHumidAcSuggestion = (): ActivitySuggestion =>
  createSuggestion(
    'humid-ac',
    'High humidity - consider air-conditioned indoor activities.',
    '❄️',
    'indoor'
  );

// Condition checkers
const isRainyCondition = (condition: string): boolean => condition === 'Rain';
const isClearCondition = (condition: string): boolean => condition === 'Clear';
const isCloudyCondition = (condition: string): boolean => condition === 'Clouds';
const isSnowCondition = (condition: string): boolean => condition === 'Snow';
const isWindy = (windSpeed: number): boolean => windSpeed > 20;
const isVeryHumid = (humidity: number, temperature: number): boolean => 
  humidity > 80 && temperature > 25;

// Main suggestion gathering functions
export const getTemperatureBasedSuggestions = (temperature: number, condition: string): ActivitySuggestion[] => {
  const suggestions: ActivitySuggestion[] = [];

  if (isPerfectOutdoorTemp(temperature) && !isRainyCondition(condition)) {
    suggestions.push(getPerfectOutdoorSuggestion());
  }

  if (isColdTemp(temperature) || isSnowCondition(condition)) {
    suggestions.push(getColdWeatherSuggestion());
  }

  if (isHotTemp(temperature)) {
    suggestions.push(getHotWeatherSuggestion());
  }

  return suggestions;
};

export const getConditionBasedSuggestions = (condition: string, temperature: number): ActivitySuggestion[] => {
  const suggestions: ActivitySuggestion[] = [];

  if (isRainyCondition(condition)) {
    suggestions.push(getRainyDaySuggestion());
  }

  if (isClearCondition(condition) && isMildTemp(temperature)) {
    suggestions.push(getSunnyWalkSuggestion());
  }

  if (isCloudyCondition(condition) && isComfortableTemp(temperature)) {
    suggestions.push(getCloudyComfortableSuggestion());
  }

  if (isSnowCondition(condition)) {
    suggestions.push(getSnowFunSuggestion());
  }

  return suggestions;
};

export const getWindAndHumiditySuggestions = (windSpeed: number, humidity: number, temperature: number): ActivitySuggestion[] => {
  const suggestions: ActivitySuggestion[] = [];

  if (isWindy(windSpeed)) {
    suggestions.push(getWindyIndoorSuggestion());
  }

  if (isVeryHumid(humidity, temperature)) {
    suggestions.push(getHumidAcSuggestion());
  }

  return suggestions;
};

export const getDefaultSuggestion = (): ActivitySuggestion =>
  createSuggestion(
    'general-day',
    'Have a wonderful day, whatever you choose to do!',
    '😊',
    'general'
  ); 