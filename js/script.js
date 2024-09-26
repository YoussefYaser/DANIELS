
var nav = document.getElementsByClassName('navbar');
var navLogo = document.getElementsByClassName('navbar-brand');
var navLink = document.querySelectorAll('.navbar-expand-md .navbar-nav .nav-link');
var navToggler = document.querySelector('.page nav .navbar-toggler');

window.onscroll = function(){
    nav[0].style.backgroundColor = 'white';
    navLogo[0].style.color = 'black';
    for(var i=0; i<navLink.length; i++){
        navLink[i].style.color = 'black';
        navLink[i].style.setProperty('--border-color', 'black');
    }
    for(var i=0; i<navToggler.children.length; i++)
        navToggler.children[i].style.setProperty('border-color', 'black', "important");
}