// Necessary CSS styles for Leaflet map library
import "leaflet/dist/leaflet.css";

//Icon
import { IoReturnDownBack } from "react-icons/io5";

// Components and hooks
import LayerMarkers from '../LayerMarkers';
import { useState, useEffect } from 'react';
import { TileLayer } from 'react-leaflet';

// API and utility functions
import { fetchNetworksData } from '../../api/networkApi';
import { fetchStationData } from '../../api/stationApi';
import { parseNetworkData } from '../../utils/parseNetworkData';

// Interfaces and types
import { CountriesData } from '../../interfaces/CountriesData';
import { CountryData } from '../../interfaces/CountryData';
import { Station } from '../../interfaces/Station';
import { LayersType } from '../../types/LayersType';
import { CustomMapContainer, GoBackBtn } from "./styles";

const MapComponent = () => {
    // State variables for managing data
    // countriesData: holds data about all countries and their associated networks
    const [countriesData, setCountriesData] = useState<CountriesData>({});
    // countryNetworksData: holds data about networks in a selected country
    const [countryNetworksData, setCountryNetworksData] = useState<CountryData>();
    // networkStationsData: holds data about stations in a selected network
    const [networkStationsData, setNetworkStationsData] = useState<Station[]>([]);

    // UI state
    // 1: Countries layer (L1), 2: Network layer (L2), 3: Stations layer (L3)
    const [currentLayer, setCurrentLayer] = useState<LayersType>(1);

    // Fetching data on initial render
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetching citybik.es API main endpoint
                const rawData = await fetchNetworksData();
                // Parsing the rawData iot determine the total of networks per country and organize data
                const countries = parseNetworkData(rawData);

                // Updating the state with the parsed data
                setCountriesData(countries);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Handling a click on a country marker "check networks" button
    const handleCountryClick = async (countryData: CountryData) => {
        // Updating the current layer to (L2: Network layer)
        setCurrentLayer(2);

        // Update the country's network temporarly iot show a marker without the stations quantity info while it loads
        setCountryNetworksData(countryData);

        // Fetching station data for each network in the country (to be able to determine how many stations there are in each network)
        const updatedNetworks = await Promise.all(countryData.networks.map(async (network) => {
            const response = await fetchStationData(network.id)
            return {
                ...network,
                stations: response,
                stations_qty: response.length
            };
        }));

        // Updating the country's network with stations and station quantity information
        setCountryNetworksData({
            ...countryData,
            networks: updatedNetworks
        });
    };

    // Handling a click on a network "check stations" button
    const handleNetworkClick = (selectedNetwork: Station[]) => {
        // Setting the selected Network's station data
        setNetworkStationsData(selectedNetwork);
        // Updating the current layer to (L3: Stations layer)
        setCurrentLayer(3);
    }

    const handleBack = () => {
        // Reset the country network data
        if (currentLayer === 2) {
            setCountryNetworksData(undefined);
        }
        // Moves current layer state back to the previous layer
        setCurrentLayer((prevValue) => prevValue - 1);
    };

    return (
        <>
            {/* Leaflet Map Container */}
            <CustomMapContainer center={[45, 0]} zoom={4}>
                {/* Leaflet component that shows the map tile layers*/}
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {/* Dinamic component that renders the Markers layers (L1,L2,L3) */}
                <LayerMarkers
                    currentLayer={currentLayer}
                    countriesData={countriesData}
                    countryNetworksData={countryNetworksData}
                    networkStationsData={networkStationsData}
                    handleCountryClick={handleCountryClick}
                    handleNetworkClick={handleNetworkClick}
                />
                {/* A navigation "back" button that displays in L2,L3 */}
                {currentLayer > 1 && <GoBackBtn onClick={handleBack}><IoReturnDownBack /></GoBackBtn>}
            </CustomMapContainer>
        </>
    );
};

export default MapComponent;