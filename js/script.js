function loadGames(json) {
    const games = json.results;

    const container = document.querySelector(".results");
    let newHTML = "";

    for (let i = 0; i < games.length; i++) {
        let ratingValue = "Not rated";

        if (games[i].rating) {
            ratingValue = games[i].rating;
        }

        const genres = games[i].genres;
        const genresHTML = makeGenres(genres);

        const platforms = games[i].platforms;
        const platformsHTML = makePlatforms(platforms);

        const details = `<div class="col-sm-6 col-md-4 col-lg-3">                
                            <div class="card">
                                <div class="image" style="background-image: url(${games[i].background_image});"></div>
                                <div class="details">
                                    <h4 class="name">${games[i].name}</h4>
                                    <div class="rating">${ratingValue}</div>
                                    ${genresHTML}
                                    <div class="platforms">${platformsHTML}</div>
                                    <a class="btn details" href="details.html?id=${games[i].id}">Details</a>
                                </div>
                            </div>
                        </div>`;

        newHTML += details;
    }

    container.innerHTML = newHTML;
}