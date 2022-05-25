"use strict";

//slider range normal
//source : https://www.youtube.com/watch?v=YE10hytBBho
let indexValue = document.querySelector(".section-4__range-value");
let indexRange = document.querySelector(".section-4__range-barre");

indexRange.addEventListener("input", indexSlider);

function indexSlider(e){
    let currentValue = e.currentTarget;
    if (currentValue.value == 0) {
        indexValue.innerHTML = "Ecologiques";
    } 
    if (currentValue.value == 1){
        indexValue.innerHTML = "Moins chères que leur équivalent en grandes-surfaces";
    }
    if (currentValue.value == 2){
        indexValue.innerHTML = "Efficaces";
    }
}

// Année (Copyright)
var annee = document.querySelector(".copyright__annee");
let date = new Date();
let year = date.getUTCFullYear();
annee.innerHTML = year