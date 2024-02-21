import customMarkerIcon from "../components/CustomMarkerIcon";
import { CountriesData } from "../interfaces/CountriesData";
import { CountryData } from "../interfaces/CountryData";
import { Station } from "../interfaces/Station";
import { LayersType } from "../types/LayersType";

interface parseLayerDataProps {
    currentLayer: LayersType;
    countriesData: CountriesData;
    countryNetworksData: CountryData | undefined;
    networkStationsData: Station[] | undefined;
    handleCountryClick: (countryData: CountryData) => void;
    handleNetworkClick: (selectedNetwork: Station[]) => void;
}

export const parseLayerData = ({ currentLayer, countriesData, countryNetworksData, networkStationsData, handleCountryClick, handleNetworkClick }: parseLayerDataProps) => {
    let layerData;

    switch (currentLayer) {
        case 1:
            layerData = Object.entries(countriesData).map(([country, countryData]) => ({
                key: country,
                position: countryData.position,
                icon: customMarkerIcon(typeof countryData.count === 'number' ? countryData.count : "loading"),
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
                icon: customMarkerIcon(typeof network.stations_qty === 'number' ? network.stations_qty : "loading"),
                title: network.name,
                details: [`Name: ${network.id}`],
                buttonText: "Check stations",
                buttonAction: () => network.stations && handleNetworkClick(network.stations)
            }));
            break;

        case 3:
            layerData = networkStationsData && networkStationsData.map((station) => ({
                key: station.id,
                position: [station.latitude, station.longitude],
                icon: customMarkerIcon(typeof station.free_bikes === 'number' ? station.free_bikes : "loading"),
                title: station.name,
                details: [`Free bikes: ${station.free_bikes}`, `Empty slots: ${station.empty_slots}`],
                buttonAction: () => ("hidden feature")
            }));
            break;

        default:
            break;
    }

    return layerData;
};