import React from 'react';
import { Box, Typography } from '@mui/material';
import { LightbulbOutlined } from '@mui/icons-material';
import { APPLE_BLUE, APPLE_BLUE_BG, primaryTextStyle } from '../../styles/glassmorphism';

const SuggestionsHeader: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" mb={3}>
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: 2.5,
          backgroundColor: APPLE_BLUE_BG,
          backdropFilter: 'blur(20px)',
          border: `1px solid ${APPLE_BLUE.replace('0.8)', '0.2)')}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mr: 2,
          boxShadow: `
            0 2px 8px ${APPLE_BLUE.replace('0.8)', '0.15)')},
            inset 0 1px 0 rgba(255, 255, 255, 0.9)
          `,
        }}
      >
        <LightbulbOutlined 
          sx={{ 
            color: APPLE_BLUE,
            fontSize: '1.3rem'
          }} 
        />
      </Box>
      <Typography 
        variant="h6" 
        component="h2" 
        fontWeight={600}
        sx={primaryTextStyle}
      >
        Activity Suggestions
      </Typography>
    </Box>
  );
};

export default SuggestionsHeader; 