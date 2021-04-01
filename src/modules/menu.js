const menu = () => {
    const topMenu = document.querySelector('.top-menu');

    topMenu.addEventListener('click', (e) => {
        let target = e.target;
        if (target == target.closest('.scroll>a')) {
            e.preventDefault();
            const blockId = target.hash;
            document.querySelector(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    });
};

export default menu;