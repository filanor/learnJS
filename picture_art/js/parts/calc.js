function calc() {
    //зададим цены
    const price = {
            'size' : [ 1000, 1500, 2000, 2500],
            'material': [1, 1.5, 2],
            'options': [1000, 2000, 1000],
            'promo': {
                'value': 'IWANTPOPART',
                'discount': 0.3
            }        
        },
        error = 'Для расчета нужно выбрать размер картины и материал картины',
        options = document.getElementById('options'),
        size = document.getElementById('size'),
        material = document.getElementById('material'),
        promo = document.querySelector('.promocode'),
        calcPrice = document.querySelector('.calc-price'),
        calcSelect = document.querySelectorAll('.calc select');

    for (let i = 0; i < calcSelect.length; i++ ) {
        calcSelect[i].addEventListener('change', e => showRez());
    }

    promo.addEventListener('change', e => showRez());

    function showRez(){
        //функция определяет ввыедены ли необходимые данные
        // и выводит результат
        if (size.selectedIndex != 0 && material.selectedIndex != 0){
            calcPrice.innerHTML = calculate();
        }
        else {
            calcPrice.innerHTML = error;
        }
    }

    function calculate() {
        //математика
        let discount = (promo.value == price['promo']['value']) ? +price['promo']['discount'] : 0,
            extra = (options.selectedIndex != 0) ? price['options'][options.selectedIndex-1] : 0,
            index = price['material'][material.selectedIndex -1],
            main = price['size'][size.selectedIndex-1];
    
        return (main * index + extra) * (1- discount);
    }

    
}
module.exports = calc;