
const blur = document.getElementById('works-last-section__blur');
const text = document.getElementById('works-last-section__form');

function positionSearch() { 
    let topIndent = text.offsetTop;
    let leftIndent = text.offsetLeft;
    let height = text.offsetHeight;
    let width = text.offsetWidth;
    blur.style.clip = `rect(${topIndent}px, ${leftIndent + width}px, ${topIndent + height}px, ${leftIndent}px)`;
};

if (text != null) {
    positionSearch()
    window.addEventListener('resize', ()=>positionSearch() );
};
