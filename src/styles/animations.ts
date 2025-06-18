// Reusable animation styles
export const fadeInAnimation = {
  animation: 'fadeIn 0.6s ease-out',
  '@keyframes fadeIn': {
    '0%': { opacity: 0, transform: 'translateY(20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
};

export const slideInFromLeft = {
  animation: 'slideInLeft 0.5s ease-out',
  '@keyframes slideInLeft': {
    '0%': { opacity: 0, transform: 'translateX(-30px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },
};

export const hoverScale = {
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
};

export const smoothTransition = {
  transition: 'all 0.3s ease-in-out',
}; 