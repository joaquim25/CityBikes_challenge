import { Station } from "./Station";

export interface Network {
    id: string; // Unique identifier for the network
    name: string; // Name of the network
    position: [number, number]; // Position of the network marker on the map
    stations?: Station[]; // List of stations in the network
    stations_qty?: number; // Quantity of stations in the network
}