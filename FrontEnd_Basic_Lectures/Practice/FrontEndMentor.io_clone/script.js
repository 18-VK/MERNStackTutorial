console.log("Let's start");

// Menu bar 
let menuButton = document.getElementsByClassName('hamburger-button');
let humBurgurMenu = document.getElementsByClassName('hamburger-menu');
let dropdownMenu = document.getElementsByClassName('dropdown-menu');


if (menuButton[0]) {
    menuButton[0].addEventListener('click', function () {
        if (humBurgurMenu[0] && dropdownMenu[0]) {
            humBurgurMenu[0].classList.toggle('active');
            dropdownMenu[0].classList.toggle('active');
        }
    });
}
if (dropdownMenu[0]) {
    dropdownMenu[0].addEventListener('click', function () {
        if (humBurgurMenu[0] && dropdownMenu[0]) {
            humBurgurMenu[0].classList.toggle('active');
            dropdownMenu[0].classList.toggle('active');
        }
    });
}
// for smooth scolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});