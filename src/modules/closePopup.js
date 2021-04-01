const closePopup = () => {
    const body = document.querySelector('body');

    body.addEventListener('click', (e) => {
        let target = e.target;

        if (target == target.closest('.overlay')) {
            target.parentNode.removeAttribute('style');
        } else if (target == target.closest('.close_icon')) {
            target.parentNode.parentNode.parentNode.removeAttribute('style');
        } else if (target == target.closest('.close-btn')) {
            target.parentNode.parentNode.parentNode.removeAttribute('style');
        }
    });
}

export default closePopup;