import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import WeatherTrivia from '../WeatherTrivia/WeatherTrivia';

const WelcomeState: React.FC = () => {
  return (
    <Box flex={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ py: 4 }}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          textAlign: 'center',
          maxWidth: 500,
          backgroundColor: '#ffffff',
          backdropFilter: 'blur(40px) saturate(180%)',
          borderRadius: 4,
          border: '1px solid rgba(255, 255, 255, 0.6)',
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.9)
          `,
          mb: 3,
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
      
      {/* Weather Trivia Component */}
      <WeatherTrivia />
    </Box>
  );
};

export default WelcomeState; 