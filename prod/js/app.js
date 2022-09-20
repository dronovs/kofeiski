'use strict';

const body = document.body;
const header = document.querySelector('.header-wrapper');

let lightThemeContainers = document.querySelectorAll('.light-theme');

const ukrButton = document.querySelector('.ukr-lang-btn');
const engButton = document.querySelector('.eng-lang-btn');
const langButtons = document.querySelector('.lang-btns-wrapper');
const ukrainianWrapper = document.querySelector('.ukrainian-wrapper');
const englishWrapper = document.querySelector('.english-wrapper');

const themeTumbler = document.querySelector('.theme-tumbler');
const themeTumblerCircle = document.querySelector('.theme-tumbler-circle');
console.log(themeTumblerCircle);

function changeLanguage () {
    if (event.target === engButton) {
        englishWrapper.classList.remove('unchecked-language');
        ukrainianWrapper.classList.add('unchecked-language');
        console.log(ukrainianWrapper.classList);
    }
    if (event.target === ukrButton) {
        englishWrapper.classList.add('unchecked-language');
        ukrainianWrapper.classList.remove('unchecked-language');
    }
}

function changeTheme () {
    event.target.style.justifyContent = 'end';

    lightThemeContainers.forEach(el => {
        el.classList.toggle('dark-theme');
    })
    header.classList.toggle('header-dark-theme');
    body.classList.toggle('body-dark-theme');
}

themeTumbler.addEventListener('click', changeTheme);
langButtons.addEventListener('click', changeLanguage);