const firstParallaxLayers = document.querySelectorAll('.first-parallax__img');

const moveLayers = e =>{
    
    const initialY = (window.pageYOffset);
    let k = 1;

    for(let i=0; i<firstParallaxLayers.length; i++){

        if(i <= 2) {
            k = i + 20;
        } else if (i <= 4) {
            k = i * 4;
        } else if (i <=5 ){
            k = i * 3;
        } else {k = i*2};
        
        let finalY = initialY * 4 / k;
        firstParallaxLayers[i].style.transform = `translateY(${finalY}px)`;
    };
};

if (firstParallaxLayers !== null){
    window.addEventListener('scroll', moveLayers);
};