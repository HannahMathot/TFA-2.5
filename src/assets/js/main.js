"use strict";

// Année (Copyright)
let annee = document.querySelector(".copyright__annee");
let date = new Date();
let year = date.getUTCFullYear();
annee.innerHTML = year

//Animations
let mediumTitles = document.querySelectorAll("main .medium-title");
for (const mediumTitle of mediumTitles) {
    gsap.from(mediumTitle, {
        x: 0 - window.innerWidth,
        duration: 1.2,
        scrollTrigger: {
            trigger: mediumTitle,
            toggleActions: "play none none none"
        }, 
    });
}

let paragraphes = document.querySelectorAll("p");
let liste = document.querySelector(".section-7__list");
for (const paragraphe of paragraphes) {
    gsap.from(paragraphe, {
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: paragraphe,
            toggleActions: "play none none none"
        }, 
    });
}
gsap.from(liste, {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: liste,
        toggleActions: "play none none none"
    }, 
});