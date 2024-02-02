// script.js

//////////// Variables ////////////

let data; // Stores the data from world-heritage-list.json
let currentSortProperty = ''; // Keeps Property that is sorted
let isDescendingOrder = false; // Tracks the sorting order

// Function to fill the table with JSON data
function fillTable(data) {
    const tableBody = document.querySelector('#heritageTable tbody');

    // Clear the current table content
    tableBody.innerHTML = '';

    // Loop through the JSON data and add each entry to the table
    data.forEach(entry => {
        const row = tableBody.insertRow();

        // Add rows with the properties to display
        const propertiesToShow = ['site', 'region', 'states', 'category', 'date_inscribed'];
        propertiesToShow.forEach(property => {
            const cell = row.insertCell();
            cell.textContent = entry[property];
        });
    });
}

// Fonction de trie
function sortDataByProperty(property) {
    //Verifie le double clique
    if (currentSortProperty === property) {
        
        isDescendingOrder = !isDescendingOrder;
    } else {
        
        isDescendingOrder = false;
    }

    // Mets a jour avec la bonne propriétée
    currentSortProperty = property;

    
    // Trie
    data.sort((a, b) => {
        //Enlève la casse
        const valueA = a[property].toUpperCase();
        const valueB = b[property].toUpperCase();
        //Si A est plus grand que B
        if (valueA < valueB) {
            return isDescendingOrder ? 1 : -1;//Modifie en fonction de croissant ou décroissant
        //Si B est plus grand que A
        } else if (valueA > valueB) {
            return isDescendingOrder ? -1 : 1;//Modifie en fonction de croissant ou décroissant
        //Si A = B
        } else {
            return 0;
        }
    });

   //Remplie la table
    fillTable(data);
}

// Function for initial setup
async function init() {
    try {
        const response = await fetch('world-heritage-list.json');
        data = await response.json();
        fillTable(data);
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

// Initialization
init();
