import React, { useState, Dispatch, SetStateAction } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  closeModal,
  selectCount,
  changeContent,
} from '@/reducers/contentReducer';
import {
  ModalWindow,
  ModalContainer,
  CloseButtonContainer,
  ModalHeader,
  BottomContainer,
} from './ModalStyles';
import { Stack, Backdrop, Typography, Box } from '@mui/material';
import TextInput from '@/components/TextInput';
import UploadPicture from '@/components/UploadPicture';
import {
  faXmarkCircle,
  faLightbulb,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring } from '@react-spring/web';
import { useTheme } from '@/theme/ThemeContext';
import ModalFooter from './ModalFooter';

type TextField = string | number;
type stateChange = Dispatch<SetStateAction<TextField>>;

interface ForumProps {
  titleChange: stateChange;
  descChange: stateChange;
}

interface CloseButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  bgcolor: string;
}

// Modal header
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
          Tip! Make sure to use short names!
        </Typography>
      </Stack>
    </Stack>
  );
};

/**
  A CloseButton component that displays an icon of an X-mark circle that can be clicked to close a UI element.
  It can be customized with a background color and an onClick function.
  @param {function} onClick - A function to be called when the CloseButton is clicked.
  @param {string} bgcolor - A string representing the background color of the CloseButton.
  @returns {JSX.Element} - A React component representing the CloseButton.
*/
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

const Forum = ({ titleChange, descChange }: ForumProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '25ch',
      }}
    >
      <Stack spacing={1} direction={'column'}>
        <TextInput placeHolder="Subject" onChangeHandler={titleChange} />
        <TextInput placeHolder="Name" onChangeHandler={descChange} />
      </Stack>
    </Box>
  );
};

const Modal: React.FC = () => {
  const [imageRender, setImageRender] = useState<string | null>(null);
  const [title, setTitle] = useState<TextField>('');
  const [description, setDescription] = useState<TextField>('');
  const [isTextEmpty, setTextEmpty] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const content = useAppSelector(selectCount);
  const { theme } = useTheme();

  const isModalOpen = content.showModal;

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const saveButtonHandler = () => {
    if (title !== '' && description !== '') {
      dispatch(changeContent({ title, description, imageRender }));
      dispatch(closeModal());
    } else {
      console.log('hey bro');
      setTextEmpty(true);
    }
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
            <BottomContainer direction={'row'} spacing={5}>
              <UploadPicture
                imageUrl={imageRender}
                setImageUrl={setImageRender}
              />
              <Forum titleChange={setTitle} descChange={setDescription} />
            </BottomContainer>
          </Stack>
        </ModalContainer>
        <ModalFooter onClickHandler={saveButtonHandler} />
      </ModalWindow>
    </Backdrop>
  );
};

export default Modal;
