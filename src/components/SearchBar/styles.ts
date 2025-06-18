export const searchBarContainerSx = {
  p: 1,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(40px) saturate(180%)',
  borderRadius: 3,
  border: '1px solid rgba(255, 255, 255, 0.6)',
  boxShadow: `
    0 8px 32px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.9)
  `,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: `
      0 12px 40px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 1)
    `,
  },
  '&:focus-within': {
    transform: 'translateY(-1px)',
    boxShadow: `
      0 12px 40px rgba(0, 122, 255, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 1)
    `,
  },
};

export const locationIconSx = {
  color: 'rgba(0, 122, 255, 0.8)',
  mr: 1,
  display: 'flex',
  alignItems: 'center',
};

export const autocompleteSx = {
  flex: 1,
  '& .MuiOutlinedInput-root': {
    border: 'none',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputBase-input': {
    padding: '12px 0',
    fontSize: '1rem',
    fontWeight: 500,
    color: '#1D1D1F',
    '&::placeholder': {
      color: 'rgba(29, 29, 31, 0.6)',
      opacity: 1,
    },
  },
};

export const searchButtonSx = {
  color: 'rgba(0, 122, 255, 0.8)',
  backgroundColor: 'rgba(0, 122, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  borderRadius: 2,
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    backgroundColor: 'rgba(0, 122, 255, 0.15)',
    color: 'rgba(0, 122, 255, 1)',
    transform: 'scale(1.05)',
  },
  '&:disabled': {
    color: 'rgba(29, 29, 31, 0.3)',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
}; 