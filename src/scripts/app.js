"use strict";
import gsap from 'gsap';

window.addEventListener("load", function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    var videos = document.querySelectorAll('.video');

    function playVideo() {
        videos.forEach(function(video) {
            video.play().catch(function() {
                // console.log("Lecture automatique bloquée : " + error);
            });
        });
    }
    
    playVideo();
    
    document.body.addEventListener('click', playVideo);
    document.body.addEventListener('touchstart', playVideo)
});

const menuBurger = document.querySelector('.menu__burger');
const menuOver = document.querySelector('.menu__overlay');
const menu = document.querySelector('.menu');

menuBurger.addEventListener('click', function(){
    menu.classList.toggle('menu--open');
})

menuOver.addEventListener('click', function(){
  menu.classList.remove('menu--open');
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

document.getElementById('checkbox').addEventListener('change', function() {
  var skillsPs = document.querySelector('.skills__ps');
  if (this.checked) {
    skillsPs.style.display = 'grid';
    gsap.to(skillsPs, { opacity: 1, ease: "power2.inOut" });
  } else {
    gsap.to(skillsPs, { opacity: 0, ease: "power2.inOut", onComplete: function() {
      skillsPs.style.display = 'none';
    }});
  }
});

document.getElementById('checkbox2').addEventListener('change', function() {
  var skillsDef = document.querySelector('.skills__defi');
  if (this.checked) {
    skillsDef.style.display = 'block';
    gsap.to(skillsDef, { opacity: 1, ease: "power2.inOut" });
  } else {
    gsap.to(skillsDef, { opacity: 0, ease: "power2.inOut", onComplete: function() {
      skillsDef.style.display = 'none';
    }});
  }
});