import * as React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './stores/contentStore';
import { ThemeProvider } from './theme/ThemeContext';
import Home from './pages/Home';
import Footer from './pages/Footer';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Container>
          <Home />
          <Footer />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
