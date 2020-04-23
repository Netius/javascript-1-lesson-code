const baseUrl = "https://api.rawg.io/api/";
const gamesUrl = `${baseUrl}games?genres=`;
let genres = "action";
const genreUrl = gamesUrl + genres;

fetch(genreUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        loadGames(json);
    })
    .catch(function(error) {
        console.dir(error);
    });