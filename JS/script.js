class Icons {
    constructor(img, h3) {
        this.img = img;
        this.h3 = h3;
    }

    getIcons(id) {
        document.querySelector(`#${id}`).innerHTML = `
            <img src="${this.img}" alt="${this.h3}">
            <h3>${this.h3}</h3>
        `;
    }

}
let img = "https://img.icons8.com/?size=100&id=P5EZaerMsATR&format=png&color=000000";
let icons = new Icons(img, "Яблоки");
icons.getIcons ("icon");

let img2 = "https://img.icons8.com/?size=100&id=Qgy7Ez6mw2ld&format=png&color=000000";
let icons2 = new Icons(img2, "Авакадо");
icons2.getIcons ("icon2");

let img3 = "https://img.icons8.com/?size=100&id=a1RyRkDIEI9B&format=png&color=000000";
let icons3 = new Icons(img3, "Бананы");
icons3.getIcons ("icon3");

let img4 = "https://img.icons8.com/?size=100&id=qsamHkjVPQf3&format=png&color=000000";
let icons4 = new Icons(img4, "Арбузы");
icons4.getIcons ("icon4");

let img5 = "https://img.icons8.com/?size=100&id=WsAEBc9VDLm3&format=png&color=000000";
let icons5 = new Icons(img5, "Виноград");
icons5.getIcons ("icon5");

let img6 = "https://img.icons8.com/?size=100&id=hfNCM7e9VGca&format=png&color=000000";
let icons6 = new Icons(img6, "Апельсины");
icons6.getIcons ("icon6");

let img7 = "https://img.icons8.com/?size=100&id=N3YhTjHIENLE&format=png&color=000000";
let icons7 = new Icons(img7, "Вишня");
icons7.getIcons ("icon7");

let img8 = "https://img.icons8.com/?size=100&id=l9UL0ZbtIcil&format=png&color=000000";
let icons8 = new Icons(img8, "Лимоны");
icons8.getIcons ("icon8");

let img9 = "https://img.icons8.com/?size=100&id=f6GFzqAstgSQ&format=png&color=000000";
let icons9 = new Icons(img9, "Киви");
icons9.getIcons ("icon9");