const genreLinks = document.querySelectorAll(".genres a");

function loadPage(event) {
    console.log(event.target.dataset.genre);
}