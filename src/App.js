import styled from 'styled-components';
import { Footer } from './components/Footer';
import { Main } from './components/Main';

const AppContainer = styled.div`
  position: relative;
  overflow: hidden;  
`;

const App = () => {
  return (
    <>
    <AppContainer>      
      <Main />      
    </AppContainer>
    <Footer />
    </>
  );
}

export default App;
