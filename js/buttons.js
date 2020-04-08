const buttons = document.querySelectorAll(".btn.btn-secondary");

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", loadGames);
	buttons[i].addEventListener("click", handleActiveClass);
}

function handleActiveClass(event) {
	for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
        console.log(buttons[i]);
	}

	event.target.classList.add("active");
	console.log(event.target);
}
