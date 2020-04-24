var genres = "action";

const baseUrl = "https://api.rawg.io/api/";
const gamesUrl = `${baseUrl}games?genres=`;
const genreUrl = gamesUrl + genres;

const queryString = document.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.dir(params);




if (params.has("genres")) {
    genres = params.get("genres");
}






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