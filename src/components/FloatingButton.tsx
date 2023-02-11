import React from 'react';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fab, Box } from '@mui/material';
import { useAppDispatch } from '@/hooks/hooks';
import { openModal } from '@/reducers/contentReducer';

const FloatingButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openModal());
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="secondary" aria-label="edit" onClick={handleClick}>
        <FontAwesomeIcon icon={faPenToSquare} size={'lg'} />
      </Fab>
    </Box>
  );
};

export default FloatingButton;
