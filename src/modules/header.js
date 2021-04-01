const header = () => {
    const clubList = document.querySelector('.clubs-list>ul'),
        headerMain = document.querySelector('.head');



    headerMain.addEventListener('click', (e) => {
        let target = e.target;
        if (target == target.closest('.clubs-list>p')) {
            if (!clubList.hasAttribute('style')) {
                clubList.setAttribute('style', 'display:block');
            } else {
                clubList.removeAttribute('style');
            }
        } else if (target == target.closest('.open-popup')) {
            e.preventDefault();
            const freeVisitForm = document.querySelector('#free_visit_form');
            freeVisitForm.style.display = 'block';
        } else if (target == target.closest('.callback-btn')) {
            const callBackForm = document.querySelector('#callback_form');
            callBackForm.style.display = 'block';
        }
    });


};


export default header;