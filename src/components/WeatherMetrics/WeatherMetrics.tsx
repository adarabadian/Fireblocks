import React from 'react';
import { Box } from '@mui/material';
import { Thermostat, Water, Air, Speed } from '@mui/icons-material';
import MetricCard from '../MetricCard/MetricCard';

interface WeatherMetricsProps {
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
}

const WeatherMetrics: React.FC<WeatherMetricsProps> = ({ 
  feelsLike, 
  humidity, 
  windSpeed, 
  pressure 
}) => {
  const metrics = [
    { label: 'Feels like', value: `${feelsLike}°`, icon: <Thermostat /> },
    { label: 'Humidity', value: `${humidity}%`, icon: <Water /> },
    { label: 'Wind', value: `${Math.round(windSpeed)} km/h`, icon: <Air /> },
    { label: 'Pressure', value: `${pressure} hPa`, icon: <Speed /> },
  ];

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      gap={2}
      flex={1}
    >
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          label={metric.label}
          value={metric.value}
          icon={metric.icon}
        />
      ))}
    </Box>
  );
};

export default WeatherMetrics; 