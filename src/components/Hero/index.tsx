import bicycle from "../../assets/bicycle.png"
import { HeroContainer, HeroImage, HeroList } from "./styles";

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
            <HeroList>
                <li>First Category: Networks per Country</li>
                <li>Second Category: Stations per Network</li>
                <li>Third Category: Stations</li>
            </HeroList>
        </HeroContainer>
    );
}

export default Hero;