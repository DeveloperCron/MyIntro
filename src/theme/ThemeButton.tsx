import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from './ThemeContext';
import { IconButton } from '@mui/material';

const ThemeButton: React.FC = () => {
  const { themeType, setCurrentTheme, theme } = useTheme();

  const currentIcon = themeType == 'dark' ? faMoon : faCircleHalfStroke;

  // Sets the theme
  const onClickHandler = () => {
    themeType == 'light' ? setCurrentTheme('dark') : setCurrentTheme('light');
  };

  return (
    <IconButton
      onClick={onClickHandler}
      sx={{
        marginLeft: '20px',
      }}
    >
      <FontAwesomeIcon icon={currentIcon} size="sm" color={theme.color} />
    </IconButton>
  );
};

export default ThemeButton;
