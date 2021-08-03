const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

//모바일 메뉴
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);