// Interfaces for data structure
import { CountriesData } from "../interfaces/CountriesData";
import { RawNetwork } from "../interfaces/RawNetwork";

// Parses the raw network data insto a structured format and inicializes a counter to determine networks per country
export const parseNetworkData = (networks: RawNetwork[]) => {

    // Creates a single object organized by country codes as key values
    return networks.reduce((acc: CountriesData, network) => {
        // Get the country code
        const country = network.location.country;

        // Checks if the country already exists in the accumulator object
        if (!acc[country]) {
            // If it doesn't exist, initialize it
            acc[country] = {
                count: 1,
                position: [network.location.latitude, network.location.longitude],
                networks: [{
                    id: network.id,
                    name: network.location.city,
                    position: [network.location.latitude, network.location.longitude],
                }]
            };
        } else {
            // If it already exists, increment its counter and add the current network data
            acc[country].count += 1;
            acc[country].networks.push({
                id: network.id,
                name: network.location.city,
                position: [network.location.latitude, network.location.longitude]
            });

        }

        // Return the parsed object (accumulator)
        return acc;
    }, {});
};