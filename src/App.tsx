// Styled components library
import styled from "styled-components";

// Components
import Hero from "./components/Hero";
import Map from "./components/Map";
import Navbar from "./components/Navbar";

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 900px){
    grid-template-columns: 30% 70%;
    grid-template-rows: 1fr;
  }
`

function App() {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Hero />
        <Map />
      </MainContainer>
    </>
  );
}

export default App;
