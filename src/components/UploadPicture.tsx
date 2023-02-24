import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { IconButton, Typography } from '@mui/material';
import { useTheme } from '@/theme/ThemeContext';

const Container = styled.div`
  width: 180px;
  height: 180px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 100%;
  flex-direction: column;
  gap: 10px;
`;

const ImageContainer = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 50%;
  display: block;
`;

interface UploadContainerProps {
  color: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => HTMLElement;
}

const UploadContainer = ({ color, onChangeHandler }: UploadContainerProps) => {
  return (
    <Container>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" onChange={onChangeHandler} />
        <FontAwesomeIcon icon={faUpload} size="1x" color={color} />
      </IconButton>
      <Typography variant="body2" color={color}>
        Upload Picture
      </Typography>
    </Container>
  );
};

interface UploadPictureProps {
  imageUrl: null | string;
  setImageUrl: (result: string | null) => void;
}

const UploadPicture: React.FC<UploadPictureProps> = ({
  imageUrl,
  setImageUrl,
}) => {
  const { theme } = useTheme();

  /* 
    Handles the event when a user uploads an image.
    @param event - The event object from the input element.
    @returns - HTMLElement<img>.
  */
  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): any => {
    event.preventDefault();
    const file = event.target.files?.[0];
    // file is possibly null
    if (file != null) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        const result = fileReader.result;
        if (typeof result === 'string') {
          setImageUrl(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      {imageUrl ? (
        <ImageContainer src={imageUrl} />
      ) : (
        <UploadContainer
          color={theme.color}
          onChangeHandler={handleImageUpload}
        />
      )}
    </Container>
  );
};

export default UploadPicture;
