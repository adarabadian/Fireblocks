import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
import { glassmorphismCard } from '../../styles/glassmorphism';
import type { ActivitySuggestion } from '../../types/weather';
import SuggestionsHeader from '../SuggestionsHeader/SuggestionsHeader';
import SuggestionCard from '../SuggestionCard/SuggestionCard';

interface ActivitySuggestionsProps {
  suggestions: ActivitySuggestion[];
}

const ActivitySuggestions: React.FC<ActivitySuggestionsProps> = ({ suggestions }) => {
  if (!suggestions || suggestions.length === 0) {
    return null;
  }

  return (
    <Card
      elevation={0}
      sx={{
        ...glassmorphismCard,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <SuggestionsHeader />

        {/* Suggestions List */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {suggestions.map((suggestion) => (
            <SuggestionCard key={suggestion.id} suggestion={suggestion} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ActivitySuggestions; 