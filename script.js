const expBtnCon = document.querySelector('.exp-btn-con');
const header = document.querySelector('header');
const headerNav = document.querySelector('header .nav');



expBtnCon.addEventListener('click', function () {
    expBtnCon.classList.toggle('open');
    header.classList.toggle('open');
    headerNav.classList.toggle('open');
    setTimeout( function () {headerNav.classList.toggle('visible')}, 50)
})