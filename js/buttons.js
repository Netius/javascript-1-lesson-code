const buttons = document.querySelectorAll(".btn.btn-secondary");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", loadGames);
    buttons[i].addEventListener("click", handleActiveClass);
}

function handleActiveClass(event) {

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    event.target.classList.add("active");
}