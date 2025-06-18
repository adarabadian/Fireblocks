import React from 'react';
import { Box, Typography } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';

interface AppHeaderProps {
  onSearch: (city: string) => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ onSearch }) => {
  return (
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
        <SearchBar onSearch={onSearch} />
      </Box>
    </Box>
  );
};

export default AppHeader; 