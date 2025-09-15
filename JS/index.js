document.querySelector("#load").addEventListener("click", loadUsers);

async function loadUsers() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        let response = await fetch(url);
        let js = await response.json();
        let ul = document.querySelector("#list");
        let html = js.map(function (item) {
            if (item.completed === true) {
                return `<li>Пользователь ${item.userId} выполнил задачу № ${item.id} (${item.title})</li>`;
            }
        })
        ul.insertAdjacentHTML("afterbegin", html.join(" "));
    } catch (error) {
        alert("Ошибка загрузки данных");
    }
}
