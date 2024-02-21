// Components
import { Marker, Popup, useMap } from 'react-leaflet';

// Interfaces and types
import { CountryData } from "../../interfaces/CountryData"
import { CountriesData } from '../../interfaces/CountriesData';
import { Station } from '../../interfaces/Station';
import { MarkerData } from '../../interfaces/MarkerData';
import { LayersType } from '../../types/LayersType';
import { useMemo } from 'react';
import { LatLngBoundsExpression, LatLngExpression, latLngBounds } from 'leaflet';
import { parseLayerData } from '../../utils/parseLayerData';

interface LayerMarkersProps {
    currentLayer: LayersType;
    countriesData: CountriesData;
    countryNetworksData: CountryData | undefined;
    networkStationsData: Station[] | undefined;
    handleCountryClick: (countryData: CountryData) => void;
    handleNetworkClick: (selectedNetwork: Station[]) => void;
}

// Dinamic component to render marker on the map based on the current layer
const LayerMarkers = ({
    currentLayer,
    countriesData,
    countryNetworksData,
    networkStationsData,
    handleCountryClick,
    handleNetworkClick
}: LayerMarkersProps) => {
    // Calculate the layer data using useMemo to optimize performance
    // @ts-expect-error TO-DO: should fix this typing issue later
    const layerData: MarkerData[] | undefined = useMemo(() => parseLayerData({ currentLayer, countriesData, countryNetworksData, networkStationsData, handleCountryClick, handleNetworkClick }), [currentLayer, countriesData, countryNetworksData, networkStationsData, handleCountryClick, handleNetworkClick]);

    // Get hold of the map instance using useMap leaflet hook
    const map = useMap();

    // Update map bounds based on current layer marker disposition
    useMemo(() => {
        // Check if the layer data is available and it's not the L1 layer
        if (layerData && layerData.length > 0 && currentLayer !== 1) {
            // extract positions from layer data to create a bounds array
            const bounds = layerData.reduce((acc, marker) => {
                const position: LatLngExpression = marker.position!;
                acc.push(position);
                return acc;
            }, [] as LatLngExpression[]);

            // Calculates the map bounds based on positions and fit the map to those bounds
            const mapBounds: LatLngBoundsExpression = latLngBounds(bounds);
            map.fitBounds(mapBounds, { animate: true });
        }

        // If the current layer is the base layer, fit the map to a set bound
        if (currentLayer == 1) {
            const worldBounds: LatLngBoundsExpression = [[56.00, -46.00], [21.89, 63.57]];
            map.fitBounds(worldBounds, { animate: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentLayer]);

    return (
        <>
            {layerData && layerData.map(marker => (
                <Marker
                    key={marker.key}
                    position={marker.position}
                    icon={marker.icon}
                    eventHandlers={{
                        click: (e) => e.target.openPopup()
                    }}
                >
                    <Popup>
                        <div>
                            <h2>{marker.title}</h2>
                            {marker.details.map((detail, index) => (
                                <p key={index}>{detail}</p>
                            ))}
                            {marker.buttonText && <button onClick={() => marker.buttonAction()}>{marker.buttonText}</button>}
                        </div>
                    </Popup>
                </Marker>
            ))}
        </>
    );
};

export default LayerMarkers;