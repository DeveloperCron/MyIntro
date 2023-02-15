import React from 'react';
import styled from 'styled-components';
import { Skeleton } from '@mui/material';
import { IconButton } from '@mui/material';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageContainer = styled.div`
  width: 190px;
  height: 190px;
  border-radius: 10px;
`;

const UploadPicture: React.FC = () => {
  return (
    <ImageContainer>
      {/* <Skeleton variant="circular" width={190} height={190} /> */}
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <FontAwesomeIcon icon={faCamera} color={'blue'} size={'1x'} />
      </IconButton>
    </ImageContainer>
  );
};

export default UploadPicture;
