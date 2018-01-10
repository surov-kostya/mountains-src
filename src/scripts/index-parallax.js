const indexParallaxLayers = document.querySelectorAll('.index-parallax__img');

const moveLayers = e =>{
    const initialX = (window.innerWidth / 2) - e.pageX;
    const initialY = (window.innerHeight / 2) - e.pageY;
    let k = 1;
    for(let i=0; i<indexParallaxLayers.length; i++){
        k = i*5;        
        let finalX = initialX / k;
        let finalY = initialY / k / 5;
        indexParallaxLayers[i].style.transform = `translate(${finalX}px, ${finalY}px)`;
    };
}

if (indexParallaxLayers !== null){
    window.addEventListener('mousemove', moveLayers);
};