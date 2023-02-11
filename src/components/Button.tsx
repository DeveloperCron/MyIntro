import React from 'react';
import { Button as Btn } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@/theme/ThemeContext';

type variant = 'text' | 'contained' | 'outlined';

interface Button {
  text: string;
  clickHandler: () => void;
  variant: variant;
}

const BootstrapButton = styled(Btn)({
  width: 'auto',
  height: '50%',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  borderRadius: '10px',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const Button: React.FC<Button> = ({ clickHandler, text, variant }) => {
  const { theme } = useTheme();

  return (
    <BootstrapButton
      onClick={clickHandler}
      variant={variant}
      sx={{ backgroundColor: theme.secondary }}
    >
      {text}
    </BootstrapButton>
  );
};
export default Button;
