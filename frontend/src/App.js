import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { darkTheme, lightTheme } from "./utils/Theme";
import { Route, BrowserRouter, Routes, redirect } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div` 
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  padding: 20px 30px;
`;

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>

  );
}

export default App;
