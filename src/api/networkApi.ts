import axios from 'axios';

// Async function to fetch networks data
export async function fetchNetworksData() {
    // GET request to the 'networks' endpoint filtering only the location and id
    const response = await axios.get('http://api.citybik.es/v2/networks?fields=location,id');
    return response.data;
}