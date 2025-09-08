let inputRub = document.querySelector("#rub");
let inputUsd = document.querySelector("#usd");
let inputEur = document.querySelector("#eur");

inputRub.addEventListener("input", function () {
    let request = new XMLHttpRequest();
    request.open("GET", "current.json");
    // request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send();

    request.onreadystatechange = function (){
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            let data = JSON.parse(request.response);
            console.log(data);
            inputUsd.value = (inputRub.value / data.current.usd).toFixed(2);
            inputEur.value = (inputRub.value / data.current.eur).toFixed(2);
        } else if (request.readyState === 4) {
            inputEur.value = "Ошибка загрузки данных";
            inputUsd.value = "Ошибка загрузки данных";
        }
    }
})
