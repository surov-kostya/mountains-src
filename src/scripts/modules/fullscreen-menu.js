const fsMenu = document.querySelector('.fullscreen-menu');
const hrBtn = document.querySelector('.hamburger__input');

if (hrBtn !== null) {
    hrBtn.addEventListener('click', (e)=>{
        fsMenu.classList.toggle("visually-hidden");
        console.log('NNN');
    });
};
