const gift = () => {
    const fixedGift = document.querySelector('.fixed-gift>img');

    if (window.location.pathname == '/index.html' || window.location.pathname == '/' ||
        window.location.pathname == '/#') {
        fixedGift.addEventListener('click', () => {
            const gift = document.querySelector('#gift');
            gift.style.display = 'block';
        });
    }
};

export default gift;