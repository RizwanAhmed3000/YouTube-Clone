import styled from "styled-components";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div` 
  flex: 7;
  border: 1px solid red;
`;
const Wrapper = styled.div``;

function App() {
  return (

    <Container>
      {/* Menu */}
      <Menu />
      {/* Main */}
      <Main>
        <Navbar />
        <Wrapper>
          video contsiner
        </Wrapper>
      </Main>

    </Container>

  );
}

export default App;
