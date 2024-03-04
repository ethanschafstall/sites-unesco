
//Countries by continents
const eruopeCountries = [
    'Albania',
    'Andorra',
    'Austria',
    'Belarus',
    'Belgium',
    'Bosnia and Herzegovina',
    'Bulgaria',
    'Cyprus',
    'Czechia',
    'Germany',
    'Denmark',
    'Estonia',
    'Spain',
    'Finland',
    'France',
    'United Kingdom of Great Britain and Northern Ireland',
    'Greece',
    'Holy See',
    'Hungary',
    'Croatia',
    'Ireland',
    'Italy',
    'Lithuania',
    'Luxembourg',
    'Latvia',
    'Malta',
    'Netherlands',
    'Poland',
    'Portugal',
    'Romania',
    'Sweden',
    'Slovenia',
    'Slovakia',
    'Switzerland',
    'Iceland',
    'Liechtenstein',
    'Republic of Moldova',
    'Monaco',
    'Montenegro',
    'North Macedonia',
    'Norway',
    //'Russian Federation',
    'San Marino',
    'Serbia',
    'Ukraine', 
    'Isle of Man',
    'Faeroe Islands',
    'Gibraltar',
    'Netherlands (Kingdom of the)'
    ]
const asiaCountries = [
    'Afghanistan',
    'Azerbaijan',
    'Bangladesh',
    'Cambodia',
    'China',
    `Democratic People's Republic of Korea`,
    'Fiji',
    'India',
    'Indonesia',
    'Iran (Islamic Republic of)',
    'Japan',
    'Kazakhstan',
    'Kyrgyzstan',
    `Lao People's Democratic Republic`,
    'Malaysia',
    'Mongolia',
    'Myanmar',
    'Nepal',
    'Pakistan',
    'Philippines',
    'Republic of Korea',
    'Singapore',
    'Sri Lanka',
    'Tajikistan',
    'Thailand',
    'Turkmenistan',
    'Uzbekistan',
    'Vanuatu',
    'Viet Nam',
    'Israel',
    'Bahrain',
    'Iraq',
    'Jerusalem (Site proposed by Jordan)',
    'Jordan',
    'Lebanon',
    'Oman',
    'Qatar',
    'Saudi Arabia',
    'State of Palestine',
    'Syrian Arab Republic',
    'United Arab Emirates',
    'Yemen',
    'Russian Federation'
]
const americaCountries = [
    'Antigua and Barbuda',
    'Argentina',
    'Barbados',
    'Belize',
    'Bolivia (Plurinational State of)',
    'Brazil',
    'Chile',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'El Salvador',
    'Guatemala',
    'Haiti',
    'Honduras',
    'Jamaica',
    'Mexico',
    'Nicaragua',
    'Panama',
    'Paraguay',
    'Peru',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Suriname',
    'Uruguay',
    'Venezuela (Bolivarian Republic of)',
    'United States of America',
    'Canada'
]
const africaCountries = [
    'Angola',
    'Benin',
    'Botswana',
    'Burkina Faso',
    'Cabo Verde',
    'Cameroon',
    'Central African Republic',
    'Chad',
    'Congo',
    `Côte d'Ivoire`,
    'Democratic Republic of the Congo',
    'Eritrea',
    'Ethiopia',
    'Gabon',
    'Gambia',
    'Ghana',
    'Guinea',
    'Kenya',
    'Lesotho',
    'Madagascar',
    'Malawi',
    'Mali',
    'Mauritius',
    'Mozambique',
    'Namibia',
    'Niger',
    'Nigeria',
    'Rwanda',
    'Senegal',
    'Seychelles',
    'South Africa',
    'Togo',
    'Uganda',
    'United Republic of Tanzania',
    'Zambia',
    'Zimbabwe',
    'Algeria',
    'Egypt',
    'Libya',
    'Mauritania',
    'Morocco',
    'Sudan',
    'Tunisia'
]
const oceaniaCountries= [
    'Australia',
    'Papua New Guinea',
    'New Zealand',
    'Fiji',
    'Solomon Islands',
    'Micronesia (Federated States of)',
    'Vanuatu',
    'Samoa',
    'Kiribati',
    'Tonga',
    'Marshall Islands',
    'Palau',
    'Nauru',
    'Tuvalu',
    'Tokelau',
    'Solomon Islands'
]
const allCountries = [eruopeCountries, asiaCountries, americaCountries, africaCountries, oceaniaCountries]

