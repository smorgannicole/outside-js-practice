"use strict";

// TODO: Problem 1
/** Change the font family to arial. */
const bodyFont = document.querySelector('body');
bodyFont.style.fontFamily = 'Arial, sans-serif';

// TODO: Problem 2
/** When the element with an id of dark-mode-btn is clicked, the class of dark-mode should be toggled on the body element. */
const darkModeBtn = document.querySelector('#dark-mode-btn');
const bodyDarkMode = document.body;
darkModeBtn.addEventListener('click', () => {
    bodyDarkMode.classList.toggle('dark-mode');

});
// TODO: Problem 3
/** When the element with an id of to-mdn is clicked, change the browser location to this address: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model. */
const toMDN = document.querySelector('#to-mdn');
toMDN.addEventListener('click', () => {
    window.location.href = 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model';

});

// TODO: Problem 4
/** After three seconds, the class of hide should be removed from the element with a class of popup. The setTimeout function can be used for this. */
const popupElement = document.querySelector('.popup');
setTimeout(() => {
    popupElement.classList.remove('hide');
}, 3000);

// TODO: Problem 5
/** When the element with an id of dismiss-btn is clicked, the element with a class of popup should be given a class of hide. */
const dismissBtn = document.getElementById('dismiss-btn');
const popup = document.querySelector('.popup');
dismissBtn.addEventListener('click', () => {
    popup.classList.add('hide');
});

// TODO: Problem 6
/** The class of link-hover should be added to any anchor tag elements in the navbar when hovering into the element and removed when hovering out. */
const aLinks = document.querySelectorAll('a');
for (let link of aLinks) {
    link.addEventListener('mouseenter', () => {
        link.classList.add('link-hover');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('link-hover');
    });
}

// TODO: Problem 7
/** When the button with an id of add-btn is clicked, any text inside the text input with an id of new-data should be appended to the element with an id of data. Div elements should wrap all new text appended to the #data element. */
const addBtn = document.querySelector(`#add-btn`);
addBtn.addEventListener('click', e => {
    const dataEntered = document.querySelector('#new-data').value;
    const dataElement = document.querySelector('#data');
    const newElement = document.createElement('div');
    newElement.textContent = dataEntered;
    dataElement.appendChild(newElement);
});

// TODO: Problem 8
/** When the element with an id of clean-data-btn is clicked, the text of each div inside the element with an id of data should be changed to the text clean. */
const cleanDataBtn = document.querySelector('#clean-data-btn');
    cleanDataBtn.addEventListener('click', e => {
    const dataDivs = document.querySelectorAll('#data div');
    for (let div of dataDivs) {
        div.textContent = 'clean';
    }
});

// TODO: Problem 9
/** The login button should remain disabled until the user types text inside the text input with an id of username. A keyup event listener can be used to check if the text input has a non-empty value. */
const usernameInput = document.querySelector('#username');
const loginBtn = document.querySelector('#login-btn');
usernameInput.addEventListener('keyup', e => {
    if (usernameInput.value === ""){
        loginBtn.disabled = true;
    } else {
        loginBtn.active = true;
        loginBtn.disabled = false;
    }
});

// TODO: Problem 10
/** When the button with an id of search-btn is clicked, all divs with matching inner text to the search input (#search-btn) should be styled to have a darkorange background. Any divs that do not have matching text to the search input should be set to a background of #999. */
// const searchBtn = document.querySelector(`#search-btn`);
// const searchInput = document.querySelector(`#search-text`).value.toLowerCase();
// const allDivs = document.querySelectorAll(`div`);
// searchBtn.addEventListener(`click`, e => {
//     for (let div of allDivs) {
//         const textInput = div.textContent.toLowerCase();
//         if (textInput.includes(searchInput)) {
//             div.style.backgroundColor = `darkorange`;
//         } else {
//             div.style.backgroundColor = `#999`;
//         }
//     }
// })
const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', () => {
    const searchInput = document.querySelector('#search-text').value.toLowerCase();
    const allDivs = document.querySelectorAll('#data div');
    for (let div of allDivs) {
        const divText = div.textContent.toLowerCase();
        if (divText === searchInput) {
            div.style.backgroundColor = 'darkorange';
        } else {
            div.style.backgroundColor = '';
        }
    }
});



