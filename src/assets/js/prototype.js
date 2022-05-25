"use strict";
localStorage.clear();

//warning
let warning = document.querySelector(".warning");
let warningButton = document.querySelector(".warning__next");
warningButton.addEventListener("click", () => {
    warning.classList.add("hidden")
});

//Slider
const btnPrev = document.querySelector(".slider__button--previous");
const btnNext = document.querySelector(".slider__button--next");

btnNext.addEventListener("click", next);
btnPrev.addEventListener("click", previous);

function next(){
    const elShow = document.querySelector(".slider__el--show");
    const elNext = elShow.nextElementSibling;
    
    elShow.classList.remove("slider__el--show");

    if(elNext){
        elNext.classList.add("slider__el--show");
    }else{
        const elFirst = elShow.parentNode.firstElementChild;
        elFirst.classList.add("slider__el--show");
    }
}

function previous(){
    const elShowPrev = document.querySelector(".slider__el--show");
    const elPrev = elShowPrev.previousElementSibling;
    
    elShowPrev.classList.remove("slider__el--show");

    if(elPrev){
        elPrev.classList.add("slider__el--show");
    }else{
        const elLast = elShowPrev.parentNode.lastElementChild;
        elLast.classList.add("slider__el--show");
    }
}

//Hammer
const slider = document.querySelector(".slider");
const hammerSlider = new Hammer(slider);

hammerSlider.on("swipeleft", next);
hammerSlider.on("swiperight", previous);


//sections
let bigTitle = document.querySelector(".big-title");
let mediumTitle = document.querySelector(".medium-title");
let mainImage = document.querySelector(".main-image");
let nextButton = document.querySelector(".next");

let produitButtons = document.querySelectorAll(".slider__el button");
let armoireEls = document.querySelectorAll(".armoire__el");
let compteur = document.querySelector(".compteur");
let round = document.querySelector(".round");

let lessive = "false";
let vitres = "false";
let wc = "false";
let tablettes = "false";
let multi = "false";
let degraissant = "false";
let desodorisant = "false";
let detartrant = "false";
let liquide = "false";

for (const produitButton of produitButtons) {
    produitButton.addEventListener("click", falseToTrue);
}

for (const armoireEl of armoireEls) {
    armoireEl.addEventListener("click", trueToFalse);
}

function falseToTrue(e){
    let currentProduit = e.currentTarget;
    let currentClass = currentProduit.className;
    if (currentClass == "slider__lessive"){
        lessive = "true";
        goOnorNot();
        currentProduit.classList.add("no-background");
        document.querySelector(".armoire__lessive").parentNode.classList.remove("hidden");
        localStorage.setItem('lessive', "true");
    }
    if (currentClass == "slider__adoucissant"){
        lessive = "true";
        goOnorNot();
        currentProduit.classList.add("no-background");
        document.querySelector(".armoire__adoucissant").parentNode.classList.remove("hidden");
        localStorage.setItem('adoucissant', "true");
    }
    if (currentClass == "slider__vitres"){
        vitres = "true";
        goOnorNot();
        currentProduit.classList.add("no-background");
        document.querySelector(".armoire__vitres").parentNode.classList.remove("hidden");
        localStorage.setItem('vitres', "true");
    }
    if (currentClass == "slider__wc"){
        wc = "true";
        goOnorNot();
        currentProduit.classList.add("no-background");
        document.querySelector(".armoire__wc").parentNode.classList.remove("hidden");
        localStorage.setItem('wc', "true");
    }
    if (currentClass == "slider__tablettes"){
        tablettes = "true";
        goOnorNot();
        currentProduit.classList.add("no-background");
        document.querySelector(".armoire__tablettes").parentNode.classList.remove("hidden");
        localStorage.setItem('tablettes', "true");
    }
    if (currentClass == "slider__multi"){
        multi = "true";
        goOnorNot();
        currentProduit.classList.add("no-background");
        document.querySelector(".armoire__multi").parentNode.classList.remove("hidden");
        localStorage.setItem('multi', "true");
    }
    if (currentClass == "slider__degraissant"){
        degraissant = "true";
        goOnorNot();
        currentProduit.classList.add("no-background");
        document.querySelector(".armoire__degraissant").parentNode.classList.remove("hidden");
        localStorage.setItem('degraissant', "true");
    }
    if (currentClass == "slider__desodorisant"){
        desodorisant = "true";
        goOnorNot();
        currentProduit.classList.add("no-background");
        document.querySelector(".armoire__desodorisant").parentNode.classList.remove("hidden");
        localStorage.setItem('desodorisant', "true");
    }
    if (currentClass == "slider__detartrant"){
        detartrant = "true";
        goOnorNot();
        currentProduit.classList.add("no-background");
        document.querySelector(".armoire__detartrant").parentNode.classList.remove("hidden");
        localStorage.setItem('detartrant', "true");
    }
    if (currentClass == "slider__liquide"){
        liquide = "true";
        goOnorNot();
        currentProduit.classList.add("no-background");
        document.querySelector(".armoire__liquide").parentNode.classList.remove("hidden");
        localStorage.setItem('liquide', "true");
    }
}

