const calc = () => {
    const cardOreder = document.querySelector('#card_order'),
        mounth = cardOreder.querySelectorAll('.time>input'),
        club = cardOreder.querySelectorAll('.club>input'),
        priceTotal = cardOreder.querySelector('#price-total'),
        promoInput = cardOreder.querySelector('#promo-input');

    let clubValue = '',
        mounthValue = '',
        price = 0;

    let prices = {
        0: {
            0: 2999,
            1: 14990,
            2: 21990,
            3: 24990,
        },
        1: {
            0: 1999,
            1: 9900,
            2: 13900,
            3: 19900,
        }
    };

    const sum = () => {
        club.forEach((item, i) => {
            if (item.checked == true) {
                clubValue = prices[i];
                mounth.forEach((item2, i2) => {
                    if (item2.checked == true) {
                        price = clubValue[i2];
                        console.log(price);
                    }
                });
            }
        });
    };

    cardOreder.addEventListener('change', (e) => {
        let target = e.target;
        if (target == target.closest('input')) {
            sum();
            if (promoInput.value == 'тело2019') {
                price = Math.ceil(price * 0.8);
            }
            priceTotal.textContent = price;
        }
    });

}

export default calc;