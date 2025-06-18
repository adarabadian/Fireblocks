import React, { useState } from 'react';
import {
  TextField,
  IconButton,
  Box,
  Paper,
  Autocomplete,
} from '@mui/material';
import { Search, LocationOn } from '@mui/icons-material';
import { popularCities } from './constants';
import {
  searchBarContainerSx,
  locationIconSx,
  autocompleteSx,
  searchButtonSx,
} from './styles';

interface SearchBarProps {
  onSearch: (city: string) => void;
  loading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading = false }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = () => {
    if (searchValue.trim()) onSearch(searchValue.trim());
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') handleSearch();
  };

  const handleAutocompleteChange = (_event: React.SyntheticEvent, newValue: string | null) => {
    if (newValue) {
      setSearchValue(newValue);
      onSearch(newValue);
    }
  };

  return (
    <Paper elevation={0} sx={searchBarContainerSx}>
      <Box sx={locationIconSx}>
        <LocationOn />
      </Box>
      
      <Autocomplete
        freeSolo
        options={popularCities}
        value={searchValue}
        onChange={handleAutocompleteChange}
        onInputChange={(_event, newInputValue) => setSearchValue(newInputValue)}
        sx={autocompleteSx}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search for a city..."
            variant="outlined"
            onKeyPress={handleKeyPress}
            disabled={loading}
          />
        )}
      />

      <IconButton
        onClick={handleSearch}
        disabled={loading || !searchValue.trim()}
        sx={searchButtonSx}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar; 