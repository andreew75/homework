// let inputRub = document.querySelector("#rub");
// let inputUsd = document.querySelector("#usd");
// let inputEur = document.querySelector("#eur");
//
// inputRub.addEventListener("input", function () {
//     let request = new XMLHttpRequest();
//     request.open("GET", "current.json");
//     // request.setRequestHeader("Content-type", "application/json; charset=utf-8");
//     request.send();
//
//     request.onreadystatechange = function (){
//         if (request.readyState === 4 && request.status === 200) {
//             console.log(request.response);
//             let data = JSON.parse(request.response);
//             console.log(data);
//             inputUsd.value = (inputRub.value / data.current.usd).toFixed(2);
//             inputEur.value = (inputRub.value / data.current.eur).toFixed(2);
//         } else if (request.readyState === 4) {
//             inputEur.value = "Ошибка загрузки данных";
//             inputUsd.value = "Ошибка загрузки данных";
//         }
//     }
// })

let form = document.form1;
let modalWindow = document.getElementById('modalWindow');

function showModal() {
    modalWindow.classList.add("active");
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalWindow.classList.remove("active");
    document.body.style.overflow = 'auto';
}
modalWindow.addEventListener('click', function (event) {
    if (event.target === modalWindow) {
        closeModal();
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');

    let formData = new FormData(form);
    request.send(formData);

    request.addEventListener("load",  () => {
        if (request.status === 200) {
            console.log(request.response);
            showModal();
            window.modalTimeout = setTimeout(closeModal, 5000);
        } else {
            alert('Произошла ошибка при отправке.');
        }
        form.reset();
    })
})



