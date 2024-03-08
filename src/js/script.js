const buttonMenuMobile = document.getElementById('menu-btn');
const menuNavContainer = document.getElementById('menu-container');
const buttonCloseMenuMobile = document.getElementById('menu-close');

buttonMenuMobile.addEventListener('click', toggleMenu);

buttonCloseMenuMobile.addEventListener('click', toggleMenu)

function toggleMenu() {
    menuNavContainer.classList.toggle('show-menu');
}

// Swiper JS
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});