const rocketsUrl = "https://api.rawg.io/api/games/4003/screenshots";

fetch(rocketsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {

        rocketScreenshots(json);
    })
    .catch(function(error) {
        console.dir(error);
    });




function rocketScreenshots(json) {

    const screenshots = json.results;

    let newHtml = ""

    for (let i = 0; i < screenshots.length; i++) {
        let isActive = "";
        if (i === 0) {
            isActive = "active";
        }

        newHtml += `<div class="carousel-item ${isActive}">
        <img class="d-block w-100" src="${screenshots[i].image}">
        </div>`


    }

    const carouselInner = document.querySelector(".carousel-inner");
    carouselInner.innerHTML = newHtml;
}