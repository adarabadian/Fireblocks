import type { SxProps, Theme } from '@mui/material/styles';

// Base glassmorphism card style
export const glassmorphismCard: SxProps<Theme> = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(40px) saturate(180%)',
  borderRadius: 4,
  border: '1px solid rgba(255, 255, 255, 0.6)',
  boxShadow: `
    0 8px 32px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.9)
  `,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `
      0 12px 40px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 1)
    `,
  },
};

// Small glassmorphism card style
export const glassmorphismCardSmall: SxProps<Theme> = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(20px) saturate(180%)',
  borderRadius: 2.5,
  border: '1px solid rgba(255, 255, 255, 0.6)',
  boxShadow: `
    0 2px 8px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.9)
  `,
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-1px)',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: `
      0 4px 16px rgba(0, 0, 0, 0.06),
      inset 0 1px 0 rgba(255, 255, 255, 1)
    `,
  },
};

// Icon container style
export const iconContainer: SxProps<Theme> = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `
    0 4px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.9)
  `,
};

// Text styles
export const primaryTextStyle: SxProps<Theme> = {
  color: '#1D1D1F',
  textShadow: '0 1px 2px rgba(255,255,255,0.8)',
  letterSpacing: '-0.01em',
};

export const secondaryTextStyle: SxProps<Theme> = {
  color: 'rgba(29,29,31,0.7)',
  fontWeight: 400,
};

// Apple blue color
export const APPLE_BLUE = 'rgba(0, 122, 255, 0.8)';
export const APPLE_BLUE_BG = 'rgba(0, 122, 255, 0.1)'; 