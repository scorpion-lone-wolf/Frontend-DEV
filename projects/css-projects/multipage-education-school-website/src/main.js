'use strict';
window.addEventListener('scroll', function () {
    // * selecting the nav element
    let navElement = this.document.getElementsByTagName('nav');
    // * If it has "window-scroll" class then it remove, else add
    navElement[0].classList.toggle('window-scroll', window.scrollY > 0);
})