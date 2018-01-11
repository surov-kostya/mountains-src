if (document.querySelector('.blog-section__left') !== null){

    const sidebar = document.querySelector('.blog-section__left');
    let startPoint = 0;
    let endPoint = 0;
    let distance = 0;

    document.addEventListener('touchstart', e=>{
        startPoint = e.targetTouches[0].pageX;
    });

    document.addEventListener('touchend', e=>{
        endPoint = e.changedTouches[0].pageX;
        showSidebar();
    });

    document.addEventListener('click', e=>{
        showSidebar();
    });

    function showSidebar () {
        distance = endPoint - startPoint;
        if (distance > 200){
            sidebar.classList.add('blog-section__left_active');
        } else {
            sidebar.classList.remove('blog-section__left_active');
        };
    };

};
