import React from 'react';
import styled from 'styled-components';
import FloatingButton from '@/components/FloatingButton';
import { useTheme } from '@/theme/ThemeContext';

const Container = styled.div<{ bgColor: string }>`
  height: 10%;
  width: 100%;
  background-color: ${(props) => props.bgColor};
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Container bgColor={theme.primary}>
      <FloatingButton />
    </Container>
  );
};

export default Footer;
