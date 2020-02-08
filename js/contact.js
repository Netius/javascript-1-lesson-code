const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("The form was submitted");

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");

    const emailValue = email.value;

    if (checkInputLength(emailValue) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}

function checkInputLength(value) {
    // trim the value
    const trimmedValue = value.trim();

    // if the value's length is greater than 0 return true
    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}
