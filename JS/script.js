let choose = document.querySelector("#btn")
choose.addEventListener("click", function () {
    let inputCheck = document.querySelector("input[type='radio']:checked");
    if (inputCheck) {
        alert(inputCheck.value);
    } else {
        alert("Пожалуйста, выберите загадку!");
    }
});


//let choose = document.querySelector("#btn")
//choose.addEventListener("click", function () {
//    let inputCheck = document.forms["form-choose"].radio;
//    for (let i = 0; i < inputCheck.length; i++) {
//        if (inputCheck[i].checked) {
//            alert(inputCheck[i].value);
//            return;
//        }
//    }
//    alert("Пожалуйста, выберите загадку!");
//});


