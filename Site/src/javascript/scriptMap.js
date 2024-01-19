let mapOptions = {
    center:[51.958, 9.141],
    zoom:10
}

//Objet map pour la creer
let map = new L.map('map' , mapOptions);

// Tu touche pas a ca
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

//met un marqueur sur la map avec les coordinees
let marker = new L.Marker([51.958, 9.141]);

// Ajoute le marqueue
marker.addTo(map);
