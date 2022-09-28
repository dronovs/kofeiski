'use strict';

function controller (view, model) {
    const header = document.querySelector('.header-wrapper');

    const ukrButton = document.querySelector('.ukr-lang-btn');
    const engButton = document.querySelector('.eng-lang-btn');
    const ukrainianWrapper = document.querySelector('.ukrainian-wrapper');
    const englishWrapper = document.querySelector('.english-wrapper');

    const themeTumbler = document.querySelector('.theme-tumbler');
    const themeTumblerCircle = document.querySelector('.theme-tumbler-circle');

    function headerEventListener () {
        if (event.target === engButton) {
            event.stopPropagation();
            view.renderEngWrapper();
            englishWrapper.classList.remove('unchecked-language');
            ukrainianWrapper.classList.add('unchecked-language');
            model.setEngLanguage();
        } else if (event.target === ukrButton) {
            event.stopPropagation();
            view.renderUkrWrapper();
            englishWrapper.classList.add('unchecked-language');
            ukrainianWrapper.classList.remove('unchecked-language');
            model.setUkrLanguage();
        } else if (event.target === themeTumbler || event.target === themeTumblerCircle) {
            view.themeSwitch();
            if (!localStorage.getItem('theme')) {
                model.saveDarkMode();
            } else {
                model.removeDarkMode();
            }
        }
    }

    function pageLoader () {
        if (localStorage.getItem('lang') === 'eng') {
            view.renderEngWrapper();
            englishWrapper.classList.remove('unchecked-language');
            ukrainianWrapper.classList.add('unchecked-language');
        } else if (localStorage.getItem('lang') === 'ua') {
            view.renderUkrWrapper();
        }
        if (localStorage.getItem('theme') === 'dark') {
            view.themeSwitch();
        }
    }

    header.addEventListener('click', headerEventListener);
    document.addEventListener('DOMContentLoaded', pageLoader);
}





