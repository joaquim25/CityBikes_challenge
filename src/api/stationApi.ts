import axios from 'axios';

// Async function to fetch station data for a network
export async function fetchStationData(networkId: string) {
    try {
        // GET request to the dinamically specified API endpoint (network id)
        const response = await axios.get(`http://api.citybik.es/v2/networks/${networkId}`);
        return response.data.network.stations;
    } catch (error) {
        // Throws an error if the data fetch fails
        throw new Error('Error fetching data');
    }
}