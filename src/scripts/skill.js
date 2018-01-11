if (document.querySelectorAll('.my-benefits__progress_filled') !== null){
    window.onload = ()=>{
        const progress = document.querySelectorAll('.my-benefits__progress_filled');
        const emptyRight = document.querySelectorAll('.my-benefits__progress_empty-right');
        const emptyLeft = document.querySelectorAll('.my-benefits__progress_empty-left');

        const screenHeight = window.innerHeight;
        let skillLevel = 0;

        for (let i = 0; i < progress.length; i++){
            let skill = progress[i]; 
            
            
            skillLevel = skill.getAttribute('data-skill');
            skill.classList.add('my-benefits__progress_' + skillLevel);
            if (skillLevel > 50){
                console.log(emptyRight[i]);
                emptyRight[i].style.borderColor = '#00bfa5';

            };
        };
    };        
};