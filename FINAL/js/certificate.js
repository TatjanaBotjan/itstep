let button = document.querySelector(".about__row_btn");
let certificate = document.querySelector(".invisible");

button.addEventListener("click", function (event) {
    event.preventDefault();
    if (certificate.classList.contains("invisible")) {
        certificate.classList.remove("invisible");
    } else {
        certificate.classList.add("visible");
    }
});

let btnClose = document.querySelector(".about_btn_close");

btnClose.addEventListener("click", function (event) {
    event.preventDefault();
    if (certificate.classList.contains("visible")) {
        certificate.classList.remove("visible");
    } else {
        certificate.classList.add("invisible");
    }
});


