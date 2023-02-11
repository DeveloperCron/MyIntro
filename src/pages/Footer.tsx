import React from 'react';
import styled from 'styled-components';
import FloatingButton from '@/components/FloatingButton';

const Container = styled.div`
  height: auto;
  width: auto;
  justify-content: space-between;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  border-radius: 50px;
  align-items: center;
  margin: 20px;
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <FloatingButton />
    </Container>
  );
};

export default Footer;
