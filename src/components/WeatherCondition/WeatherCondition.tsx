import React from 'react';
import { Chip, Box } from '@mui/material';
import { capitalizeWords } from '../../utils/weatherHelpers';
import { APPLE_BLUE } from '../../styles/glassmorphism';

interface WeatherConditionProps {
  description: string;
}

const WeatherCondition: React.FC<WeatherConditionProps> = ({ description }) => {
  return (
    <Box textAlign="center" mb={3}>
      <Chip
        label={capitalizeWords(description)}
        size="medium"
        sx={{
          fontSize: '0.9rem',
          backgroundColor: APPLE_BLUE.replace('0.8)', '0.9)'),
          backdropFilter: 'blur(20px)',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          fontWeight: 500,
          boxShadow: `
            0 2px 8px ${APPLE_BLUE.replace('0.8)', '0.3)')},
            inset 0 1px 0 rgba(255, 255, 255, 0.2)
          `,
        }}
      />
    </Box>
  );
};

export default WeatherCondition; 