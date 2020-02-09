const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "creators.html";
}

const creatorsUrl = `https://api.rawg.io/api/creators/`;
const detailUrl = `${creatorsUrl}${id}`;

fetch(detailUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createCreator(json);
    })
    .catch(function() {
        document.location.href = "error.html";
    });

function createCreator(json) {
    console.dir(json);

    // get the loader div
    const loader = document.querySelector(".loader");
    // hide the loader
    loader.style.display = "none";

    // get detail container div
    const detailContainer = document.querySelector(".creator-detail-container");
    // remove the hidden class
    detailContainer.classList.remove("hidden");

    const image = document.querySelector(".creator-image");
    image.alt = json.name;

    // set the img.src property depending on what properties are available in the JSON
    if (json.image) {
        image.src = json.image;
    } else if (json.image_background) {
        image.src = json.image_background;
    } else {
        image.src = "https://via.placeholder.com/250";
    }

    const name = document.querySelector(".creator-name");
    name.innerHTML = json.name;

    const gameCount = document.querySelector(".game-count");
    gameCount.innerHTML = json.games_count;

    const description = document.querySelector(".creator-description");
    description.innerHTML = json.description;
}
