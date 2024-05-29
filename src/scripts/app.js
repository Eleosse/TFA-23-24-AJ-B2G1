"use strict";

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
    // empecher l'action du lien
    event.preventDefault();
    // var avec parent .team__el
    let projectElement = this.closest(".project__el");
    // ajoute la classe sur le parent team__el--active
    projectElement.classList.add("project__el--active");
    //var avec team__close qui se trouve DANS team__el--active
    let projectClose = document.querySelector(".project__el--active .project__close");
    //click sur team__close > remove team__el--active
    projectClose.addEventListener("click", removeActive)
    // var avec le team__overlay
    let projectOverlay = document.querySelector(".project__el--active .project__overlay");
    // click team__overlay > remove team__el--active
    projectOverlay.addEventListener("click", removeActive)
    // idem touche ESC
    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            removeActive();
        }
    });
    function removeActive(){
        projectElement.classList.remove("project__el--active")
    }
}
