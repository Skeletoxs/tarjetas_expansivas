const cards = document.querySelectorAll('.card');

cards.forEach( card => {
    card.addEventListener('click', () => {
        removeActiveClass();
        card.classList.add('activate');
    });
});

function removeActiveClass() {
    cards.forEach( card => card.classList.remove('activate'));
}