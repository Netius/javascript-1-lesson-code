const queryString = document.location.search;
console.dir(queryString);
const params = new URLSearchParams(queryString);

let id;


if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "/";
};


const baseUrl = "https://api.rawg.io/api/";
const gamesUrl = `${baseUrl}games/`;
const detailsUrl = `${gamesUrl}${id}`;

fetch(detailsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createDetails(json);
    })
    .catch(function(error) {
        console.dir(error);
    });

function createDetails(details) {
    console.dir(details);
}