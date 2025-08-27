function processMessage() {
    let textArea = document.querySelector("#guest-book").value;
    let userName = document.querySelector("#your-name").value;

    const patternEmail = /([0-9a-z_.-]+@[0-9a-z_^\.]+\.[a-z]{2,3})/ig;
    let formatText= textArea.replace(patternEmail, "<span style='color:red'>$1</span>");

    let message = document.querySelector("#message");
    message.innerHTML = `
        <fieldset>
            <legend>Сообщение от пользователя <b>${userName}</b></legend>
            <p><b>Текст сообщения:</b><br>${formatText}</p>
        </fieldset>
    `;
};
