// latitude de l'utilisateur
let latitude = 0;
// longitude du user
let longitude = 0;
// demande de la localisation au navigateur
navigator.geolocation.getCurrentPosition(
    // obtention des positions
    function (position) {
        // obtention de la latitude
        latitude = position.coords.latitude;
        // obtention logitude
        longitude = position.coords.longitude;
        console.log(`latitude1 :${latitude}`);
        console.log(`longitude1 :${longitude}`);
        // option de centre de la carte + zoom
        let mapOptions = {
            center: [latitude, longitude],
            zoom: 10,
        }
        //Objet map pour la creer
        let map = new L.map('map', mapOptions);
 
        // ajout d'une couche(layer) a la carte
        let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
        map.addLayer(layer);
       
        //met un marqueur sur la map avec les coordinees
        let marker = new L.Marker([latitude, longitude]);
 
        // Ajoute le marqueur
        marker.addTo(map);
    },
    function (error) {
        // Gérer les erreurs de géolocalisation ici
        console.error("Erreur de géolocalisation :", error.message);
    },
    // précision de la position
    { enableHighAccuracy: true }
);