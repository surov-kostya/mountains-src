if (document.querySelector('.message__btn') !== null) {
  const msgBtn = document.querySelector('.message__btn');
  msgBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    window.history.go(-1);
  });
}
