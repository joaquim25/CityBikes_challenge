import L from 'leaflet';
import { renderToString } from 'react-dom/server';
import { RotatingLines } from 'react-loader-spinner';

// Function to generate custom marker icons (leaflet library)
const customMarkerIcon = (count: number | string) => {
    // Render the LoadingAnimation component to HTML
    const loadingHtml = renderToString(<RotatingLines />);

    switch (count) {
        case "loading":
            return L.divIcon({
                className: 'loading-marker',
                html: loadingHtml,
                iconSize: [20, 20]
            });
        default:
            return L.divIcon({
                className: 'custom-marker',
                html: `<div>${count}</div>`,
                iconSize: [30, 30]
            });
    }
};

export default customMarkerIcon;