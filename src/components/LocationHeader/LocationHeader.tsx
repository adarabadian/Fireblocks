import React from 'react';
import { Typography, Box } from '@mui/material';
import { primaryTextStyle, secondaryTextStyle } from '../../styles/glassmorphism';

interface LocationHeaderProps {
  location: string;
  country: string;
}

const LocationHeader: React.FC<LocationHeaderProps> = ({ location, country }) => {
  // Get current day and time
  const now = new Date();
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  const timeString = now.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });

  return (
    <Box textAlign="center" mb={2}>
      <Typography 
        variant="h5" 
        component="h1" 
        fontWeight={600} 
        gutterBottom
        sx={primaryTextStyle}
      >
        {location}, {country}
      </Typography>
      <Typography 
        variant="body2" 
        sx={secondaryTextStyle}
      >
        {dayName}, {timeString}
      </Typography>
    </Box>
  );
};

export default LocationHeader; 