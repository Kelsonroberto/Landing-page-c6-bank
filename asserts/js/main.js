
//abrir menu no mobile
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// esconder menu quando clicar no links 
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction))

// mudando com scroll 
function scrollHeader() {
    const header = document.getElementById('header');
    if(this.scrollY >= 50) header.classList.add('scroll-header');    
    else header.classList.remove('scroll-header');    
}

window.addEventListener('scroll', scrollHeader);

/*Animações gsap.min.js*/ 
/*Mulher na home*/
gsap.from('.home__cover', 1.5, {opacity:0, y:150, dalay: 0.1 });

/*dados da home */
gsap.from('.home__data', 1.8, {opacity: 0, x: -100, dalay: 0.2 });

/*Cartoes*/
gsap.from('.advantages__blue', 1.5, {opacity: 0, x: -150, dalay: 0.2 });
gsap.from('.advantages__pink', 1.5, {opacity: 0, x: 150, dalay: 0.1 });
gsap.from('.advantages__gray', 1.5, {opacity: 0, y: 150, dalay: 0.4 });
gsap.from('.advantages__gold', 1.5, {opacity: 0, y: 150, dalay: 0.1 });

/*animação footer */
gsap.from('.footer__header', 1.5, {opacity: 0, y: 150, dalay: 0.4 });
gsap.from('.footer__card', 1.5, {opacity: 0, y: 200, dalay: 0.9 });

