"use strict";

// Année (Copyright)
var annee = document.querySelector(".copyright__annee");
let date = new Date();
let year = date.getUTCFullYear();
annee.innerHTML = year