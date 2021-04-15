const validate = () => {
    document.addEventListener('input', (e) => {
        let target = e.target;
        if (target.matches('#phone') || target.matches('#callback_form1-phone') ||
            target.matches('#callback_form2-phone')) {
            target.value = target.value.replace(/[^\d\+]/gi, '');
        } else if (target.matches('#name')) {
            target.value = target.value.replace(/[^А-ЯЁ]/gi, '');
        }
    });
};

export default validate;