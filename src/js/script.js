const buttonMenuMobile = document.getElementById('menu-btn');
const menuNavContainer = document.getElementById('menu-container');
const buttonCloseMenuMobile = document.getElementById('menu-close');

buttonMenuMobile.addEventListener('click', () => {
    menuNavContainer.classList.toggle('show-menu');
});

buttonCloseMenuMobile.addEventListener('click', () => {
    menuNavContainer.classList.toggle('show-menu');
})