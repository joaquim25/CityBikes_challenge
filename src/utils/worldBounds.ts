import Leaflet from 'leaflet';

// Determines bounds that strict the user from navigating outside of the map boundaries

const corner1 = Leaflet.latLng(-90, -200)
const corner2 = Leaflet.latLng(90, 200)

export const worldBounds = Leaflet.latLngBounds(corner1, corner2)