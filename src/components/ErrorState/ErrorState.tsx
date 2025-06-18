import React from 'react';
import { Box, Alert } from '@mui/material';

interface ErrorStateProps {
  error: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  return (
    <Box mb={2}>
      <Alert 
        severity="error" 
        sx={{ 
          borderRadius: 3,
          backgroundColor: 'rgba(255, 69, 58, 0.1)',
          backdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 69, 58, 0.3)',
          color: '#1D1D1F',
          boxShadow: `
            0 8px 32px rgba(255, 69, 58, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.6)
          `,
          '& .MuiAlert-icon': {
            color: '#FF453A',
          },
        }}
      >
        {error}
      </Alert>
    </Box>
  );
};

export default ErrorState; 