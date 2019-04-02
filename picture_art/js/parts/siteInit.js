function siteInit() {
    const burger = document.querySelector('.burger'), 
          menu = document.querySelector('.burger-menu');

    let windowWidth = document.body.clientWidth;

    burger.addEventListener('click', e => {
        if(menu.style.display == 'block'){
            menu.style.display = 'none';
        } else if(windowWidth <= 768){
            menu.style.display = 'block';
        } 
    });
    
    document.addEventListener('mouseup', e => {
        if(e.target != menu && e.target != burger){
            menu.style.display = 'none';
        }
    });

    window.addEventListener('resize', e => {
        windowWidth = document.body.clientWidth;
        if (windowWidth > 768){
            menu.style.display = 'none';
        }
    })
    
}

module.exports = siteInit;