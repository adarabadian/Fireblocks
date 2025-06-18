import React from 'react';
import { Card, CardContent } from '@mui/material';
import { glassmorphismCard } from '../../styles/glassmorphism';
import { fadeInAnimation } from '../../styles/animations';
import type { WeatherData } from '../../types/weather';
import LocationHeader from '../LocationHeader/LocationHeader';
import TemperatureDisplay from '../TemperatureDisplay/TemperatureDisplay';
import WeatherCondition from '../WeatherCondition/WeatherCondition';
import WeatherMetrics from '../WeatherMetrics/WeatherMetrics';

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

  return (
    <Card
      elevation={0}
      sx={{
        ...glassmorphismCard,
        ...fadeInAnimation,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <LocationHeader location={location} country={country} />
        
        <TemperatureDisplay 
          temperature={temperature} 
          icon={icon} 
          description={description} 
        />
        
        <WeatherCondition description={description} />
        
        <WeatherMetrics 
          feelsLike={feelsLike}
          humidity={humidity}
          windSpeed={windSpeed}
          pressure={pressure}
        />
      </CardContent>
    </Card>
  );
};

export default WeatherDisplay; 