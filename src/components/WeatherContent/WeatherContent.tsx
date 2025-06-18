import React from 'react';
import { Box } from '@mui/material';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import ActivitySuggestions from '../ActivitySuggestions/ActivitySuggestions';
import type { WeatherData, ActivitySuggestion } from '../../types/weather';

interface WeatherContentProps {
  weatherData: WeatherData;
  activitySuggestions: ActivitySuggestion[];
}

const WeatherContent: React.FC<WeatherContentProps> = ({ weatherData, activitySuggestions }) => {
  return (
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
      <Box flex={1} sx={{ minHeight: 0 }} mb={2}>
        <ActivitySuggestions suggestions={activitySuggestions} />
      </Box>
    </Box>
  );
};

export default WeatherContent; 