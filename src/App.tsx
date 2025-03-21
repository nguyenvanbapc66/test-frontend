import styled from 'styled-components';

import { Header, Footer } from './components';
import { HomeStyled } from './components/home';

function App() {
  return (
    <StyledApp>
      <Header />
      <HomeStyled />
      <Footer />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  width: 100vw;
  position: relative;
`;
