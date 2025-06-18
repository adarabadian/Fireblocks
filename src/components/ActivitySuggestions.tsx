import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import { LightbulbOutlined } from '@mui/icons-material';
import type { ActivitySuggestion } from '../types/weather';

interface ActivitySuggestionsProps {
  suggestions: ActivitySuggestion[];
}

const ActivitySuggestions: React.FC<ActivitySuggestionsProps> = ({ suggestions }) => {
  if (!suggestions || suggestions.length === 0) {
    return null;
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'outdoor':
        return '#007AFF'; // Apple blue (bright)
      case 'indoor':
        return '#0056CC'; // Apple blue (dark)
      case 'general':
        return '#007AFF'; // Apple blue (bright)
      default:
        return '#0056CC'; // Apple blue (dark)
    }
  };

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(40px) saturate(180%)',
        borderRadius: 4,
        border: '1px solid rgba(255, 255, 255, 0.6)',
        display: 'flex',
        flexDirection: 'column',
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
      }}
    >
      <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 1,
              boxShadow: `
                0 2px 8px rgba(0, 0, 0, 0.04),
                inset 0 1px 0 rgba(255, 255, 255, 0.9)
              `,
            }}
          >
            <LightbulbOutlined sx={{ fontSize: '1.2rem', color: '#007AFF' }} />
          </Box>
          <Typography 
            variant="h6" 
            component="h2" 
            fontWeight={600}
            color="#1D1D1F"
            sx={{
              textShadow: '0 1px 2px rgba(255,255,255,0.8)',
              letterSpacing: '-0.01em',
            }}
          >
            Activity Suggestions
          </Typography>
        </Box>

        <List sx={{ flex: 1, py: 0 }}>
          {suggestions.map((suggestion) => (
            <ListItem
              key={suggestion.id}
              sx={{
                borderRadius: 2.5,
                mb: 1,
                p: 1.5,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: `
                  0 2px 8px rgba(0, 0, 0, 0.03),
                  inset 0 1px 0 rgba(255, 255, 255, 0.9)
                `,
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  transform: 'translateY(-1px)',
                  boxShadow: `
                    0 4px 16px rgba(0, 0, 0, 0.06),
                    inset 0 1px 0 rgba(255, 255, 255, 1)
                  `,
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Box
                  sx={{
                    fontSize: '1.25rem',
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: `
                      0 2px 8px rgba(0, 0, 0, 0.04),
                      inset 0 1px 0 rgba(255, 255, 255, 0.9)
                    `,
                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.05))',
                  }}
                >
                  {suggestion.icon}
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={suggestion.message}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: '#1D1D1F',
                    textShadow: '0 1px 2px rgba(255,255,255,0.8)',
                  },
                }}
              />
              <Chip
                label={suggestion.category}
                size="small"
                sx={{ 
                  ml: 1, 
                  textTransform: 'capitalize', 
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  backgroundColor: `${getCategoryColor(suggestion.category)}40`,
                  backdropFilter: 'blur(20px)',
                  color: getCategoryColor(suggestion.category),
                  border: `1px solid ${getCategoryColor(suggestion.category)}60`,
                  boxShadow: `
                    0 2px 8px ${getCategoryColor(suggestion.category)}20,
                    inset 0 1px 0 rgba(255, 255, 255, 0.4)
                  `,
                }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ActivitySuggestions; 