function modal() {
    let buttonMore = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');
    let buttonsDescription = document.querySelectorAll('.description-btn');

    let openModal = function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    };

    let closeModal = () => {
        overlay.style.display = 'none';
        buttonMore.classList.remove('more-splash');
        document.body.style.overflow = '';
    };

    buttonMore.addEventListener('click', openModal);

    close.addEventListener('click', closeModal);

    buttonsDescription.forEach((button) => {
        button.addEventListener('click', openModal);
    });
}

module.exports = modal;