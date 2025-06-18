import React, { useState } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  Box,
} from '@mui/material';
import { Search, Clear } from '@mui/icons-material';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={0}
      sx={{
        p: 1,
        display: 'flex',
        alignItems: 'center',
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
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          boxShadow: `
            0 12px 40px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 1)
          `,
        },
        '&:focus-within': {
          backgroundColor: 'rgba(255, 255, 255, 1)',
          transform: 'translateY(-1px)',
          boxShadow: `
            0 16px 48px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 1)
          `,
        },
      }}
    >
      <TextField
        fullWidth
        variant="standard"
        placeholder="Enter city name (e.g., New York, London, Tokyo)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <Box
                sx={{
                  width: 36,
                  height: 36,
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
                <Search sx={{ color: 'rgba(0, 122, 255, 0.8)', fontSize: '1.2rem' }} />
              </Box>
            </InputAdornment>
          ),
          endAdornment: query && (
            <InputAdornment position="end">
              <IconButton
                size="small"
                onClick={handleClear}
                edge="end"
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  color: 'rgba(0, 122, 255, 0.8)',
                  boxShadow: `
                    0 2px 8px rgba(0, 0, 0, 0.03),
                    inset 0 1px 0 rgba(255, 255, 255, 0.9)
                  `,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: '#007AFF',
                  },
                }}
              >
                <Clear sx={{ fontSize: '1rem' }} />
              </IconButton>
            </InputAdornment>
          ),
          sx: {
            fontSize: '1.1rem',
            px: 2,
            py: 1,
            color: '#1D1D1F',
            fontWeight: 400,
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            '& input::placeholder': {
              color: 'rgba(29,29,31,0.6)',
              opacity: 1,
            },
            '& input': {
              textShadow: '0 1px 2px rgba(255,255,255,0.8)',
            },
          },
        }}
      />
      <IconButton
        type="submit"
        sx={{
          p: 1.5,
          ml: 1,
          backgroundColor: 'rgba(0, 122, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: `
            0 4px 16px rgba(0, 122, 255, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2)
          `,
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: 'rgba(0, 122, 255, 1)',
            transform: 'translateY(-1px)',
            boxShadow: `
              0 6px 20px rgba(0, 122, 255, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.3)
            `,
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar; 