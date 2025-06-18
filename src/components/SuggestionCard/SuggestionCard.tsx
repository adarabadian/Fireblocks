import React from 'react';
import { Card, Box, Avatar, Chip, Typography } from '@mui/material';
import { glassmorphismCardSmall, primaryTextStyle, iconContainer } from '../../styles/glassmorphism';
import type { ActivitySuggestion } from '../../types/weather';
import { 
  getCategoryChipStyles, 
  getAvatarIconStyles, 
  getCardContainerStyles 
} from './helpers';

interface SuggestionCardProps {
  suggestion: ActivitySuggestion;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ suggestion }) => {
  return (
    <Card
      elevation={0}
      sx={getCardContainerStyles(glassmorphismCardSmall)}
    >
      <Box display="flex" alignItems="flex-start" gap={2}>
        {/* Emoji icon */}
        <Avatar sx={getAvatarIconStyles(iconContainer)}>
          {suggestion.icon}
        </Avatar>

        {/* Content */}
        <Box flex={1}>
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
            <Chip
              label={suggestion.category}
              size="small"
              sx={getCategoryChipStyles(suggestion.category)}
            />
          </Box>
          
          <Typography 
            variant="body1" 
            sx={{ 
              ...primaryTextStyle,
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            {suggestion.message}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default SuggestionCard; 