import React from 'react';
import { createPortal } from 'react-dom';
import { useAppSelector } from '@/hooks/hooks';
import { selectCount } from '@/reducers/contentReducer';
import { useTheme } from '@/theme/ThemeContext';
import { Container, Content, ContentTextBox } from './HomeStyles';
import Image from '@/components/Image';
import { Typography, Divider } from '@mui/material';
import Modal from './modal/Modal';

const Home: React.FC = () => {
  const homeContent = useAppSelector(selectCount);
  const { theme } = useTheme();

  const showModal = homeContent.showModal;

  return (
    <Container primary={theme.primary} color={theme.color}>
      <Content
        divider={<Divider orientation="vertical" flexItem />}
        direction={'row'}
        spacing={8}
        alignItems="center"
      >
        <Image imageRender={homeContent.imageRender} />
        <ContentTextBox>
          <Typography variant="h4" fontStyle={'bold'}>
            {homeContent.title}
          </Typography>
          <Typography variant="h6">{homeContent.description}</Typography>
        </ContentTextBox>
      </Content>
      {showModal && createPortal(<Modal />, document.body)}
    </Container>
  );
};

export default Home;
