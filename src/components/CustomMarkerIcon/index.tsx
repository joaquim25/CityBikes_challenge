// Importing the Leaflet library, necessary function and animation spinner
import Leaflet from 'leaflet';
import { renderToString } from 'react-dom/server';
import { RotatingLines } from 'react-loader-spinner';

// Defining the interface for customMarkerIcon properties
interface customMarkerIconProps {
    count: number | string;
    online?: boolean;
}

// Function to generate custom dynamic marker icons
const customMarkerIcon = ({ count, online }: customMarkerIconProps) => {
    // Render the RotatingLines component to HTML
    const loadingHtml = renderToString(<RotatingLines />);

    // Determine the appropriate icon class name based on the online status or its absence
    const iconClassName = online === true ? 'online-marker' : online === false ? 'offline-marker' : 'custom-marker';

    // Switch statement to return the different marker icons
    switch (count) {
        case "loading":
            return Leaflet.divIcon({
                className: 'loading-marker',
                html: loadingHtml,
                iconSize: [20, 20]
            });
        default:
            return Leaflet.divIcon({
                className: `${iconClassName}`,
                html: `<div>${count}</div>`,
                iconSize: [30, 30]
            });
    }
};

export default customMarkerIcon;