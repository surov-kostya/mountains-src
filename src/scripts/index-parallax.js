const indexParallaxLayers = document.querySelectorAll('.index-parallax__img');

const moveLayers = e =>{
    const initialX = (window.innerWidth / 2) - e.pageX;
    const initialY = (window.innerHeight / 2) - e.pageY;
    let k = 1;
    for(let i=0; i<indexParallaxLayers.length; i++){
        if(i <= 2) {
            k = i + 20;
        } else if (i <= 4) {
            k = i * 5;
        } else if (i <=5 ){
            k = i * 4;
        } else {k = i};
        
        let finalX = initialX / k;
        let finalY = initialY / k / 1.8;
        indexParallaxLayers[i].style.transform = `translate(${finalX}px, ${finalY}px)`;
    };
}

if (indexParallaxLayers !== null){
    window.addEventListener('mousemove', moveLayers);
};