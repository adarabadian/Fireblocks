import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';
import { iconContainer, primaryTextStyle } from '../../styles/glassmorphism';
import { getWeatherIconUrl } from '../../utils/weatherHelpers';

interface TemperatureDisplayProps {
  temperature: number;
  icon: string;
  description: string;
}

const TemperatureDisplay: React.FC<TemperatureDisplayProps> = ({ 
  temperature, 
  icon, 
  description 
}) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
      <Box
        sx={{
          ...iconContainer,
          width: 80,
          height: 80,
          borderRadius: 3,
          mr: 2,
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
          sx={{ 
            ...primaryTextStyle,
            fontSize: '3.5rem', 
            lineHeight: 1,
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
  );
};

export default TemperatureDisplay; 