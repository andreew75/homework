function swapImages() {
    const firstImgNum = parseInt(document.getElementById("choose_1").value);
    const secondImgNum = parseInt(document.getElementById("choose_2").value);

    if (firstImgNum < 1 || firstImgNum > 3 || secondImgNum < 1 || secondImgNum > 3) {
        alert("Введите числа от 1 до 3!");
        return;
    }

    if (firstImgNum === secondImgNum) {
        alert("Выбраны одинаковые изображения!");
        return;
    }

    const firstImg = document.getElementById(`image${firstImgNum}`);
    const secondImg = document.getElementById(`image${secondImgNum}`);

    let tempSrc = firstImg.src;
    firstImg.src = secondImg.src;
    secondImg.src = tempSrc;

    firstImg.style.transform = "scale(0.98)";
    secondImg.style.transform = "scale(0.98)";
    setTimeout(() => {
        firstImg.style.transform = "scale(1)";
        secondImg.style.transform = "scale(1)";
    }, 150);
}