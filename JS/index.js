
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



