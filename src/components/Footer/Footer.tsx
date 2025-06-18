import React from "react";
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        height: '3vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderRadius: '16px 16px 0 0',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        borderBottom: 'none',
        boxShadow: `
          0 -4px 16px rgba(0, 0, 0, 0.04),
          inset 0 1px 0 rgba(255, 255, 255, 0.9)
        `,
        mt: 'auto', // Push to bottom
        position: 'relative',
      }}
    >
      <Typography 
        variant="body2" 
        color="rgba(29,29,31,0.7)"
        sx={{
          marginTop: '12px',
          fontWeight: 400,
          textAlign: 'center',
          textShadow: '0 1px 2px rgba(255,255,255,0.8)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        }}
      >
        &copy; Fireblocks Weather Mood Board (Adar's assignment)
      </Typography>
    </Box>
  );
}
