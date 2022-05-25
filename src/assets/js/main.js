"use strict";

//slider range normal
//source : https://www.youtube.com/watch?v=YE10hytBBho
// let rangeValue = document.querySelector(".range__value");
// let rangeBarre = document.querySelector(".range__barre");
// let range = document.querySelector(".range");

// rangeBarre.addEventListener("input", slideRange);

// if(this.value == null){
//     this.value = 10;
//     localStorage.setItem('slider-range-normal-final-value', this.value);
//     localStorage.setItem('vitres-number', this.value);
//     localStorage.setItem('multi-number', this.value);
//     localStorage.setItem('detartrant-number', this.value);
//     currentNumber.innerHTML = localStorage.getItem('compteur-final-number');
// }

// function slideRange(){
//   let value = (this.value-this.min)/(this.max-this.min)*100;
//   localStorage.setItem('slider-range-normal-final-value', this.value);
//   if (mediumTitle.textContent == "Combien de fois par an lavez-vous vos fenêtres ?") {
//     localStorage.setItem('vitres-number', this.value);
// } else if (mediumTitle.textContent == "Combien de fois par mois lavez-vous vos meubles avec votre produit multi-usage ?") {
//     localStorage.setItem('multi-number', this.value);
// } else if (mediumTitle.textContent == "Combien de fois par an détartrez-vous vos canalisations ?") {
//     localStorage.setItem('detartrant-number', this.value);
// }
//   rangeValue.innerHTML = localStorage.getItem('slider-range-normal-final-value');
// }

// Année (Copyright)
// var annee = document.querySelector(".annee");
// let date = new Date();
// let year = date.getUTCFullYear();
// annee.innerHTML = year