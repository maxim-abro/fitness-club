const burger = () => {
    const burgerBtn = document.querySelector('.menu-button>img'),
        popupMenu = document.querySelector('.popup-menu');
    burgerBtn.addEventListener('click', (e) => {
        popupMenu.setAttribute('style', 'display:block;');
    });
    popupMenu.addEventListener('click', (e) => {
        let target = e.target;
        if (target == target.closest('.scroll>a') ||
            target == target.closest('.close-menu-btn>img')) {
            popupMenu.removeAttribute('style')
        }
    })
};

export default burger;