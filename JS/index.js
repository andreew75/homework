let start = document.querySelector('#start');
let game = document.querySelector('#game');
let time = document.querySelector('#time');
let timeHeader = document.querySelector('#time-header');
let resultHeader = document.querySelector('#result-header');
let result = document.querySelector('#result');
let gameTime = document.querySelector('#game-time');
let isGameOver = false;
let score = 0;

start.addEventListener('click', startGame);
game.addEventListener('click', handBoxClick);
gameTime.addEventListener("input", setGameTime);

function startGame() {
    score = 0;
    setGameTime();
    gameTime.setAttribute("disabled", "true");
    timeHeader.classList.remove('hide');
    resultHeader.classList.add('hide');
    isGameOver = true;
    start.classList.add('hide');
    game.style.background = '#FFF';

    let interval = setInterval(() => {
        let t = time.innerText;
        if (t <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            time.innerText = (t - 0.1).toFixed(1);
        }
    }, 100)

    renderBox();
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 254); // исключаем белый цвет
    let g = Math.floor(Math.random() * 254);
    let b = Math.floor(Math.random() * 254);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function setGameTime(){
    let tm = +gameTime.value;
    time.textContent = tm.toFixed(1);
    timeHeader.classList.remove('hide');
    resultHeader.classList.add('hide');
}

function endGame() {
    isGameOver = false;
    game.innerHTML = '';
    result.textContent = score;
    gameTime.removeAttribute("disabled");
    start.classList.remove('hide');
    game.style.background = '#9be8fb';
    timeHeader.classList.add('hide');
    resultHeader.classList.remove('hide');

}

function renderBox() {
    game.innerHTML = '';
    let box = document.createElement('div');
    let boxSize = getRandom(30, 80);
    let gameSize = game.getBoundingClientRect();
    let maxTop = gameSize.height - boxSize;
    let maxLeft = gameSize.width - boxSize;
    box.style.width = box.style.height = boxSize + 'px';
    box.style.background = getRandomColor();
    box.style.position = 'absolute';
    box.style.top = getRandom(0, maxTop) + 'px';
    box.style.left = getRandom(0, maxLeft) + 'px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', 'true');

    game.insertAdjacentElement('afterbegin', box);
}

function handBoxClick(event) {
    if(!isGameOver) {
        return;
    }
    if(event.target.dataset.box){
        score++;
        renderBox();
    }
}
