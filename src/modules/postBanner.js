const postBanner = () => {
    const form = document.querySelector('#banner-form'),
        inputs = form.querySelectorAll('input');
    console.log(inputs);

    const statusMessage = document.createElement('div');

    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    statusMessage.style.cssText = 'font-size: 2rem';

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.appendChild(statusMessage);
        if (inputs[1].value.length < 2) {
            statusMessage.textContent = 'Имя должно содержать минимум 2 символа';
            setTimeout(() => {
                statusMessage.textContent = '';
            }, 3000);
        } else if (inputs[2].value.length > 12 || inputs[2].value.length < 8) {
            statusMessage.textContent = 'Введите корректный телефон';
            setTimeout(() => {
                statusMessage.textContent = '';
            }, 3000)
        } else {
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);
            let body = {};

            for (let val of formData.entries()) {
                body[val[0]] = val[1];
            }
            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    const modal = document.querySelector('#thanks');
                    modal.style.display = 'block';
                    setInterval(() => {
                        statusMessage.textContent = '';
                    }, 3000)
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                    setInterval(() => {
                        statusMessage.textContent = '';
                    }, 3000)
                })
            inputs.forEach((item) => {
                item.value = '';
            });
        };
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }

};


export default postBanner;