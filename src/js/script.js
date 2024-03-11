const buttonMenuMobile = document.getElementById('menu-btn');
const menuNavContainer = document.getElementById('menu-container');
const buttonCloseMenuMobile = document.getElementById('menu-close');
const headerContainer = document.getElementById('header');

buttonMenuMobile.addEventListener('click', toggleMenu);
buttonCloseMenuMobile.addEventListener('click', toggleMenu);
document.addEventListener('scroll', addBoxShadow);


function addBoxShadow() {
    window.scrollY > 100
    ? headerContainer.classList.add('shadow-lg')
    : headerContainer.classList.remove('shadow-lg')
}

function toggleMenu() {
    menuNavContainer.classList.toggle('show-menu');
}



// Swiper JS
const swiper = new Swiper('.swiper', {

    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        10: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50

        }
    }

});