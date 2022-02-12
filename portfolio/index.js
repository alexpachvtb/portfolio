import i18Obj from "./js/translate.js";

document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          overlay = document.querySelector('.overlay'),
          menuLinks = menu.querySelector('.menu__links'),
          btnsPanel = document.querySelector('.portfolio__panel'),
          seasonsBtns = btnsPanel.querySelectorAll('.portfolio__btn'),
          portfolioImgs = document.querySelector('.portfolio__wrapper'),
          langSwitcher = document.querySelector('.header__switcher'),
          langLinks = langSwitcher.querySelectorAll('a'),
          seasons = ['winter', 'spring', 'summer', 'autumn'];

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

    btnsPanel.addEventListener('click', e => {
        let seasonNum;
        if (e.target.tagName == "BUTTON") {
            seasonsBtns.forEach((btn, i) => {
                if (btn == e.target) {
                    btn.classList.remove('button_black');
                    btn.classList.add('button_gold');
                    seasonNum = i;
                } else {
                    btn.classList.remove('button_gold');
                    btn.classList.add('button_black');
                }
            });
        }
        portfolioImgs.innerHTML = `
            <img src="assets/img/${seasons[seasonNum]}/1.jpg" alt="photo" class="portfolio__photo">
            <img src="assets/img/${seasons[seasonNum]}/2.jpg" alt="photo" class="portfolio__photo">
            <img src="assets/img/${seasons[seasonNum]}/3.jpg" alt="photo" class="portfolio__photo">
            <img src="assets/img/${seasons[seasonNum]}/4.jpg" alt="photo" class="portfolio__photo">
            <img src="assets/img/${seasons[seasonNum]}/5.jpg" alt="photo" class="portfolio__photo">
            <img src="assets/img/${seasons[seasonNum]}/6.jpg" alt="photo" class="portfolio__photo">
        `;
    });

    function getTranslate(lang) {
        document.querySelectorAll('[data-i18n]').forEach(item => {
            if (item.placeholder || item.value) {
                item.placeholder = i18Obj[lang][item.getAttribute('data-i18n')];
                item.value = i18Obj[lang][item.getAttribute('data-i18n')];
            } else {
                item.textContent = i18Obj[lang][item.getAttribute('data-i18n')];
            }
        });
    }

    langSwitcher.addEventListener('click', e => {
        if (e.target.tagName == "A") {
            e.preventDefault();
            langLinks.forEach(link => {
                link.classList.remove('gold');
            });
            e.target.classList.add('gold');
            getTranslate(e.target.innerText);
        }
    });  
});