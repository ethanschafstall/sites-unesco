// script.js

////////////        Variables        ////////////

let data; // Stock les data de world-heritage-list.json

// Fonction pour remplir le tableau avec les données JSON
function fillTable(data) {
    const tableBody = document.querySelector('#heritageTable tbody');

    // Efface le contenu actuel de le tableau
    tableBody.innerHTML = '';

    // Parcours les données JSON et ajoute chaque entrée au tableau
    data.forEach(entry => {
        const row = tableBody.insertRow();

        // Ajoute les ligne avec les propriétés à afficher
        const propertiesToShow = ['site', 'region','states','category', 'date_inscribed'];
        propertiesToShow.forEach(property => {
            const cell = row.insertCell();
            cell.textContent = entry[property];
        });
    });
}

// Fonction pour le tri par catégorie au chargement de la page
async function init() {
    try {
        //await permet d'éviter les blocages

        //Extraction
        const response = await fetch('../data/world-heritage-list.json');

        //Convertion
        data = await response.json();
        fillTable(data);
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

//initialisation
init();
