import axios from 'axios';

// Async function to fetch station data for a network
export async function fetchStationData(networkId: string) {
    // GET request to the dinamically specified API endpoint (network id) filtering only the id,name,location,station fields
    const response = await axios.get(`http://api.citybik.es/v2/networks/${networkId}?fields=id,name,location,stations`);
    return response.data.network.stations;
}