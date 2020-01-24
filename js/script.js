// select all the buttons by their classes
const buttons = document.querySelectorAll(".btn.btn-secondary");

// loop through each button and add an event listener
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", loadGames);
}

// add an argument called event to the func
function loadGames(event) {

    // assign the value of the button id to buttonId
    const buttonId = event.target.id;

    // declare a variable that will hold a different value depending on the button clicked
    let arrayToLoopThrough = [];

    if(buttonId === "action") {
        // if the button with the id of "action" is clicked, assign actionGames to arrayToLoopThrough
        arrayToLoopThrough = actionGames;
    }
    else if (buttonId === "shooter") {
        // if the button with the id of "shooter" is clicked, assign shooterGames to arrayToLoopThrough
        arrayToLoopThrough = shooterGames;
    }
    else if (buttonId === "rpg") {
        // if the button with the id of "rpg" is clicked, assign rpgGames to arrayToLoopThrough
        arrayToLoopThrough = rpgGames;
    }

    const container = document.querySelector(".container.results");
    let newHTML = "";

    for (let i = 0; i < arrayToLoopThrough.length; i++) {

        let ratingValue = "Not rated";

        if (arrayToLoopThrough[i].rating) {
            ratingValue = arrayToLoopThrough[i].rating;
        }

        const genres = arrayToLoopThrough[i].genres;
        const genresHTML = makeGenres(genres);

        const platforms = arrayToLoopThrough[i].platforms;
        const platformsHTML = makePlatforms(platforms);

        const details = `<div class="card">
                            <div class="image" style="background-image: url(${arrayToLoopThrough[i].background_image});"></div>
                            <div class="details">
                                <h4 class="name">${arrayToLoopThrough[i].name}</h4>
                                <div class="rating">${ratingValue}</div>
                                ${genresHTML}
                                <div class="platforms">${platformsHTML}</div>
                            </div>
                        </div>`;

        newHTML += details;
    }

    container.innerHTML = newHTML;
}

function makeGenres(genreArray) {

    let genreHTML = "";

    for (let i = 0; i < genreArray.length; i++) {
        genreHTML += `<a class="genre">${genreArray[i].name}</a>`;
    }

    return genreHTML;
}

function makePlatforms(platformsArray) {

    let platformsHTML = "";

    for (let i = 0; i < platformsArray.length; i++) {
        platformsHTML += `<span>${platformsArray[i].platform.name}</span>`;
    }

    return platformsHTML;
}
