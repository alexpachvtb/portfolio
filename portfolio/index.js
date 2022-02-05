const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      overlay = document.querySelector('.overlay'),
      menuLinks = menu.querySelector('.menu__links');

function openCloseMenu() {
    hamburger.classList.toggle('hamburger_close');
    menu.classList.toggle('menu_active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('hidden');
}

hamburger.addEventListener('click', openCloseMenu);
overlay.addEventListener('click', openCloseMenu);

menuLinks.addEventListener('click', (e) => {
    if (e.target.tagName == 'A') {
        openCloseMenu();
    }
});