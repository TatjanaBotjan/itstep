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


let programBtn = document.querySelector(".program__row_block_consultation_btn");
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

//*индивидуальная консультация*//

let individualBtn = document.querySelector(".individual-consultation__row_services_individual_btn");
let  individualConsultation = document.querySelector(".vs");

individualBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (individualConsultation.classList.contains("vs")) {
        individualConsultation.classList.remove("vs");
    } else {
        individualConsultation.classList.add("invs");
    }
});

let vsBtn = document.querySelector(".form-individual_close_btn");

vsBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (individualConsultation.classList.contains("invs")) {
        individualConsultation.classList.remove("invs");
    } else {
        individualConsultation.classList.add("vs");
    }
});

//*сопровождение*//

let escortBtn = document.querySelector(".individual-consultation__row_services_personal_btn");
let escortConsultation = document.querySelector(".escort-vs");

escortBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (escortConsultation.classList.contains("escort-vs")) {
        escortConsultation.classList.remove("escort-vs");
    } else {
        escortConsultation.classList.add("escort-invs");
    }
});

let escortvsBtn = document.querySelector(".form-escort_close_btn");

escortvsBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (escortConsultation.classList.contains("escort-invs")) {
        escortConsultation.classList.remove("escort-invs");
    } else {
        escortConsultation.classList.add("escort-vs");
    }
});

//*задать вопрос*//

let questionBtn = document.querySelector(".header__row_connection");
let question = document.querySelector(".question-invis");

questionBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (question.classList.contains("question-invis")) {
        question.classList.remove("question-invis");
    } else {
        question.classList.add("question-vis");
    }
});

let closeQuestionBtn = document.querySelector(".question_close-btn");

closeQuestionBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (question.classList.contains("question-vis")) {
        question.classList.remove("question-vis");
    } else {
        question.classList.add("question-invis");
    }
});

//* моб задать вопрос*//

let questionBtnMob = document.querySelector(".mobile__row_connection");
let questionMob = document.querySelector(".question-invis");

questionBtnMob.addEventListener("click", function (event) {
    event.preventDefault();
    if (questionMob.classList.contains("question-invis")) {
        questionMob.classList.remove("question-invis");
    } else {
        questionMob.classList.add("question-vis");
    }
});

let closeQuestionBtnMob = document.querySelector(".question_close-btn");

closeQuestionBtnMob.addEventListener("click", function (event) {
    event.preventDefault();
    if (questionMob.classList.contains("question-vis")) {
        questionMob.classList.remove("question-vis");
    } else {
        questionMob.classList.add("question-invis");
    }
});

//*персональная*//

let personalBtn = document.querySelector(".personal__row_services_btn");
let personalConsultation = document.querySelector(".personal-vs");

personalBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (personalConsultation.classList.contains("personal-vs")) {
        personalConsultation.classList.remove("personal-vs");
    } else {
        personalConsultation.classList.add("personal-invs");
    }
});

let personalvsBtn = document.querySelector(".form-personal_close_btn");

personalvsBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (personalConsultation.classList.contains("personal-invs")) {
        personalConsultation.classList.remove("personal-invs");
    } else {
        personalConsultation.classList.add("personal-vs");
    }
});