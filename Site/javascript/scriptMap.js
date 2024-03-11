
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

let countriesListFr = [
    "Albanie",
    "Andorre",
    "Autriche",
    "Biélorussie",
    "Belgique",
    "Bosnie-et-Herzégovine",
    "Bulgarie",
    "Chypre",
    "Tchécoslovaquie",
    "Allemagne",
    "Danemark",
    "Estonie",
    "Espagne",
    "Finlande",
    "France",
    "Royaume-Uni et d'Irlande du Nord",
    "Grèce",
    "Saint-Siège",
    "Hongrie",
    "Croatie",
    "Irlande",
    "Italie",
    "Lituanie",
    "Luxembourg",
    "Lettonie",
    "Malte",
    "Pays-Bas",
    "Pologne",
    "Portugal",
    "Roumanie",
    "Suède",
    "Slovénie",
    "Slovaquie",
    "Suisse",
    "Islande",
    "Liechtenstein",
    "République de Moldavie",
    "Monaco",
    "Monténégro",
    "Macédoine du Nord",
    "Norvège",
    "Saint-Marin",
    "Serbie",
    "Ukraine", 
    "Île de Man",
    "Îles Féroé",
    "Gibraltar",
    "Pays-Bas",
    "Afghanistan",
    "Azerbaïdjan",
    "Bangladesh",
    "Cambodge",
    "Chine",
    "République de Corée",
    "Fidji",
    "Inde",
    "Indonésie",
    "Iran",
    "Japon",
    "Kazakhstan",
    "Kirghizstan",
    "République de Lao",
    "Malaisie",
    "Mongolie",
    "Myanmar",
    "Népal",
    "Pakistan",
    "Philippines",
    "République de Corée",
    "Singapour",
    "Sri Lanka",
    "Tadjikistan",
    "Thaïlande",
    "Turkménistan",
    "Ouzbékistan",
    "Vanuatu",
    "Viêt Nam",
    "Israël",
    "Bahreïn",
    "Irak",
    "Jérusalem",
    "Jordanie",
    "Liban",
    "Oman",
    "Qatar",
    "Arabie saoudite",
    "État de Palestine",
    "République arabe Syrienne",
    "Émirats arabes unis",
    "Yémen",
    "Fédération de Russie",
    "Antigua-et-Barbuda",
    "Argentine",
    "Barbade",
    "Belize",
    "Bolivie",
    "Brésil",
    "Chili",
    "Colombie",
    "Costa Rica",
    "Cuba",
    "Dominique",
    "République dominicaine",
    "Équateur",
    "El Salvador",
    "Guatemala",
    "Haïti",
    "Honduras",
    "Jamaïque",
    "Mexique",
    "Nicaragua",
    "Panama",
    "Paraguay",
    "Pérou",
    "Saint-Kitts-et-Nevis",
    "Sainte-Lucie",
    "Suriname",
    "Uruguay",
    "Venezuela (République bolivarienne du)",
    "États-Unis d'Amérique",
    "Canada",
    "Angola",
    "Bénin",
    "Botswana",
    "Burkina Faso",
    "Cabo Verde",
    "Cameroun",
    "République centrafricaine",
    "Tchad",
    "Congo",
    "Côte d'Ivoire",
    "République démocratique du Congo",
    "Érythrée",
    "Éthiopie",
    "Gabon",
    "Gambie",
    "Ghana",
    "Guinée",
    "Kenya",
    "Lesotho",
    "Madagascar",
    "Malawi",
    "Mali",
    "Maurice",
    "Mozambique",
    "Namibie",
    "Niger",
    "Nigeria",
    "Rwanda",
    "Sénégal",
    "Seychelles",
    "Afrique du Sud",
    "Togo",
    "Ouganda",
    "République-Unie de Tanzanie",
    "Zambie",
    "Zimbabwe",
    "Algérie",
    "Égypte",
    "Libye",
    "Mauritanie",
    "Maroc",
    "Soudan",
    "Tunisie",
    "Australie",
    "Papouasie-Nouvelle-Guinée",
    "Nouvelle-Zélande",
    "Fidji",
    "Îles Salomon",
    "Micronésie",
    "Vanuatu",
    "Samoa",
    "Kiribati",
    "Tonga",
    "Îles Marshall",
    "Palau",
    "Nauru",
    "Tuvalu",
    "Tokelau",
    "Îles Salomon"
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
//let latitude = 46.519653;
// longitude du user

//let longitude = 6.632273;

let latitude = 10;
let longitude = 30
let zoomMap= 10;

// option de centre de la carte + zoom
let mapOptions = {
    center: [latitude, longitude],
    zoom: zoomMap,
}
//Objet map pour la creer
let map = new L.map('map', mapOptions);

// ajout d'une couche(layer) a la carte
//let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
//    noWrap: true,
//});

let tokenMap = "pbmI69D6upAibHDAfHg76Tb6M6X2iybDgDyxpQmkkDWnCMlVOb3iDZPZCkmNZKgO"
let layer = new L.TileLayer(`https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}.png?lang=fr&access-token=${tokenMap}`,{
    noWrap: true,
});
map.addLayer(layer);
//met un marqueur sur la map avec les coordinees
//let marker = new L.Marker([latitude, longitude]);

// Ajoute le marqueur
//marker.addTo(map);

CreateIcon=(type) =>{
    let newIcon = L.icon({
        iconUrl: '../img/cultural_Icon.png',
        iconSize: [10,10],
        inconAnchor:[22,94]
    })
}

//Basic Functions 
CreatMarker = (latitude, longitude, nameSite, category, location) => {
    let newIcon
    if(category == "Cultural"){
        newIcon = L.icon({
            iconUrl: '../img/cultural_Icon.png',
            iconSize: [28,65]
        })
    }
    else if(category == "Natural"){
        newIcon = L.icon({
            iconUrl: '../img/natural_Icon.png',
            iconSize: [28,65]
        })
    }
    else{
        newIcon = L.icon({
            iconUrl: '../img/mixed_Icon.png',
            iconSize: [28,65]
        })
    }
    let newMarker = new L.Marker ([latitude, longitude], {icon:newIcon})
    
    newMarker.addTo(map)
    newMarker.bindPopup(nameSite+"\<br\>"+"Il fait partie de : " + location)
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

/*
navigator.geolocation.getCurrentPosition(function(position) {
    $.getJSON('http://ws.geonames.org/countryCode', {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        type: 'JSON'
    }, function(result) {
        alert(result.countryName);
    });
});
*/


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
        CreatMarker(elements.coordinates.lat, elements.coordinates.lon, elements.site, elements.category, elements.states)
    })
}
function markSpotsByCountries (countriesName) {
    dataUnescoComplet.forEach((elements) => {
        countriesName.forEach((country)=>{
            if (elements.states == (country)){
                CreatMarker(elements.coordinates.lat, elements.coordinates.lon, elements.site, elements.category, elements.states)
            }
        })        
    })
}
function markSpotsByCountry (countryName) {
    dataUnescoComplet.forEach((elements) => {
            if (elements.states == (countryName)){
                CreatMarker(elements.coordinates.lat, elements.coordinates.lon, elements.site, elements.category, elements.states)
            }                
    })
}
function markSpotsByCategory (categoryOption) {
    dataUnescoComplet.forEach((elements) => {
            if (elements.category == categoryOption){
                CreatMarker(elements.coordinates.lat, elements.coordinates.lon, elements.site, elements.category, elements.states)
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
//const filterContinent = document.getElementById('searchContinent')
const options = document.getElementsByClassName('option')

let filterOptionsContinent = (data) => {
    let body=''
    for(let i=0;i<data.length;i++){
        body += `<tr><button onclick="continent${data[i][0]}()" class="option">${data[i][1]}</button></tr>`        
    }
    document.querySelector('.data').innerHTML = body
}
filterOptionsContinent(continentsList);
/*filterContinent.addEventListener('keyup',(e)=>{
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
*/
//FILERS BY COUNTRY
const filterCountry = document.getElementById('searchCountry')
const options2 = document.getElementsByClassName('option2')

let filterOptionsCountries = (data) => {
    let body=''
    for(let i=0;i<data.length;i++){
        //body += `<tm><button onclick="country${data[i]}()" class="option2" id="${data[i]}">${data[i]}</button></tm>`        
        body += `<tr><button onclick="countryButton(this, ${data[i]})" class="option2 hide" id="${data[i]}">${countriesListFr[i]}</button></tr>`        
    }
    document.querySelector('.data2').innerHTML = body
}

//filterOptionsCountries(countriesList);

filterCountry.addEventListener('keyup',(e)=>{
    filterOptionsCountries(countriesList);
    let text = e.target.value
    let er = new RegExp(text, "i")
    for(let i=0; i<options2.length; i++){
        let answ=options2[i]
        if(er.test(answ.innerText)){
            answ.classList.remove("hide")
        }
        else{
            answ.classList.add("hide")
        }       
        if(er.test("")){
            answ.classList.add("hide")
        }

    }
})

function countryButton(obj, name) {
   removeMarks();
   markSpotsByCountry(obj.id);
}
     

//Geo
navigator.geolocation.getCurrentPosition(
    // obtention des positions
    function (position) {
        // obtention de la latitude

        latitude = position.coords.latitude;
        // obtention logitude
        longitude = position.coords.longitude;
        console.log(`latitude1 :${latitude}`);
        console.log(`longitude1 :${longitude}`);
        ZoomArea(latitude, longitude, zoomMap);
        markSpotsByCountry("Switzerland");
        console.log(position)
    },
    function (error) {
        // Gérer les erreurs de géolocalisation ici
        console.error("Erreur de géolocalisation :", error.message);
    },
    // précision de la position   
);
