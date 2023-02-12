import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { closeModal, selectCount } from '@/reducers/contentReducer';
import {
  ModalWindow,
  ModalContainer,
  CloseButtonContainer,
  ModalHeader,
  BottomContainer,
} from './ModalStyles';
import { Stack, Backdrop, Typography, Box } from '@mui/material';
import TextInput from '@/components/TextInput';
import {
  faXmarkCircle,
  faLightbulb,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring } from '@react-spring/web';
import { useTheme } from '@/theme/ThemeContext';
import ModalFooter from './ModalFooter';

interface CloseButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  bgcolor: string;
}

const Title = ({ color }: { color: string }) => {
  return (
    <Stack direction={'column'}>
      <Typography
        variant="h6"
        component="h1"
        color={color}
        sx={{ fontWeight: 'bold' }}
      >
        Edit
      </Typography>
      <Stack
        direction={'row'}
        alignItems={'center'}
        color={color}
        spacing={0.5}
      >
        <FontAwesomeIcon icon={faLightbulb} />
        <Typography variant="subtitle2" component={'h2'}>
          Tip! Make sure to use small names!
        </Typography>
      </Stack>
    </Stack>
  );
};

const CloseButton = ({ onClick, bgcolor }: CloseButtonProps) => {
  const [isHovered, setHovered] = useState<boolean>(false);

  const scale = useSpring({
    to: {
      transform: isHovered ? 'scale(1.2)' : 'scale(1)',
    },
  });

  return (
    <CloseButtonContainer
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      bgcolor={bgcolor}
      style={scale}
    >
      <FontAwesomeIcon icon={faXmarkCircle} size={'lg'} color={'#fff'} />
    </CloseButtonContainer>
  );
};

const Forum = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '25ch',
      }}
    >
      <Stack spacing={1} direction={'column'}>
        <TextInput placeHolder="Subject" />
        <TextInput placeHolder="Name" />
      </Stack>
    </Box>
  );
};

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const content = useAppSelector(selectCount);
  const { theme } = useTheme();

  const isModalOpen = content.showModal;

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isModalOpen}
    >
      <ModalWindow bgcolor={theme.primary}>
        <ModalContainer>
          <Stack alignItems={'center'} spacing={2} direction={'column'}>
            <ModalHeader>
              <Title color={theme.color} />
              <CloseButton
                onClick={closeModalHandler}
                bgcolor={theme.secondary}
              />
            </ModalHeader>
            <BottomContainer
              direction={'row'}
              spacing={'row'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Forum />
            </BottomContainer>
          </Stack>
        </ModalContainer>
        <ModalFooter />
      </ModalWindow>
    </Backdrop>
  );
};

export default Modal;
