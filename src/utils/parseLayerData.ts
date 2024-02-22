// customMarkerIcon component
import customMarkerIcon from "../components/CustomMarkerIcon";

// Interfaces and types
import { CountriesData } from "../interfaces/CountriesData";
import { CountryData } from "../interfaces/CountryData";
import { Station } from "../interfaces/Station";
import { LayersType } from "../types/LayersType";

// Interface defining the props for the parseLayerData function
interface parseLayerDataProps {
    currentLayer: LayersType;
    countriesData: CountriesData;
    countryNetworksData: CountryData | undefined;
    networkStationsData: Station[] | undefined;
    handleCountryClick: (countryData: CountryData) => void;
    handleNetworkClick: (selectedNetwork: Station[]) => void;
}

// Function that parses layer data based on the current layer to the intended outcome
export const parseLayerData = ({ currentLayer, countriesData, countryNetworksData, networkStationsData, handleCountryClick, handleNetworkClick }: parseLayerDataProps) => {
    let layerData;

    // Based on the current layer provided, data is parsed accordingly( 1: Number of networks, per country, 2:Number of stations, per network, 3: Station details)
    switch (currentLayer) {
        case 1:
            layerData = Object.entries(countriesData).map(([country, countryData]) => ({
                key: country,
                position: countryData.position,
                icon: customMarkerIcon({ count: typeof countryData.count === 'number' ? countryData.count : "loading" }),
                title: country,
                details: [`Networks: ${countryData.count}`],
                buttonText: "Check networks",
                buttonAction: () => handleCountryClick(countryData)
            }));
            break;

        case 2:
            layerData = countryNetworksData && countryNetworksData.networks.map((network) => ({
                key: network.id,
                position: network.position,
                icon: customMarkerIcon({ count: typeof network.stations_qty === 'number' ? network.stations_qty : "loading" }),
                title: network.name,
                details: [`Name: ${network.id}`, `Stations: ${network.stations_qty}`],
                buttonText: "Check stations",
                buttonAction: () => network.stations && handleNetworkClick(network.stations)
            }));
            break;

        case 3:
            layerData = networkStationsData && networkStationsData.map((station) => ({
                key: station.id,
                position: [station.latitude, station.longitude],
                icon: customMarkerIcon({ count: typeof station.free_bikes === 'number' ? station.free_bikes : "loading", online: station.extra.online }),
                title: station.name,
                details: [`Free bikes: ${station.free_bikes}`, `Empty slots: ${station.empty_slots}`],
                photo: station.extra.photo,
                buttonAction: () => ("hidden feature"),
            }));
            break;

        default:
            break;
    }

    return layerData;
};