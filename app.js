let navbar = document.querySelector('.navbar');
let menu = document.querySelector('.navbar-res .icon i');
let nav = document.querySelector('.navbar-res .items');
let close = document.querySelector('.navbar-res .items .close i');

menu.addEventListener('click', function(){
    
    // menu.style.display = 'none';
    menu.classList.add('fa-spin');
    nav.style.right = '0';

});

close.addEventListener('click', function(){

    menu.style.display = 'block';
    menu.classList.remove('fa-spin');
    nav.style.right = '-100%';
});



window.onscroll = () => {

    navbar.classList.remove('activeNav');

    if (window.scrollY > 0) {
        document.querySelector('.navbar').classList.add('activeNav');
        nav.style.right = '-100%';
        menu.classList.remove('fa-spin');
    } else
        document.querySelector('.navbar').classList.remove('activeNav');


};


window.onload = () => {


    if (window.scrollY > 0) {
        document.querySelector('.navbar').classList.add('activeNav');
    } else
        document.querySelector('.navbar').classList.remove('activeNav');
};