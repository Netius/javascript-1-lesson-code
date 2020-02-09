const creatorsUrl = "https://api.rawg.io/api/creators?page=2";

fetch(creatorsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        handleJson(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function handleJson(json) {
    const results = json.results;
    console.dir(results);

    const resultsContainer = document.querySelector(".row.results");

    let html = "";

    results.forEach(function(result) {
        let imageUrl = "https://via.placeholder.com/250";

        if (result.image) {
            imageUrl = result.image;
        } else if (result.image_background) {
            imageUrl = result.image_background;
        }

        html += `<div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="card">
                        <div class="image creator" style="background-image: url('${imageUrl}');"></div>
                        <div class="details">
                            <h4 class="name">${result.name}</h4>
                            <p>Game count: ${result.games_count}</p>
                            <a class="btn details" href="creator-detail.html?id=${result.id}">Details</a>
                        </div>
                    </div>
                </div>`;
    });

    resultsContainer.innerHTML = html;
}
