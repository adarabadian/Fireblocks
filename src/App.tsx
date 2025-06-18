import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Alert,
  CircularProgress,
  Paper,
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ActivitySuggestions from './components/ActivitySuggestions';
import Footer from './components/Footer/Footer';
import { getWeatherByCity } from './services/weatherService';
import { getActivitySuggestions } from './utils/weatherHelpers';
import type { WeatherData } from './types/weather';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#007AFF',
      dark: '#0056CC',
    },
    secondary: {
      main: '#FF3B30',
    },
    background: {
      default: '#F8F9FA',
    },
    text: {
      primary: '#1D1D1F',
      secondary: '#8E8E93',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 16,
  },
});

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          height: '100vh',
          py: 2,
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
          },
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            height: '95vh', // Main content takes 95% of viewport height
            display: 'flex', 
            flexDirection: 'column', 
            position: 'relative', 
            zIndex: 1,
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <Box textAlign="center" mb={2}>
            <Typography 
              variant="h3" 
              component="h1" 
              color="#1D1D1F" 
              fontWeight={600} 
              mb={1}
              sx={{
                textShadow: '0 1px 3px rgba(255,255,255,0.8)',
                letterSpacing: '-0.02em',
              }}
            >
              Weather
            </Typography>
            <Typography 
              variant="body1" 
              color="rgba(29,29,31,0.8)" 
              mb={2}
              sx={{
                fontWeight: 400,
                textShadow: '0 1px 2px rgba(255,255,255,0.8)',
              }}
            >
              Get current weather information and personalized activity suggestions
            </Typography>
            
            {/* Search Bar */}
            <Box maxWidth="600px" mx="auto" mb={2}>
              <SearchBar onSearch={handleSearch} />
            </Box>
          </Box>

          {/* Loading State */}
          {loading && (
            <Box 
              display="flex" 
              justifyContent="center" 
              alignItems="center" 
              py={4}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px) saturate(180%)',
                borderRadius: 3,
                border: '1px solid rgba(255, 255, 255, 0.6)',
                mb: 2,
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.06),
                  inset 0 1px 0 rgba(255, 255, 255, 0.9)
                `,
              }}
            >
              <CircularProgress size={40} sx={{ color: '#007AFF' }} />
              <Typography variant="body1" color="#1D1D1F" ml={2} fontWeight={500}>
                Fetching weather data...
              </Typography>
            </Box>
          )}

          {/* Error State */}
          {error && (
            <Box mb={2}>
              <Alert 
                severity="error" 
                sx={{ 
                  borderRadius: 3,
                  backgroundColor: 'rgba(255, 69, 58, 0.1)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 69, 58, 0.3)',
                  color: '#1D1D1F',
                  boxShadow: `
                    0 8px 32px rgba(255, 69, 58, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.6)
                  `,
                  '& .MuiAlert-icon': {
                    color: '#FF453A',
                  },
                }}
              >
                {error}
              </Alert>
            </Box>
          )}

          {/* Welcome State */}
          {!weatherData && !loading && !error && (
            <Box flex={1} display="flex" alignItems="center" justifyContent="center">
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  maxWidth: 500,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(40px) saturate(180%)',
                  borderRadius: 4,
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.06),
                    inset 0 1px 0 rgba(255, 255, 255, 0.9)
                  `,
                }}
              >
                <Typography variant="h1" sx={{ fontSize: '3rem', mb: 2, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))' }}>
                  🌤️
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom fontWeight={600} color="#1D1D1F">
                  Welcome to Weather
                </Typography>
                <Typography variant="body1" color="rgba(29,29,31,0.7)" sx={{ fontWeight: 400 }}>
                  Enter a city name in the search bar above to get current weather information 
                  and personalized activity suggestions.
                </Typography>
              </Paper>
            </Box>
          )}

          {/* Weather Content */}
          {weatherData && !loading && (
            <Box 
              flex={1} 
              display="flex" 
              flexDirection={{ xs: 'column', lg: 'row' }} 
              gap={3}
              sx={{ 
                overflow: 'hidden',
                minHeight: 0, // Allow flex children to shrink
              }}
            >
              <Box flex={1} sx={{ minHeight: 0 }}>
                <WeatherDisplay weatherData={weatherData} />
              </Box>
              <Box flex={1} sx={{ minHeight: 0 }}>
                <ActivitySuggestions suggestions={activitySuggestions} />
              </Box>
            </Box>
          )}

        </Container>
        
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
