'use strict';

window.addEventListener('load', function () {
    const modal = document.querySelectorAll('.modal');
    const overlay = document.querySelector('.overlay');
    const btnCloseModal = document.querySelectorAll('.close-modal');
    const btnOpenModal = document.querySelectorAll('.show-modal');

    const body = document.querySelector('body');

    const openModal = function (i) {
        modal[i].classList.remove('hidden');
        overlay.classList.remove('hidden');

        if (modal[i].classList.contains('modal--ekko')) {
            body.style.backgroundImage = 'url(img/champions/ekko.jpg)';
        }
        if (modal[i].classList.contains('modal--master-yi')) {
            body.style.backgroundImage = 'url(img/champions/master-yi.jpg)';
        }
        if (modal[i].classList.contains('modal--ashe')) {
            body.style.backgroundImage = 'url(img/champions/ashe.jpg)';
        }
    };

    const closeModal = function (i) {
        modal[i].classList.add('hidden');
        overlay.classList.add('hidden');
        body.style.backgroundImage = 'url(img/bglol-default.jpg)';
    };

    for (let i = 0; i < btnOpenModal.length; i++) {
        btnOpenModal[i].addEventListener('click', function () {
            openModal(i);
        });

        btnCloseModal[i].addEventListener('click', function () {
            closeModal(i);
        });

        overlay.addEventListener('click', function () {
            closeModal(i);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && !modal[i].classList.contains('hidden')) {
                closeModal(i);
            }
        });
    }
});
