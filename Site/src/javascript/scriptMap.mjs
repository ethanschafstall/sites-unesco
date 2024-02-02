// ETML
// Auteur : Philippe Heijkoop
// Date : 15.01.2024
// Description : Map functionality code

import { allMarkUnesco } from "./scriptMarker.mjs";

// Map parameters (starting position, zoom amount).
let mapOptions = {
    center:[46.5197, 6.6323],
    zoom:10
}

// Object for creating the map.
const map = new L.map('map' , mapOptions);

// The different layers of the map.
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

allMarkUnesco(map);