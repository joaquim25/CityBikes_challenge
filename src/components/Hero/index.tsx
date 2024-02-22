// Importing the bicycle image and styled components
import bicycle from "../../assets/bicycle.png"
import { HeroContainer, HeroImage, HeroList, OfflineItem, OnlineItem, UnknownItem } from "./styles";

function Hero() {
    return (
        <HeroContainer>
            <HeroImage src={bicycle} />
            <h1>Welcome</h1>

            {/* Informational paragraphs */}
            <p>
                Explore this webapp by navigating the map, either with the inbuilt map buttons + & - or
                by scrolling and clicking on the available markers, you can explore
                three main categories:
            </p>
            {/* List of categories */}
            <HeroList>
                <li><span>First Category:</span> Networks per Country</li>
                <li><span>Second Category:</span> Stations per Network</li>
                <li><span>Third Category:</span> Stations</li>
            </HeroList>

            {/* Station status information*/}
            <h2>Station status:</h2>
            <HeroList>
                <OnlineItem>- Online</OnlineItem>
                <OfflineItem>- Offline</OfflineItem>
                <UnknownItem>- Unknown</UnknownItem>
            </HeroList>
        </HeroContainer>
    );
}

export default Hero;