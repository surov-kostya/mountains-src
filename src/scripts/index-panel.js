const authBtn = document.querySelector('.index-section__auth-btn');
const indexBtn = document.querySelector('.index-panel__btn_index');
const indexCenter = document.querySelector('.index-section__center');


if (authBtn !== null){
    authBtn.addEventListener('click', ()=>{
        authBtn.classList.add('visually-hidden');
        indexCenter.classList.add('flipper');
    });

    indexBtn.addEventListener('click', ()=>{
        authBtn.classList.remove('visually-hidden');
        indexCenter.classList.remove('flipper');
    });
};