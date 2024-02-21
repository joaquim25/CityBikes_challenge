import axios from 'axios';

// Async function to fetch networks data
export async function fetchNetworksData() {
    try {
        // GET request to the 'networks' endpoint
        const response = await axios.get('http://api.citybik.es/v2/networks');
        return response.data.networks;
    } catch (error) {
        // Throws an error if the data fetch fails
        throw new Error('Error fetching data');
    }
}