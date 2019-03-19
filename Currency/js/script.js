let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    let promise = new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        request.addEventListener('load', function () {
            console.log(request.readyState);
            if (request.readyState === 4 && request.status == 200) {
                resolve(JSON.parse(request.response));
            } else {
                reject("Что-то пошло не так!");
            }
        });
    });

    promise.then(data => {
        inputUsd.value = inputRub.value / data.usd;
    }, error => {
        inputUsd.value = error;
    })


})