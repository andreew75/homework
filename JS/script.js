let removeButtons = document.querySelectorAll('.remove-button');

for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', function() {
        let pane = removeButtons[i].parentNode;
        pane.remove();
    });
}



