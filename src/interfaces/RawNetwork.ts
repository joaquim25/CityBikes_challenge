export interface RawNetwork {
    company: string[]; // Network companies
    href: string; // URL for network endpoint
    id: string; // Unique identifier for the network
    name: string; // Name of the network
    location: {
        city: string; // City where the network is located
        country: string; // Country where the network is located
        latitude: number; // Latitude of the network location
        longitude: number; // Longitude of the network location
    }
}