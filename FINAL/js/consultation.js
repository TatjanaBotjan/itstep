let btn = document.querySelector(".services__row_btn");
let consultation = document.querySelector(".invis");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (consultation.classList.contains("invis")) {
        consultation.classList.remove("invis");
    } else {
        consultation.classList.add("vis");
    }
});

let closeBtn = document.querySelector(".consultation_close_btn");

closeBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (consultation.classList.contains("vis")) {
        consultation.classList.remove("vis");
    } else {
        consultation.classList.add("invis");
    }
});


let programBtn = document.querySelector(".program__row_consultation_btn");
let programConsultation = document.querySelector(".hide");

programBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (programConsultation.classList.contains("hide")) {
        programConsultation.classList.remove("hide");
    } else {
        programConsultation.classList.add("unhide");
    }
});

hideBtn = document.querySelector(".initial-consultation_close_btn");

hideBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (programConsultation.classList.contains("unhide")) {
        programConsultation.classList.remove("unhide");
    } else {
        programConsultation.classList.add("hide");
    }
});