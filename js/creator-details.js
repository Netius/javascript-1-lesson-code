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

    const image = document.querySelector(".creator-image");
    image.src = json.image;
    image.alt = json.name;

    const name = document.querySelector(".creator-name");
    name.innerHTML = json.name;

    const gameCount = document.querySelector(".game-count");
    gameCount.innerHTML = json.games_count;

    const description = document.querySelector(".creator-description");
    description.innerHTML = json.description;
}
