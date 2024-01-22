// Second File

// Data variables
let dataInfoCordonnes = []
let dataInfoNameSite = []
let dataGetInfo = []

// Basic Functions //

// Mark's creator function with popup
const createMarker = (latitude, longitude, nameSite, map) => {
    let newMarker = new L.Marker([latitude, longitude])
    newMarker.addTo(map)
    newMarker.bindPopup(nameSite)
}

// Zoom to mark function
const zoomArea = (latitude, longitude, zoomNumber, map) => {
    map.setView([latitude, longitude], zoomNumber)
}

// Function to get all data for marks point with pop-up and site name
async function allMarkUnesco(map) {
    try {
        // Extraction JSON
        const response = await fetch('../data/world-heritage-list.json');
        // Conversion JSON -> JS
        const data = await response.json();
        data.forEach((dataUnesco) => {
            // Get coordinates for each element
            dataInfoCordonnes.push(dataUnesco.coordinates)
            dataInfoNameSite.push(dataUnesco.site)
            // Create a marker
            createMarker(dataUnesco.coordinates.lat, dataUnesco.coordinates.lon, dataUnesco.site, map)
        })
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

export { allMarkUnesco };
