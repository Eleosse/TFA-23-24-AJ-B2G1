"use strict";

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
    var video = document.getElementById('video');
      
    function playVideo() {
        video.play().catch(function(error) {
            console.log("Lecture automatique bloquée : " + error);
        });
    }
      
    playVideo();
      
    document.body.addEventListener('click', playVideo);
    document.body.addEventListener('touchstart', playVideo);
});

const menuBurger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu');

menuBurger.addEventListener('click', function(){
    menu.classList.toggle('menu--open');
})

const teamLinks = document.querySelectorAll(".project__link");
teamLinks.forEach((el) => {
    el.addEventListener("click", activeModal); 
})

function activeModal(event){
    event.preventDefault();
    let projectElement = this.closest(".project__el");
    projectElement.classList.add("project__el--active");
    let projectClose = document.querySelector(".project__el--active .project__close");
    projectClose.addEventListener("click", removeActive)
    let projectOverlay = document.querySelector(".project__el--active .project__overlay");
    projectOverlay.addEventListener("click", removeActive)
    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            removeActive();
        }
    });
    function removeActive(){
        projectElement.classList.remove("project__el--active")
    }
}

const translations = [
    "Salutations",
    "Greetings",
    "Groeten",
    "Grüße",
    "Saludos",      
    "Saluti"
];

let currentIndex = 0;

function changeTitle() {
    const titleElement = document.querySelector('.presentation__section--title');
    titleElement.innerText = translations[currentIndex];
    currentIndex = (currentIndex + 1) % translations.length;
}

setInterval(changeTitle, 1500);