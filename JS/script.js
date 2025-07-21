
mouths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
for (let i = 0; i < mouths.length; i++) {
        document.writeln(`<div class='block'>${mouths[i]}</div>`);
}

let div = document.querySelectorAll('.block');

let divColor = () => {
    for (let i = 0; i < div.length; i++) {
        div[i].style.background = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    }
}
divColor();
