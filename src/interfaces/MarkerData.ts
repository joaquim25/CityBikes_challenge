import { DivIcon, LatLngExpression } from "leaflet";

export interface MarkerData {
    key: string | number; // Unique key for the marker
    position: LatLngExpression | [number, number]; // Position of the marker on the map
    icon: DivIcon; // Icon for the marker
    title: string; // Title for the marker Popup
    details: string[]; // Details to be displayed in the marker Popup
    buttonText?: string; // Text for a optional button in the popup
    buttonAction: () => void; // Callback function for the button action
}