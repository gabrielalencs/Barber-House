const buttonMenuMobile = document.getElementById('menu-btn');
const menuNavContainer = document.getElementById('menu-container');
const buttonCloseMenuMobile = document.getElementById('menu-close');

buttonMenuMobile.addEventListener('click', toggleMenu);

buttonCloseMenuMobile.addEventListener('click', toggleMenu)

function toggleMenu() {
    menuNavContainer.classList.toggle('show-menu');
}

// Swiper JS
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    grabCursor: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        50: {
            slidesPerView: 1,
        },
        481: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        668: {
            slidesPerView: 3,
        }
    }
});