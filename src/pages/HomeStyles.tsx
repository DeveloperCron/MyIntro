import styled from 'styled-components';
import { Stack } from '@mui/material';

export const Container = styled.div<{ primary: string; color: string }>`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.primary};
  color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Content = styled(Stack)`
  width: 700px;
  height: 350px;
`;

export const ContentTextBox = styled(Stack)``;
