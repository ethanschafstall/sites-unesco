window.onload = function () {
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 1;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}

const valeurMinimale = 1978;
const valeurMaximale = 2023;

const plageSortie = 100;

function fillColor() {
    let valeurEntree1 = sliderOne.value;
    let valeurEntree2 = sliderTwo.value;
    percent1 = ((valeurEntree1 - valeurMinimale) / (valeurMaximale - valeurMinimale)) * plageSortie;
    percent2 = ((valeurEntree2 - valeurMinimale) / (valeurMaximale - valeurMinimale)) * plageSortie;
    // percent1 = valeurTransformee1;
    // percent2 = valeurTransformee2;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}