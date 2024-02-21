import { LatLngExpression } from "leaflet";
import { Network } from "./Network";

export interface CountryData {
    count: number; // Number of networks in the country
    position: LatLngExpression; // Position of the country marker on the map
    networks: Network[]; // List of networks in the country
}