
const mobileMenuOverlay = document.querySelector ( '.menu-mobile').parentElement;

let isMobileMenuOpen = false;

document.querySelector ('.header__btn-menu').addEventListener ('click', toggleMobileMenu);
document.querySelector ('.menu-mobile__btn-close').addEventListener ('click', toggleMobileMenu);

function toggleMobileMenu ()
{
    isMobileMenuOpen = !isMobileMenuOpen;

    if (isMobileMenuOpen)
        mobileMenuOverlay.classList.add ('open');
    else 
        mobileMenuOverlay.classList.remove ('open');
}