function trueToFalse(e){
    let currentProduit = e.currentTarget;
    let currentClass = currentProduit.children[0].className;
    if (currentClass == "armoire__lessive"){
        lessive = "false";
        goOnorNot();
        currentProduit.classList.add("hidden");
        document.querySelector(".slider__lessive").classList.remove("no-background");
        localStorage.removeItem('lessive');
    }
    if (currentClass == "armoire__adoucissant"){
        lessive = "false";
        goOnorNot();
        currentProduit.classList.add("hidden");
        document.querySelector(".slider__adoucissant").classList.remove("no-background");
        localStorage.removeItem('adoucissant');
    }
    if (currentClass == "armoire__vitres"){
        vitres = "false";
        goOnorNot();
        currentProduit.classList.add("hidden");
        document.querySelector(".slider__vitres").classList.remove("no-background");
        localStorage.removeItem('vitres');
    }
    if (currentClass == "armoire__wc"){
        wc = "false";
        goOnorNot();
        currentProduit.classList.add("hidden");
        document.querySelector(".slider__wc").classList.remove("no-background");
        localStorage.removeItem('wc');
    }
    if (currentClass == "armoire__tablettes"){
        tablettes = "false";
        goOnorNot();
        currentProduit.classList.add("hidden");
        document.querySelector(".slider__tablettes").classList.remove("no-background");
        localStorage.removeItem('tablettes');
    }
    if (currentClass == "armoire__multi"){
        multi = "false";
        goOnorNot();
        currentProduit.classList.add("hidden");
        document.querySelector(".slider__multi").classList.remove("no-background");
        localStorage.removeItem('multi');
    }
    if (currentClass == "armoire__degraissant"){
        degraissant = "false";
        goOnorNot();
        currentProduit.classList.add("hidden");
        document.querySelector(".slider__degraissant").classList.remove("no-background");
        localStorage.removeItem('degraissant');
        
    }
    if (currentClass == "armoire__desodorisant"){
        desodorisant = "false";
        goOnorNot();
        currentProduit.classList.add("hidden");
        document.querySelector(".slider__desodorisant").classList.remove("no-background");
        localStorage.removeItem('desodorisant');
    }
    if (currentClass == "armoire__detartrant"){
        detartrant = "false";
        goOnorNot();
        currentProduit.classList.add("hidden");
        document.querySelector(".slider__detartrant").classList.remove("no-background");
        localStorage.removeItem('detartrant');
    }
    if (currentClass == "armoire__liquide"){
        liquide = "false";
        goOnorNot();
        currentProduit.classList.add("hidden");
        document.querySelector(".slider__liquide").classList.remove("no-background");
        localStorage.removeItem('liquide');
    }
}

function goOnorNot(){
    if ((lessive == "true") || (vitres == "true") || (wc == "true") || (tablettes == "true") || (multi == "true") || (degraissant == "true") || (desodorisant == "true") || (detartrant == "true") || (liquide == "true")){
        nextButton.addEventListener("click", toEtapeDeux);
    } else {
        nextButton.removeEventListener("click", toEtapeDeux);
    }
}

function toEtapeDeux(){
    slider.classList.add("hidden");
    for (const armoireEl of armoireEls) {
        armoireEl.classList.add("hidden");   
    }
    bigTitle.innerHTML = "Etape 2 sur 2";
    changeProduit();
}

