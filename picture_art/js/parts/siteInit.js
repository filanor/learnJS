function siteInit() {
    const burger = document.querySelector('.burger'), 
          menu = document.querySelector('.burger-menu');

    let windowWidth = document.body.clientWidth;

    burger.addEventListener('click', (e) => {
        if (windowWidth <= 768) {
            menu.style.display = 'block';
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