//Category list
const categoryList = ["Cultural", "Natural", "Mixed"]
//Region List
const regionList = ["Africa", "Arab States", "Asia and the Pacific", "Europe and North America", "Latin America and the Caribbean"]
//Continents list
const continentsList = [["Europe","Europe"], ["America","Amérique"], ["Asia", "Asie"], ["Oceania", "Océanie"], ["Africa", "Afrique"]]
let countriesList = []
completeList = (countries, countriesList) => {
    countries.forEach((country) => {
        country.forEach((el) => {
            countriesList.push(el)
            //console.log(el)
        })
    }) 
}
completeList(allCountries, countriesList)




//Bottons
const BTN_ALL_MARK = document.querySelector('.btnAllMarks') 
const BTN_REMOVE_MARK = document.querySelector('.btnRemove')
const BTN_CULTURAL = document.querySelector('.btnCultural')
const BTN_NATURAL = document.querySelector('.btnNatural')
const BTN_MIXED = document.querySelector('.btnMixed')

// latitude de l'utilisateur
let latitude = 0;
// longitude du user
let longitude = 0;
let zoomMap= 10;

// option de centre de la carte + zoom
let mapOptions = {
    center: [latitude, longitude],

    zoom: zoomMap,
}
//Objet map pour la creer
let map = new L.map('map', mapOptions);

// ajout d'une couche(layer) a la carte
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

//met un marqueur sur la map avec les coordinees
let marker = new L.Marker([latitude, longitude]);

// Ajoute le marqueur
//marker.addTo(map);

//Basic Functions 
CreatMarker = (latitude, longitude, nameSite) => {
    let newMarker = new L.Marker ([latitude, longitude])
    newMarker.addTo(map)
    newMarker.bindPopup(nameSite)
    marksList.push(newMarker);
}
ZoomArea = (latitude, longitude, zoomNumber) => {
    map.setView([latitude, longitude], zoomMap)
}
//Remove marks function 
function removeMarks(){
    marksList.forEach(element => {
        element.remove()
    });    
}

// demande de la localisation au navigateur
navigator.geolocation.getCurrentPosition(
    // obtention des positions
    function (position) {

        $.getJSON('http://ws.geonames.org/countryCode', {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            type: 'JSON'
        }, function(result) {
            console.log(result.countryName);
        })

        // obtention de la latitude
        latitude = position.coords.latitude;
        // obtention logitude
        longitude = position.coords.longitude;
        console.log(`latitude1 :${latitude}`);
        console.log(`longitude1 :${longitude}`);
        ZoomArea(latitude, longitude, zoomMap);
        console.log(position)
        console.log(position.countryName)
        markSpotsByCountry(position.countryName)
    },
    function (error) {
        // Gérer les erreurs de géolocalisation ici
        console.error("Erreur de géolocalisation :", error.message);
    },
    // précision de la position
    { enableHighAccuracy: true }
   
);

navigator.geolocation.getCurrentPosition(function(position) {
    $.getJSON('http://ws.geonames.org/countryCode', {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        type: 'JSON'
    }, function(result) {
        alert(result.countryName);
    });
});



// Functions by Continents ----------------------------------------------
function continentEurope(){
    removeMarks();
    markSpotsByCountries(eruopeCountries);
}
function continentAsia(){
    removeMarks();
    markSpotsByCountries(asiaCountries);
}
function continentAfrica(){
    removeMarks();
    markSpotsByCountries(africaCountries);
}
function continentAmerica(){
    removeMarks();
    markSpotsByCountries(americaCountries);
}
function continentOceania(){
    removeMarks();
    markSpotsByCountries(oceaniaCountries);
}

// Functions basic by buttons
BTN_ALL_MARK.addEventListener('click', () => {
    //getUnescoBasicInfo(); 
    removeMarks();
    markAllUnescoSpots();
    console.log("nice")
})
BTN_REMOVE_MARK.addEventListener('click', () => {
    removeMarks();
})
BTN_CULTURAL.addEventListener('click',() => {
    removeMarks();
    markSpotsByCategory("Cultural")
})
BTN_NATURAL.addEventListener('click',() => {
    removeMarks();
    markSpotsByCategory("Natural")
})
BTN_MIXED.addEventListener('click',() => {
    removeMarks();
    markSpotsByCategory("Mixed")
})