function changeProduit(){
    if (lessive == "true"){
        toLessives();
        lessive = "false";
    } else {
        if (vitres == "true") {
            toVitres();
            vitres = "false";
        } else {
            if (wc == "true") {
                toWC();
                wc = "false";
            } else {
                if (tablettes == "true") {
                    toTablettes();
                    tablettes = "false";
                } else {
                    if (multi == "true") {
                        toMulti();
                        multi = "false";
                    } else {
                        if (degraissant == "true") {
                            toDegraissant();
                            degraissant = "false";
                        } else {
                            if (desodorisant == "true") {
                                toDesodorisant();
                                desodorisant = "false";
                            } else {
                                if (detartrant == "true") {
                                    toDetartrant();
                                    detartrant = "false";
                                } else {
                                    if (liquide == "true") {
                                        toLiquide();
                                        liquide = "false";
                                    } else {
                                        toGain();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}



function toLessives(){
    mediumTitle.innerHTML = "Combien de lessives faites-vous par mois ?";
    mainImage.src = "assets/images/prototype/main-image/1-lave-linge.svg";
    compteur.classList.remove("hidden");
    range.classList.add("hidden");
    round.classList.add("hidden");
    compteur.classList.remove("compteur--tablettes");
    compteur.classList.remove("compteur--desodorisant");
    compteur.classList.add("compteur--lessive");
}
function toVitres(){
    mediumTitle.innerHTML = "Combien de fois par an lavez-vous vos fenêtres ?";
    mainImage.src = "assets/images/prototype/main-image/2-fenetre.svg";
    compteur.classList.add("hidden");
    range.classList.remove("hidden");
    round.classList.add("hidden");
    range.classList.remove("range--multi");
    range.classList.remove("range--detartrant");
    range.classList.add("range--vitres");
}
function toWC(){
    mediumTitle.innerHTML = "Combien de fois par mois nettoyez-vous vos wc ?";
    mainImage.src = "assets/images/prototype/main-image/3-wc.svg";
    compteur.classList.add("hidden");
    range.classList.add("hidden");
    round.classList.remove("hidden");
    round.classList.remove("round--degraissant");
    round.classList.remove("round--liquide");
    round.classList.add("round--wc");
}
function toTablettes(){
    mediumTitle.innerHTML = "Combien de lave-vaisselle faites-vous par semaine ?";
    mainImage.src = "assets/images/prototype/main-image/4-lave-vaisselle.svg";
    compteur.classList.remove("hidden");
    range.classList.add("hidden");
    round.classList.add("hidden");
    compteur.classList.remove("compteur--lessive");
    compteur.classList.remove("compteur--desodorisant");
    compteur.classList.add("compteur--tablettes");
    document.querySelector(".compteur__tablettes").classList.remove("hidden")
}
function toMulti(){
    mediumTitle.innerHTML = "Combien de fois par mois lavez-vous vos meubles avec votre produit multi-usage ?";
    mainImage.src = "assets/images/prototype/main-image/5-table.svg";
    compteur.classList.add("hidden");
    range.classList.remove("hidden");
    round.classList.add("hidden");
    range.classList.remove("range--vitres");
    range.classList.remove("range--detartrant");
    range.classList.add("range--multi");
    mainImage.classList.add("main-image--multi");
}
function toDegraissant(){
    mediumTitle.innerHTML = "Combien de fois par mois avez-vous besoin de votre dégraissant ?";
    mainImage.src = "assets/images/prototype/main-image/6-frites.svg";
    compteur.classList.add("hidden");
    range.classList.add("hidden");
    round.classList.remove("hidden");
    round.classList.remove("round--wc");
    round.classList.remove("round--liquide");
    round.classList.add("round--degraissant");
    mainImage.classList.add("main-image--degraissant");
}
function toDesodorisant(){
    mediumTitle.innerHTML = "Combien de fois par mois désodorisez-vous les pièces de votre maison ?";
    mainImage.src = "assets/images/prototype/main-image/7-desodorisant.svg";
    compteur.classList.remove("hidden");
    range.classList.add("hidden");
    round.classList.add("hidden");
    compteur.classList.remove("compteur--lessive");
    compteur.classList.remove("compteur--tablettes");
    compteur.classList.add("compteur--desodorisant");
    mainImage.classList.add("main-image--desodorisant");
}
function toDetartrant(){
    mediumTitle.innerHTML = "Combien de fois par an détartrez-vous vos canalisations ?";
    mainImage.src = "assets/images/prototype/main-image/8-evier.svg";
    compteur.classList.add("hidden");
    range.classList.remove("hidden");
    round.classList.add("hidden");
    range.classList.remove("range--multi");
    range.classList.remove("range--vitres");
    range.classList.add("range--detartrant");
    mainImage.classList.add("main-image--detartrant");
}
function toLiquide(){
    mediumTitle.innerHTML = "Combien de fois par mois lavez-vous vos plats avec du liquide vaisselle ?";
    mainImage.src = "assets/images/prototype/main-image/9-casserole.svg";
    compteur.classList.add("hidden");
    range.classList.add("hidden");
    round.classList.remove("hidden");
    round.classList.remove("round--degraissant");
    round.classList.remove("round--wc");
    round.classList.add("round--liquide");
    mainImage.classList.add("main-image--liquide");
}


//Compteur
let add = document.querySelector(".compteur__add");
let remove = document.querySelector(".compteur__remove");
let currentNumber = document.querySelector(".compteur__value");

add.addEventListener('click', addNumber);
remove.addEventListener('click', removeNumber);

let currentNumberNumber = localStorage.getItem('compteur-final-number');
localStorage.setItem('compteur-final-number', currentNumberNumber);
currentNumber.innerHTML = localStorage.getItem('compteur-final-number');

if(currentNumberNumber == null){
    currentNumberNumber = 10;
    localStorage.setItem('compteur-final-number', currentNumberNumber);
    localStorage.setItem('lessive-number', currentNumberNumber);
    localStorage.setItem('tablettes-number', currentNumberNumber);
    localStorage.setItem('desodorisant-number', currentNumberNumber);
    currentNumber.innerHTML = localStorage.getItem('compteur-final-number');
}

function addNumber(){
    remove.classList.remove("hidden");
    currentNumberNumber = currentNumberNumber + 1;
    localStorage.setItem('compteur-final-number', currentNumberNumber);
    currentNumber.innerHTML = localStorage.getItem('compteur-final-number');
    if (mediumTitle.textContent == "Combien de lessives faites-vous par mois ?") {
        localStorage.setItem('lessive-number', currentNumberNumber);
    } else if (mediumTitle.textContent == "Combien de lave-vaisselle faites-vous par semaine ?") {
        localStorage.setItem('tablettes-number', currentNumberNumber);
    } else if (mediumTitle.textContent == "Combien de fois par mois désodorisez-vous les pièces de votre maison ?") {
        localStorage.setItem('desodorisant-number', currentNumberNumber);
    }
}

function removeNumber(){
  if (currentNumberNumber == 0) {
    remove.classList.add("hidden");
  } else {
    remove.classList.remove("hidden");
    currentNumberNumber = currentNumberNumber - 1;
    localStorage.setItem('compteur-final-number', currentNumberNumber);
    currentNumber.innerHTML = localStorage.getItem('compteur-final-number');
    if (mediumTitle.textContent == "Combien de lessives faites-vous par mois ?") {
        localStorage.setItem('lessive-number', currentNumberNumber);
    } else if (mediumTitle.textContent == "Combien de lave-vaisselle faites-vous par semaine ?") {
        localStorage.setItem('tablettes-number', currentNumberNumber);
    } else if (mediumTitle.textContent == "Combien de fois par mois désodorisez-vous les pièces de votre maison ?") {
        localStorage.setItem('desodorisant-number', currentNumberNumber);
    }
  }
}

//slider range normal
//source : https://www.youtube.com/watch?v=YE10hytBBho
let rangeValue = document.querySelector(".range__value");
let rangeBarre = document.querySelector(".range__barre");
let range = document.querySelector(".range");

rangeBarre.addEventListener("input", slideRange);

if(this.value == null){
    this.value = 10;
    localStorage.setItem('slider-range-normal-final-value', this.value);
    localStorage.setItem('vitres-number', this.value);
    localStorage.setItem('multi-number', this.value);
    localStorage.setItem('detartrant-number', this.value);
    currentNumber.innerHTML = localStorage.getItem('compteur-final-number');
}

function slideRange(){
  let value = (this.value-this.min)/(this.max-this.min)*100;
  localStorage.setItem('slider-range-normal-final-value', this.value);
  if (mediumTitle.textContent == "Combien de fois par an lavez-vous vos fenêtres ?") {
    localStorage.setItem('vitres-number', this.value);
} else if (mediumTitle.textContent == "Combien de fois par mois lavez-vous vos meubles avec votre produit multi-usage ?") {
    localStorage.setItem('multi-number', this.value);
} else if (mediumTitle.textContent == "Combien de fois par an détartrez-vous vos canalisations ?") {
    localStorage.setItem('detartrant-number', this.value);
}
  rangeValue.innerHTML = localStorage.getItem('slider-range-normal-final-value');
}

//slider range rond
//source : https://codepen.io/om-10/pen/dyNBLOd
localStorage.setItem('round-value', 10);
localStorage.setItem('wc-number', 10);
localStorage.setItem('degraissant-number', 10);
localStorage.setItem('liquide-number', 10);
$("#round").roundSlider({
    value: 10,
    width: 5,
    handleSize: "+1",
    sliderType: "min-range",
    lineCap: "square",
    startAngle: 90,
    animation: false,
    editableTooltip: false,
    keyboardAction: false,
    radius: 70,
    handleShape: "square",
    handleSize: "+100",
    drag: function (e) {
    	$("#round__value").html(e.value);
        localStorage.setItem('round-value', e.value);
        if (mediumTitle.textContent == "Combien de fois par mois nettoyez-vous vos wc ?") {
            localStorage.setItem('wc-number', e.value);
        } else if (mediumTitle.textContent == "Combien de fois par mois avez-vous besoin de votre dégraissant ?") {
            localStorage.setItem('degraissant-number', e.value);
        } else if (mediumTitle.textContent == "Combien de fois par mois lavez-vous vos plats avec du liquide vaisselle ?") {
            localStorage.setItem('liquide-number', e.value);
        }
    },
    change: function (e) {
    	$("#round__value").html(e.value);
        localStorage.setItem('round-value', e.value);
        if (mediumTitle.textContent == "Combien de fois par mois nettoyez-vous vos wc ?") {
            localStorage.setItem('wc-number', e.value);
        } else if (mediumTitle.textContent == "Combien de fois par mois avez-vous besoin de votre dégraissant ?") {
            localStorage.setItem('degraissant-number', e.value);
        } else if (mediumTitle.textContent == "Combien de fois par mois lavez-vous vos plats avec du liquide vaisselle ?") {
            localStorage.setItem('liquide-number', e.value);
        }
    }
});

//gain final

let finalNumber = 0;
let industrielNumber = 0;
let recettesNumber = 0;

function toGain(){
    mainImage.classList.add("hidden");
    compteur.classList.add("hidden");
    range.classList.add("hidden");
    round.classList.add("hidden");

    if ((localStorage.getItem('lessive', 'true')) && (localStorage.getItem('adoucissant') === null)) {
        let lessiveIndustriel = (parseInt(localStorage.getItem('lessive-number'), 10)*0.04*12*5.01);
        let lessiveRecettes = (parseInt(localStorage.getItem('lessive-number'), 10)*0.04*12*0.16);
        finalNumber = finalNumber + (lessiveIndustriel - lessiveRecettes);
        industrielNumber = industrielNumber + lessiveIndustriel;
        recettesNumber = recettesNumber + lessiveRecettes;
    } else if ((localStorage.getItem('adoucissant', 'true')) && (localStorage.getItem('lessive') === null)){
        let adoucissantIndustriel = (parseInt(localStorage.getItem('lessive-number'), 10)*0.04*12*2.66);
        let adoucissantRecettes = (parseInt(localStorage.getItem('lessive-number'), 10)*0.04*12*0.29);
        finalNumber = finalNumber + (adoucissantIndustriel - adoucissantRecettes);
        industrielNumber = industrielNumber + adoucissantIndustriel;
        recettesNumber = recettesNumber + adoucissantRecettes;
    } else if ((localStorage.getItem('lessive', 'true')) && (localStorage.getItem('adoucissant', 'true'))){
        let lessiveAdoucissantIndustriel = ((parseInt(localStorage.getItem('lessive-number'), 10)*0.04*12*5.01)+(parseInt(localStorage.getItem('lessive-number'), 10)*0.04*12*2.66));
        let lessiveAdoucissantRecettes = ((parseInt(localStorage.getItem('lessive-number'), 10)*0.04*12*0.16)+(parseInt(localStorage.getItem('lessive-number'), 10)*0.04*12*0.29));
        finalNumber = finalNumber + (lessiveAdoucissantIndustriel - lessiveAdoucissantRecettes);
        industrielNumber = industrielNumber + lessiveAdoucissantIndustriel;
        recettesNumber = recettesNumber + lessiveAdoucissantRecettes;
    }
    if (localStorage.getItem('vitres', 'true')) {
        let vitresIndustriel = (parseInt(localStorage.getItem('vitres-number'), 10)*0.15*4.07);
        let vitresRecettes = (parseInt(localStorage.getItem('vitres-number'), 10)*0.15*0.28);
        finalNumber = finalNumber + (vitresIndustriel - vitresRecettes);
        industrielNumber = industrielNumber + vitresIndustriel;
        recettesNumber = recettesNumber + vitresRecettes;
    }
    if (localStorage.getItem('wc', 'true')) {
        let wcIndustriel = (parseInt(localStorage.getItem('wc-number'), 10)*0.03*12*2.44);
        let wcRecettes = (parseInt(localStorage.getItem('wc-number'), 10)*0.03*12*0.35);
        finalNumber = finalNumber + (wcIndustriel - wcRecettes);
        industrielNumber = industrielNumber + wcIndustriel;
        recettesNumber = recettesNumber + wcRecettes;
    }
    if (localStorage.getItem('tablettes', 'true')) {
        let tablettesIndustriel = (parseInt(localStorage.getItem('tablettes-number'), 10)*52*0.29);
        let tablettesRecettes = (parseInt(localStorage.getItem('tablettes-number'), 10)*52*0.06);
        finalNumber = finalNumber + (tablettesIndustriel - tablettesRecettes);
        industrielNumber = industrielNumber + tablettesIndustriel;
        recettesNumber = recettesNumber + tablettesRecettes;
    }
    if (localStorage.getItem('multi', 'true')) {
        let multiIndustriel = (parseInt(localStorage.getItem('multi-number'), 10)*0.06*12*6.1);
        let multiRecettes = (parseInt(localStorage.getItem('multi-number'), 10)*0.06*12*0.29);
        finalNumber = finalNumber + (multiIndustriel - multiRecettes);
        industrielNumber = industrielNumber + multiIndustriel;
        recettesNumber = recettesNumber + multiRecettes;
    }
    if (localStorage.getItem('degraissant', 'true')) {
        let degraissantIndustriel = (parseInt(localStorage.getItem('degraissant-number'), 10)*0.1*12*5.74);
        let degraissantRecettes = (parseInt(localStorage.getItem('degraissant-number'), 10)*0.1*12*0.68);
        finalNumber = finalNumber + (degraissantIndustriel - degraissantRecettes);
        industrielNumber = industrielNumber + degraissantIndustriel;
        recettesNumber = recettesNumber + degraissantRecettes;
    }
    if (localStorage.getItem('desodorisant', 'true')) {
        let desodorisantIndustriel = (parseInt(localStorage.getItem('desodorisant-number'), 10)*2*0.0013*12*10.52);
        let desodorisantRecettes = (parseInt(localStorage.getItem('desodorisant-number'), 10)*2*0.0013*12*0.7);
        finalNumber = finalNumber + (desodorisantIndustriel - desodorisantRecettes);
        industrielNumber = industrielNumber + desodorisantIndustriel;
        recettesNumber = recettesNumber + desodorisantRecettes;
    }
    if (localStorage.getItem('detartrant', 'true')) {
        let detartrantIndustriel = (parseInt(localStorage.getItem('detartrant-number'), 10)*0.1*3.77);
        let detartrantRecettes = (parseInt(localStorage.getItem('detartrant-number'), 10)*0.1*0.12);
        finalNumber = finalNumber + (detartrantIndustriel - detartrantRecettes);
        industrielNumber = industrielNumber + detartrantIndustriel;
        recettesNumber = recettesNumber + detartrantRecettes;
    }
    if (localStorage.getItem('liquide', 'true')) {
        let liquideIndustriel = (parseInt(localStorage.getItem('liquide-number'), 10)*0.1*12*1.69);
        let liquideRecettes = (localStorage.getItem('liquide-number', 0));
        finalNumber = finalNumber + (liquideIndustriel - liquideRecettes);
        industrielNumber = industrielNumber + liquideIndustriel;
        recettesNumber = recettesNumber + liquideRecettes;
    }
    bigTitle.innerHTML = "En remplaçant vos produits industriels par nos recettes écologiques, vous aurez un bénéfice annuel de " + (Math.floor(finalNumber * 100) / 100) + "€";
    mediumTitle.innerHTML = "Industriel : " + (Math.floor(industrielNumber * 100) / 100) + " € <br/> Recettes : " + (Math.floor(recettesNumber * 100) / 100) + "€";
    nextButton.classList.add("hidden");
}