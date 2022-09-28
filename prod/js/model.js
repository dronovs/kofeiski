'use strict';

function model () {

    return {
        setEngLanguage () {
            localStorage.setItem('lang', 'eng');
        },
        setUkrLanguage () {
            localStorage.setItem('lang', 'ua');
        },
        saveDarkMode () {
            localStorage.setItem('theme', 'dark');
        },
        removeDarkMode () {
            localStorage.removeItem('theme');
        },
    }
}