const buttonMenuMobile = document.getElementById('menu-btn');
const menuNavContainer = document.getElementById('menu-container');
const buttonCloseMenuMobile = document.getElementById('menu-close');
const headerContainer = document.getElementById('header');
const sections = document.querySelectorAll('main section[id]');


buttonMenuMobile.addEventListener('click', toggleMenu);
buttonCloseMenuMobile.addEventListener('click', toggleMenu);

window.addEventListener('scroll', function() {
    addBoxShadow();
    activateMenuAtCurrentSection();
});


function addBoxShadow() {
    window.scrollY > 100
    ? headerContainer.classList.add('shadow-lg')
    : headerContainer.classList.remove('shadow-lg')
}

function toggleMenu() {
    menuNavContainer.classList.toggle('show-menu');
}


function activateMenuAtCurrentSection() {

    const checkpoint = window.scrollY + (window.innerHeight / 10) * 4;

    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector('nav ul li a[href="#' + sectionId + '"]');

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        checkpointStart && checkpointEnd
        ? navLink.classList.add('active') 
        : navLink.classList.remove('active')
    }

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