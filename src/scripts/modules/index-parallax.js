const indexParallaxLayers = document.querySelectorAll('.index-parallax__img');

const moveLayers = e =>{
    const initialX = (window.innerWidth / 2) - e.pageX;
    const initialY = (window.innerHeight / 2) - e.pageY;
    let k = 1;
    for(let i=indexParallaxLayers.length-1; i>=0; i--){
        // k = i*5; 
        if(i===6){k=10}
        else if(i===5){k=20}
        else if(i===4){k=30}
        else if(i===3){k=40}
        else if(i===2){k=50}
        else if(i===1){k=60}
        else {k=100};
        let finalX = initialX / k;
        let finalY = initialY / k / 5;
        indexParallaxLayers[i].style.transform = `translate(${finalX}px, ${finalY}px)`;
    };
}

if (indexParallaxLayers !== null){
    window.addEventListener('mousemove', moveLayers);
};