//Functions Filter -----------------------------------------------
let dataInfoCordonnes = []
let dataInfoNameSite = []
let dataGetInfo = []
let dataUnescoComplet = [] 
let data; // Stores the data from world-heritage-list.json
let marksList = [] 


async function getUnescoBasicInfo() {
    try {
        //Extraction JSON
        const response = await fetch('../world-heritage-list.json');
        //Convertion JSON -> JS
        data = await response.json();
        data.forEach((dataUnesco) =>{
            //Get coordinates for each element
            dataUnescoComplet.push(dataUnesco)
            dataInfoCordonnes.push(dataUnesco.coordinates)
            dataInfoNameSite.push(dataUnesco.site)
            //Create a marker
            //CreatMarker(dataUnesco.coordinates.lat, dataUnesco.coordinates.lon, dataUnesco.site)
            //console.log(dataUnesco.coordinates)
        })
        //fillTable(data);
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}
getUnescoBasicInfo();

//Functions for put marks by type
function markAllUnescoSpots () {
    dataUnescoComplet.forEach((elements)=> {
        CreatMarker(elements.coordinates.lat, elements.coordinates.lon, elements.site)
    })
}
function markSpotsByCountries (countriesName) {
    dataUnescoComplet.forEach((elements) => {
        countriesName.forEach((country)=>{
            if (elements.states == (country)){
                CreatMarker(elements.coordinates.lat, elements.coordinates.lon, elements.site)
            }
        })        
    })
}
function markSpotsByCountry (countryName) {
    dataUnescoComplet.forEach((elements) => {
            if (elements.states == (countryName)){
                CreatMarker(elements.coordinates.lat, elements.coordinates.lon, elements.site)
            }                
    })
}
function markSpotsByCategory (categoryOption) {
    dataUnescoComplet.forEach((elements) => {
            if (elements.category == categoryOption){
                CreatMarker(elements.coordinates.lat, elements.coordinates.lon, elements.site)
            }                
    })
}

//Exportation DB
async function getInfo(){
    try{
        //Extraction JSON
        const response = await fetch('../world-heritage-list.json');
        data = await response.json()
        data.forEach((dataUnesco)=>{
            console.log(dataUnesco)
            dataGetInfo.push(dataUnesco)
        })
    }
    catch(error){
        console.error('Error fetching or parsing data:', error);
    }
}

//FUNCTIONS BY CONTINENTS
//Reference to elements in HTML CONTINENTS
const filterContinent = document.getElementById('searchContinent')
const options = document.getElementsByClassName('option')

let filterOptionsContinent = (data) => {
    let body=''
    for(let i=0;i<data.length;i++){
        body += `<tr><button onclick="continent${data[i][0]}()" class="option">${data[i][1]}</button></tr>`        
    }
    document.querySelector('.data').innerHTML = body
}
filterOptionsContinent(continentsList);
filterContinent.addEventListener('keyup',(e)=>{
    let text = e.target.value
    let er = new RegExp(text, "i")
    for(let i=0; i<options.length; i++){
        let answ=options[i]
        if(er.test(answ.innerText)){
            answ.classList.remove("hide")
            console.log(answ)
            
        }
        else{
            answ.classList.add("hide")
        }       
    }
})

//FILERS BY COUNTRY
const filterCountry = document.getElementById('searchCountry')
const options2 = document.getElementsByClassName('option2')

let filterOptionsCountries = (data) => {
    let body=''
    for(let i=0;i<data.length;i++){
        //body += `<tm><button onclick="country${data[i]}()" class="option2" id="${data[i]}">${data[i]}</button></tm>`        
        body += `<tm><button onclick="countryButton(this, ${data[i]})" class="option2" id="${data[i]}">${data[i]}</button></tm>`        
    }
    document.querySelector('.data2').innerHTML = body
}
filterOptionsCountries(countriesList);
filterCountry.addEventListener('keyup',(e)=>{
    let text = e.target.value
    let er = new RegExp(text, "i")
    for(let i=0; i<options2.length; i++){
        let answ=options2[i]
        if(er.test(answ.innerText)){
            answ.classList.remove("hide")
            console.log(answ)     
        }
        else{
            answ.classList.add("hide")
        }       
    }
})

function countryButton(obj, name) {
   removeMarks();
   markSpotsByCountry(obj.id);
}
     
