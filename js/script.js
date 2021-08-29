/*alert('Hello world')*/
const hamburgerMenu = document.querySelector('#hamburger');
const asideMenu = document.querySelector('#aside');


hamburgerMenu.addEventListener('click', function () {
    console.log('メニューがクリックされました');
    hamburgerMenu.classList.toggle('is-active')
    asideMenu.classList.toggle('is-on')

});