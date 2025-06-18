import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Thermostat,
  Water,
  Air,
  Speed,
} from '@mui/icons-material';
import type { WeatherData } from '../types/weather';
import { capitalizeWords, getWeatherIconUrl } from '../utils/weatherHelpers';

interface WeatherDisplayProps {
  weatherData: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  const {
    location,
    country,
    temperature,
    feelsLike,
    description,
    humidity,
    windSpeed,
    pressure,
    icon
  } = weatherData;

  // Get current day and time
  const now = new Date();
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  const timeString = now.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });

  const metrics = [
    { label: 'Feels like', value: `${feelsLike}°`, icon: <Thermostat /> },
    { label: 'Humidity', value: `${humidity}%`, icon: <Water /> },
    { label: 'Wind', value: `${Math.round(windSpeed)} km/h`, icon: <Air /> },
    { label: 'Pressure', value: `${pressure} hPa`, icon: <Speed /> },
  ];

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(40px) saturate(180%)',
        borderRadius: 4,
        border: '1px solid rgba(255, 255, 255, 0.6)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.06),
          inset 0 1px 0 rgba(255, 255, 255, 0.9)
        `,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: `
            0 12px 40px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 1)
          `,
        },
      }}
    >
      <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box textAlign="center" mb={2}>
          <Typography 
            variant="h5" 
            component="h1" 
            fontWeight={600} 
            gutterBottom
            color="#1D1D1F"
            sx={{
              textShadow: '0 1px 2px rgba(255,255,255,0.8)',
              letterSpacing: '-0.01em',
            }}
          >
            {location}, {country}
          </Typography>
          <Typography 
            variant="body2" 
            color="rgba(29,29,31,0.7)"
            sx={{ fontWeight: 400 }}
          >
            {dayName}, {timeString}
          </Typography>
        </Box>

        {/* Main temperature section */}
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
              boxShadow: `
                0 4px 16px rgba(0, 0, 0, 0.04),
                inset 0 1px 0 rgba(255, 255, 255, 0.9)
              `,
            }}
          >
            <Avatar
              src={getWeatherIconUrl(icon)}
              alt={description}
              sx={{ 
                width: 60, 
                height: 60,
                backgroundColor: 'transparent',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.08))',
              }}
            />
          </Box>
          <Box>
            <Typography 
              variant="h2" 
              component="div" 
              fontWeight={300} 
              color="#1D1D1F"
              sx={{ 
                fontSize: '3.5rem', 
                lineHeight: 1,
                textShadow: '0 2px 4px rgba(255,255,255,0.8)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              }}
            >
              {temperature}
              <Typography 
                component="span" 
                variant="h4" 
                color="rgba(29,29,31,0.6)"
                sx={{ fontWeight: 300 }}
              >
                °C
              </Typography>
            </Typography>
          </Box>
        </Box>

        {/* Weather condition */}
        <Box textAlign="center" mb={3}>
          <Chip
            label={capitalizeWords(description)}
            size="medium"
            sx={{
              fontSize: '0.9rem',
              backgroundColor: 'rgba(0, 122, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              fontWeight: 500,
              boxShadow: `
                0 2px 8px rgba(0, 122, 255, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `,
            }}
          />
        </Box>

        {/* Metrics */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gap={2}
          flex={1}
        >
          {metrics.map((metric, index) => (
            <Card
              key={index}
              elevation={0}
              sx={{
                p: 1.5,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px) saturate(180%)',
                borderRadius: 2.5,
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: `
                  0 2px 8px rgba(0, 0, 0, 0.03),
                  inset 0 1px 0 rgba(255, 255, 255, 0.9)
                `,
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-1px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: `
                    0 4px 16px rgba(0, 0, 0, 0.06),
                    inset 0 1px 0 rgba(255, 255, 255, 1)
                  `,
                },
              }}
            >
              <Box color="rgba(0, 122, 255, 0.8)" mb={0.5}>
                {metric.icon}
              </Box>
              <Typography 
                variant="caption" 
                color="rgba(29,29,31,0.7)" 
                gutterBottom
                sx={{ fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}
              >
                {metric.label}
              </Typography>
              <Typography 
                variant="h6" 
                fontWeight={600}
                color="#1D1D1F"
                sx={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}
              >
                {metric.value}
              </Typography>
            </Card>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherDisplay; 