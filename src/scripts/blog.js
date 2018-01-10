if(document.querySelectorAll('.article-names__item') !== null){

    const artItem = document.querySelectorAll('.article-names__item');
    const paperItem = document.querySelectorAll('.papers__item');

    for (let i = 0; i<artItem.length; i++) {
        artItem[i].addEventListener('click', (e)=>{
            e.preventDefault();

            for (let x = 0; x<artItem.length; x++) {
                artItem[x].classList.remove('article-names__item_active');
                paperItem[x].classList.add('visually-hidden');
            };

            e.currentTarget.classList.add('article-names__item_active');
            let attrOfActive = e.currentTarget.getAttribute('data-title');

            for (let y = 0; y<artItem.length; y++) {
                let attrOfPaper = paperItem[y].getAttribute('data-title');
                if(attrOfPaper === attrOfActive){
                    paperItem[y].classList.remove('visually-hidden');
                };
            };
        });
    };

};