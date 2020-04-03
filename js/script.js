function loadGames() {
    const container = document.querySelector(".container.results");
    let newHTML = "";

    for (let i = 0; i < actionGames.length; i++) {

        let ratingValue = "Not rated";

        if (actionGames[i].rating) {
            ratingValue = actionGames[i].rating;
        }

        const genres = actionGames[i].genres;
        const genresHTML = makeGenres(genres);

        const platforms = actionGames[i].platforms;
        const platformsHTML = makePlatforms(platforms);

        const details = `<div class="card">
                            <div class="image" style="background-image: url(${actionGames[i].background_image});"></div>
                            <div class="details">
                                <h4 class="name">${actionGames[i].name}</h4>
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

function callAfterClick() {
    console.log("What happened?");
}

const callBetterClick = function() {
    console.log("What a fk?");
}

const button = document.querySelector(".btn.btn-primary");




const inputText = document.querySelector(".text-input");

var counter = 0;

function keyReleased(event) {
    counter++;
    console.log("Key Release", counter);
    console.log("name: ", event.target.name);
    console.log("value: ", event.target.value);
}
inputText.addEventListener("keyup", keyReleased);





button.addEventListener("click", callAfterClick);
button.addEventListener("click", callBetterClick);