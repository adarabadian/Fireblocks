import { useState } from 'react';
import { Container, Box, ThemeProvider, CssBaseline } from '@mui/material';
import AppHeader from './components/AppHeader/AppHeader';
import LoadingState from './components/LoadingState/LoadingState';
import ErrorState from './components/ErrorState/ErrorState';
import WelcomeState from './components/WelcomeState/WelcomeState';
import WeatherContent from './components/WeatherContent/WeatherContent';
import Footer from './components/Footer/Footer';
import { getWeatherByCity } from './services/weatherService';
import { getActivitySuggestions } from './utils/weatherHelpers';
import { getBackgroundStyle } from './utils/backgroundStyleHelpers';
import { appTheme } from './config/theme';
import type { WeatherData } from './types/weather';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await getWeatherByCity(city);
      if (response.success && response.data) {
        setWeatherData(response.data);
      } else {
        setError(response.error || 'Failed to fetch weather data');
        setWeatherData(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching weather data');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const activitySuggestions = weatherData 
    ? getActivitySuggestions(weatherData) 
    : [];

  // Get dynamic background based on weather
  const backgroundStyle = getBackgroundStyle(weatherData);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Box
        sx={{
          ...backgroundStyle,
          py: 2,
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            height: '97%',
            display: 'flex', 
            flexDirection: 'column', 
            position: 'relative', 
            zIndex: 1,
            overflow: 'hidden',
          }}
        >
          <AppHeader onSearch={handleSearch} />
          
          {loading && <LoadingState />}
          
          {error && <ErrorState error={error} />}
          
          {!weatherData && !loading && !error && <WelcomeState />}
          
          {weatherData && !loading && (
            <WeatherContent 
              weatherData={weatherData} 
              activitySuggestions={activitySuggestions} 
            />
          )}

        </Container>
        
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
