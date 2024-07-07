'use strict';
window.addEventListener('scroll', function () {
    // * selecting the nav element
    let navElement = this.document.getElementsByTagName('nav');
    // * If it has "window-scroll" class then it remove, else add
    navElement[0].classList.toggle('window-scroll', window.scrollY > 0);
})

// * add event listener to faq article elements
const faqElements = document.querySelectorAll('.faq');

// * Attach a click event listener to each element
faqElements.forEach(element => {
    element.addEventListener('click', (event) => {
        element.classList.toggle('open');
        // <i class="fa-solid fa-minus"></i>
        // *change the icon
        const icon = element.querySelector('.faq__icon i');
        if (icon.className === 'fa-solid fa-minus') {
            icon.className = 'fa-solid fa-plus';
        } else {
            icon.className = 'fa-solid fa-minus';
        }

    });
});

// * open the navbar button
// select the hamburger menu button
const menuHamButton = document.querySelector("#open-menu-btn");
menuHamButton.addEventListener('click', () => {
    const menu = document.querySelector(".nav__menu");
    const menuCloseButton = document.querySelector("#close-menu-btn");
    menuCloseButton.style.display = 'block';
    menuHamButton.style.display = 'none';
    menu.style.display = 'flex';
});

// * close the navbar button
const menuCloseButton = document.querySelector("#close-menu-btn");
menuCloseButton.addEventListener('click', () => {
    const menu = document.querySelector(".nav__menu");
    const menuHamButton = document.querySelector("#open-menu-btn");
    menuCloseButton.style.display = 'none';
    menuHamButton.style.display = 'block';
    menu.style.display = 'none';
});
