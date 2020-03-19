// we declare both these variables outside the for loop
const container = document.querySelector(".container");
// newHTML's value will change so we use let to declare it
let newHTML = "";

for (let i = 0; i < actionGames.length; i++) {
    // create a default value for the rating
    let ratingValue = "Not rated";

    // if the object contains a rating property
    // set the ratingValue variable equal to the rating property
    if (actionGames[i].rating) {
        ratingValue = actionGames[i].rating;
    }

    // each time the loop is executed, assign the details variable a template literal
    // this is a string with embedded variables
    const details = `<div class="card">
                        <div class="image" style="background-image: url(${actionGames[i].background_image});"></div>
                        <div class="details">
                            <h4 class="name">${actionGames[i].name}</h4>
                            <div class="rating">${ratingValue}</div>
                        </div>
                    </div>`;
    // add the value of details to the existing value of newHTML
    newHTML += details;
    console.log(details);
}

// set container's innerHTML property to be the HTML that was created in the loop
container.innerHTML = newHTML;

