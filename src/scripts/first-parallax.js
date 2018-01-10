const firstParallaxLayers = document.querySelectorAll('.first-parallax__img');

const moveLayers = e =>{
    
    const initialY = (window.pageYOffset);
    let k = 1;

    for(let i=0; i<firstParallaxLayers.length; i++){

        k = i*2;
        
        let finalY = initialY * 4 / k;
        firstParallaxLayers[i].style.transform = `translateY(${finalY}px)`;
    };
};

if (firstParallaxLayers !== null){
    window.addEventListener('scroll', moveLayers);
};