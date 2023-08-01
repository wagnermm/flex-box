import '../scss/style.scss'

var openMenu = document.querySelector('.btn-menu').addEventListener('click', function() {
    document.querySelector('nav-mobile').style.visibility="visible";
});

var closeMenu = document.querySelector('.nav-mobile').addEventListener('click', function() {
    document.querySelector('nav-mobile').style.visibility="hidden";
});