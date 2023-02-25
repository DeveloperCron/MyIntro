import * as React from 'react';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const purple = {
  500: '#8430D5',
  600: '#7d26d1',
  700: '#761dcc',
};

const grey = {
  100: '#eaeef2',
  300: '#afb8c1',
  900: '#24292f',
};

const CustomButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${purple[500]};
  padding: 12px 24px;
  border-radius: 12px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  margin-right: 20px;

  &:hover {
    background-color: ${purple[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${purple[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 3px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
  `
);

interface ButtonProps {
  onClick?: (event: React.MouseEvent) => void;
  placeHolder: string;
}

/**

A Button component that displays a custom button with text and an optional onClick function.
@param {function} onClick - A function to be called when the button is clicked.
@param {string} placeHolder - The text to be displayed inside the button.
@returns {JSX.Element} - A React component representing the Button.
*/

const Button: React.FC<ButtonProps> = ({ onClick, placeHolder }) => {
  placeHolder = placeHolder || 'Submit';
  return <CustomButton onClick={onClick}>{placeHolder}</CustomButton>;
};

export default Button;
