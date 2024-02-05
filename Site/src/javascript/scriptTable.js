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

// Sorting function
function sortDataByProperty(property) {
    //Check double click
    if (currentSortProperty === property) {
        
        isDescendingOrder = !isDescendingOrder;
    } else {
        
        isDescendingOrder = false;
    }

    // Update with the correct property
    currentSortProperty = property;

    
    // Sort
    data.sort((a, b) => {
        //Remove breakage
        const valueA = a[property].toUpperCase();
        const valueB = b[property].toUpperCase();
        //If A is greater than B
        if (valueA < valueB) {
            return isDescendingOrder ? 1 : -1;//Changes according to ascending or descending
        //If B is larger than A
        } else if (valueA > valueB) {
            return isDescendingOrder ? -1 : 1;//Changes according to ascending or descending
        //If A = B
        } else {
            return 0;
        }
    });

   //Fill the table
    fillTable(data);
}

function sortDataByStates() {
    // Check double click
    if (currentSortProperty === 'states') {
        isDescendingOrder = !isDescendingOrder;
    } else {
        isDescendingOrder = false;
    }

    // Update with correct property
    currentSortProperty = 'states';

    // Sort
    data.sort((a, b) => {
        const statesA = a.states.length;
        const statesB = b.states.length;

        if (statesA < statesB) {
            return isDescendingOrder ? 1 : -1;
        } else if (statesA > statesB) {
            return isDescendingOrder ? -1 : 1;
            // If the same number of States, then sort with the others
        } else {
            const statesStringA = a.states.join(', ').toUpperCase(); //transforms the array into a string, adding ", " to visually separate the array.
            const statesStringB = b.states.join(', ').toUpperCase(); //transforms the array into a string, adding ", " to visually separate the array.

            if (statesStringA < statesStringB) {
                return isDescendingOrder ? 1 : -1;
            } else if (statesStringA > statesStringB) {
                return isDescendingOrder ? -1 : 1;
            } else {
                return 0;
            }
        }
    });

    // Fills the table
    fillTable(data);
}




// Function for initial setup
async function init() {
    try {
        const response = await fetch('../data/world-heritage-list.json');
        data = await response.json();
        fillTable(data);
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

// Initialization
init();
