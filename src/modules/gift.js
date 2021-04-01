const gift = () => {
    const fixedGift = document.querySelector('.fixed-gift>img');

    fixedGift.addEventListener('click', () => {
        const gift = document.querySelector('#gift');
        gift.style.display = 'block';
    });
};

export default gift;