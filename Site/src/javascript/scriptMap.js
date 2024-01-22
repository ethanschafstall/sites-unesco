// ETML
// Auteur : Philippe Heijkoop
// Date : 15.01.2024
// Description : Map functionality code

// Map parameters (starting position, zoom amount).
let mapOptions = {
    center:[51.958, 9.141],
    zoom:10
}

// Object for creating the map.
let map = new L.map('map' , mapOptions);

// The different layers of the map.
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

// Marker object with cords.
let marker = new L.Marker([51.958, 9.141]);

// Add the marker to the map.
marker.addTo(map);
