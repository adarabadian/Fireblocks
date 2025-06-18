import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import { glassmorphismCardSmall, primaryTextStyle, secondaryTextStyle, APPLE_BLUE } from '../../styles/glassmorphism';

interface MetricCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, icon }) => {
  return (
    <Card
      elevation={0}
      sx={{
        ...glassmorphismCardSmall,
        p: 1.5,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box color={APPLE_BLUE} mb={0.5}>
        {icon}
      </Box>
      <Typography 
        variant="caption" 
        gutterBottom
        sx={{ 
          ...secondaryTextStyle,
          fontWeight: 500, 
          textTransform: 'uppercase', 
          letterSpacing: '0.5px' 
        }}
      >
        {label}
      </Typography>
      <Typography 
        variant="h6" 
        fontWeight={600}
        sx={primaryTextStyle}
      >
        {value}
      </Typography>
    </Card>
  );
};

export default MetricCard; 