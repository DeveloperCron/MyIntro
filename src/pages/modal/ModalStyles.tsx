import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { Stack } from '@mui/material';

export const ModalWindow = styled.div<{ bgcolor: string }>`
  width: 600px;
  height: 350px;
  background-color: ${(props) => props.bgcolor};
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 20px;
`;
export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
`;
export const ModalHeader = styled.div`
  height: 20%;
  width: 90%;
  margin-top: 10px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CloseButtonContainer = styled(animated.div)<{
  bgcolor: string;
}>`
  width: 36px;
  height: 36px;
  background-color: ${(props) => props.bgcolor};
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

export const BottomContainer = styled(Stack)`
  width: 100%;
  height: 100%;
`;
