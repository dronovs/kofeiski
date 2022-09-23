'use strict';

const body = document.body;
const header = document.querySelector('.header-wrapper');

let lightThemeContainers = document.querySelectorAll('.light-theme');

const ukrButton = document.querySelector('.ukr-lang-btn');
const engButton = document.querySelector('.eng-lang-btn');
const ukrainianWrapper = document.querySelector('.ukrainian-wrapper');
const englishWrapper = document.querySelector('.english-wrapper');

const themeTumbler = document.querySelector('.theme-tumbler');
const themeTumblerCircle = document.querySelector('.theme-tumbler-circle');

function headerEventListener () {
    if (event.target === engButton) {
        event.stopPropagation();
        englishWrapper.classList.remove('unchecked-language');
        ukrainianWrapper.classList.add('unchecked-language');
        localStorage.setItem('lang', 'eng');
    } else if (event.target === ukrButton) {
        event.stopPropagation();
        englishWrapper.classList.add('unchecked-language');
        ukrainianWrapper.classList.remove('unchecked-language');
        localStorage.setItem('lang', 'ua');
    } else if (event.target === themeTumbler || event.target === themeTumblerCircle) {
        event.stopPropagation();
        themeTumbler.classList.toggle('theme-tumbler-dark');
        themeTumblerCircle.classList.toggle('theme-tumbler-circle-dark');
        lightThemeContainers.forEach(el => {
            el.classList.toggle('dark-theme');
        })
        header.classList.toggle('header-dark-theme');
        body.classList.toggle('body-dark-theme');
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
    }
}

// function langLoader () {
//     if (localStorage.getItem('lang') === 'eng') {
//         englishWrapper.classList.remove('unchecked-language');
//         ukrainianWrapper.classList.add('unchecked-language');
//     } else if (localStorage.getItem('lang') === 'ua') {
//         englishWrapper.classList.add('unchecked-language');
//         ukrainianWrapper.classList.remove('unchecked-language');
//     }
//     if (localStorage.getItem('theme') === 'dark') {
//         themeTumbler.classList.toggle('theme-tumbler-dark');
//         themeTumblerCircle.classList.toggle('theme-tumbler-circle-dark');
//         lightThemeContainers.forEach(el => {
//             el.classList.toggle('dark-theme');
//         })
//         header.classList.toggle('header-dark-theme');
//         body.classList.toggle('body-dark-theme');
//     }
// }

function langLoader () {
    if (localStorage.getItem('lang') === 'eng') {
        englishWrapper.classList.remove('unchecked-language');
        ukrainianWrapper.classList.add('unchecked-language');
    }
    if (localStorage.getItem('theme') === 'dark') {
        themeTumbler.classList.toggle('theme-tumbler-dark');
        themeTumblerCircle.classList.toggle('theme-tumbler-circle-dark');
        lightThemeContainers.forEach(el => {
            el.classList.toggle('dark-theme');
        })
        header.classList.toggle('header-dark-theme');
        body.classList.toggle('body-dark-theme');
    }
}

document.addEventListener('DOMContentLoaded', langLoader);
header.addEventListener('click', headerEventListener);
