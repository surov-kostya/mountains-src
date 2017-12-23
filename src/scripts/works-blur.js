
function positionSearch() {
    let text = document.querySelector('.works-last-section__form');
    let leftIndent = text.offsetLeft;
    let topIndent = text.offsetTop;
    let height = text.offsetHeight;
    let width = text.offsetWidth;
    let blur = document.querySelector('.works-last-section__blur');

    blur.style.clip = `rect(${topIndent}px, ${leftIndent + width}px, ${topIndent + height}px, ${leftIndent}px)`;
};

positionSearch()
window.addEventListener('resize', ()=>positionSearch() );

