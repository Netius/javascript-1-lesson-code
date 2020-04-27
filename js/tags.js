function makeGenres(genreArray) {
    let genreHTML = "";

    genreArray.forEach(function(genre) {
        let activeClass = "";

        if (typeof genres !== "undefined" && genres === genre.slug) {
            activeClass = "active";
        }
        genreHTML += `<a class="genre ${activeClass}" href="index.html?genres=${genre.slug}">${genre.name}</a>`;
    });

    return genreHTML;
}

function makePlatforms(platformsArray) {
    let platformsHTML = "";

    for (let i = 0; i < platformsArray.length; i++) {
        platformsHTML += `<span>${platformsArray[i].platform.name}</span>`;
    }

    return platformsHTML;
}