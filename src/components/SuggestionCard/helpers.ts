import { categoryColors } from '../../utils/categoryColors';
import { fadeInAnimation, hoverScale } from '../../styles/animations';

// Helper function to get category colors with fallback
export const getCategoryColors = (category: string) => {
  const colors = categoryColors[category as keyof typeof categoryColors];
  return {
    backgroundColor: colors?.background || 'rgba(0, 122, 255, 0.1)',
    color: colors?.color || 'rgba(0, 122, 255, 0.9)',
  };
};

// Helper function to create category chip styles
export const getCategoryChipStyles = (category: string) => ({
  fontSize: '0.75rem',
  fontWeight: 500,
  ...getCategoryColors(category),
  border: 'none',
  textTransform: 'capitalize' as const,
  height: '20px',
});

// Helper function to create avatar icon styles
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAvatarIconStyles = (iconContainer: any) => ({
  ...(iconContainer || {}),
  width: 48,
  height: 48,
  fontSize: '1.5rem',
  borderRadius: '50%',
});

// Helper function to create card container styles
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getCardContainerStyles = (glassmorphismCardSmall: any) => ({
  ...(glassmorphismCardSmall || {}),
  ...fadeInAnimation,
  ...hoverScale,
  flex: 1,
  p: 2.5,
  borderRadius: 3,
}); 