import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@/theme/ThemeContext';
import Button from '@/components/Button';
import ThemeMenu from '@/theme/ThemeButton';

const Container = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 15%;
  background-color: ${(props) => props.bgColor};
  position: absolute;
  border-radius: 20px;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

interface ModalFooterProps {
  onClickHandler: (event: React.MouseEvent) => void;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ onClickHandler }) => {
  const { theme } = useTheme();
  return (
    <Container bgColor={theme.third}>
      <ThemeMenu />
      <Button placeHolder="Save" onClick={onClickHandler} />
    </Container>
  );
};

export default ModalFooter;
