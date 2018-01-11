if (document.querySelectorAll('.my-benefits__progress_filled') !== null){
    
    const progress = document.querySelectorAll('.my-benefits__progress_filled');
    const emptyRight = document.querySelectorAll('.my-benefits__progress_empty-right');
    const emptyLeft = document.querySelectorAll('.my-benefits__progress_empty-left');

    const screenHeight = window.innerHeight;
    let skillLevel = 0;

    function fillLte50(i){
        progress[i].classList.add('my-benefits__progress_' + skillLevel);
    };

    function fillGt50(i){
        progress[i].classList.add('my-benefits__progress_50');

        setTimeout(()=>{
            emptyRight[i].style.borderRightColor = '#00bfa5';
            emptyRight[i].style.borderBottomColor = '#00bfa5';
            emptyRight[i].style.zIndex = '4';
            progress[i].classList.remove('my-benefits__progress_50');
            emptyLeft[i].classList.add('my-benefits__progress_' + (skillLevel - 50));
        },5000);
        
    };
    
    window.addEventListener('load', ()=>{        

        for (let i = 0; i < progress.length; i++){
            skillLevel = progress[i].getAttribute('data-skill');
            if (skillLevel <=50){
                fillLte50(i);
            } else if (skillLevel > 50){
                fillGt50(i);
            };
        };
    });
};