import { LatLngExpression } from "leaflet";

export interface Station {
    empty_slots: number; // Number of empty bike slots available at the station
    free_bikes: number; // Number of free bikes available at the station
    id: string; // Unique identifier for the station
    latitude: number; // Latitude of the station location
    longitude: number; // Longitude of the station location
    position: LatLngExpression; // Position of the station on the map
    name: string; // Name of the station
    timestamp: string; // Timestamp for the station data
    extra: {
        address: string;    // Station address
        description: string;    // Some extra description information
        last_update: string;    // Last update timestamp
        online: true;           // Station status
        photo: string;          // Stations company or related photo url
        uid: string;            // Unique station identifier
    }
}