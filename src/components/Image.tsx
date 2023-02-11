import React from 'react';
import styled from 'styled-components';
import { Skeleton } from '@mui/material';

const Container = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

const ImageContainer = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;
const Image: React.FC<{ imageRender: string }> = ({ imageRender }) => {
  return (
    <Container>
      {imageRender ? (
        <ImageContainer src={imageRender} />
      ) : (
        <Skeleton variant="circular" width={300} height={300} />
      )}
    </Container>
  );
};

export default Image;
