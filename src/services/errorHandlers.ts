// User-friendly error message mapping
export const getErrorMessage = (error: Error, context?: string): string => {
  const message = error.message;
  
  if (message.includes('API key')) {
    return 'Weather service configuration error. Please check API key.';
  }
  
  if (message.includes('city not found') || message.includes('404')) {
    return context 
      ? `City "${context}" not found. Please check the spelling and try again.`
      : 'Location not found. Please check the spelling and try again.';
  }
  
  if (message.includes('401')) {
    return 'Invalid API key. Please check your configuration.';
  }
  
  if (message.includes('429')) {
    return 'Too many requests. Please try again in a moment.';
  }
  
  return message;
};

// Handle weather service errors consistently
export const handleWeatherServiceError = (error: unknown, defaultMessage: string, context?: string): string => {
  console.error('Weather service error:', error);
  
  if (error instanceof Error) {
    return getErrorMessage(error, context);
  }
  
  return defaultMessage;
}; 