//===================================================================  
//=========================       calc      =========================
//===================================================================  

function calc() {
    const persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total');

    let personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('keypress', function (e) {
        // this.value += validKey(e);
        this.value = (this.value == '0') ? validKey(e) : this.value +validKey(e);
    });

    persons.addEventListener('keyup', function (e) {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (this.value == '' || restDays.value == '' || this.value == '0' || restDays.value == '0') {
            totalValue.innerHTML = 0;
        } else {
            animateCalc(+totalValue.innerHTML, total);
        }
    });


    restDays.addEventListener('keypress', function (e) {
        this.value = (this.value == '0') ? validKey(e) : this.value +validKey(e);
    });

    restDays.addEventListener('keyup', function (e) {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (persons.value == '' || this.value == '' || this.value == '0' || persons.value == '0') {
            totalValue.innerHTML = 0;
        } else {
            animateCalc(+totalValue.innerHTML, total);
        }
    });

    place.addEventListener('change', function (e) {
        if (persons.value == '' || restDays.value == '' || persons.value == '0' || restDays.value == '0') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });

    function validKey(e) {
        if (!(e.key == 'Backspace' || e.keyCode == 37 || e.keyCode == 39)) {
            e.preventDefault();
        }
        return (/[0-9]/.test(e.key)) ? e.key : '';
    }

    function animateCalc(from, to) {
        console.log(`from ${from} to ${to}`)
        let timer = setInterval(() => {
            if (from == to) {
                clearInterval(timer);
            } else if (from < to) {
                from += 100;
            } else {
                from -= 100;
            }
            totalValue.innerHTML = from;
        }, 1 / 100);
    }
}

module.exports = calc;