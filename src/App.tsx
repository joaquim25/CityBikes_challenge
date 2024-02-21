import styled from "styled-components";
import Hero from "./components/Hero";
import MapComponent from "./components/MapComponent";
import Navbar from "./components/Navbar";

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 800px){
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
        <MapComponent />
      </MainContainer>
    </>
  );
}

export default App;
