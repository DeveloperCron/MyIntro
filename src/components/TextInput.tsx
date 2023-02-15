import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { useTheme } from '@/theme/ThemeContext';

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

// Based on MUI Base TextInput
const StyledInputContainer = styled.input<{ themeType: string }>`
  width: 250px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
  color: ${(props) => (props.themeType === 'dark' ? grey[300] : grey[900])};
  background: ${(props) => (props.themeType === 'dark' ? grey[900] : '#fff')};
  border: 1px solid
    ${(props) => (props.themeType === 'dark' ? grey[700] : grey[200])};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    outline: 1px solid
      ${(props) => (props.themeType === 'dark' ? blue[500] : blue[200])};
  }
`;

interface TextInputProps {
  onChangeHandler?: () => React.ChangeEvent;
  placeHolder: string;
  value?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  onChangeHandler,
  placeHolder,
  value,
}) => {
  const { themeType } = useTheme();

  return (
    <StyledInputContainer placeholder={placeHolder} themeType={themeType} />
  );
};

export default TextInput;
