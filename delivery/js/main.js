const CardBtn = document.querySelector('#card-btn');
const modal = document.querySelector('.modal');
const modal__close = document.querySelector('.modal__close');

CardBtn.addEventListener('click', toggleModal);
modal__close.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('modal__is-open');
}

new WOW().init();