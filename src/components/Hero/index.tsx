import styled from "styled-components";
import bicycle from "../../assets/bicycle.png"

const HeroContainer = styled.div`
    float: left;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HeroImage = styled.img`
    height: 160px;
`


function Hero() {
    return (
        <HeroContainer>
            <HeroImage src={bicycle} />
            <p>
                Explore this webapp by navigating the map, either with the inbuilt map buttons.
            </p>
            <p>
                By scrolling and clicking on the available markers, you are able to navigate in
                three main categories:
            </p>
            <ul>
                <li>First Category: Networks per Country</li>
                <li>Second Category: Stations per Network</li>
                <li>Third Category: Stations</li>
            </ul>
        </HeroContainer>
    );
}

export default Hero;