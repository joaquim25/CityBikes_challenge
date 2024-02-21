import styled from "styled-components";
import Hero from "./components/Hero";
import MapComponent from "./components/MapComponent";
import Navbar from "./components/Navbar";

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 20px;
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
