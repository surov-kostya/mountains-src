const blur = document.getElementById('works-last-section__blur');
const text = document.getElementById('works-last-section__form');

function positionSearch() {    
    let leftIndent = text.offsetLeft;
    let topIndent = text.offsetTop;
    let height = text.offsetHeight;
    let width = text.offsetWidth;
    blur.style.clip = `rect(${topIndent}px, ${leftIndent + width}px, ${topIndent + height}px, ${leftIndent}px)`;
};

positionSearch()
window.addEventListener('resize', ()=>positionSearch() );

