import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingState: React.FC = () => {
  return (
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
  );
};

export default LoadingState; 