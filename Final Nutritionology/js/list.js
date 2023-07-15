let listBtn = document.querySelector(".individual-consultation__row_price_a");
let list = document.querySelector(".hidden");

listBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (list.classList.contains("hidden")) {
        list.classList.remove("hidden");
    } else {
        list.classList.add("unhidden");
    }
});

hiddenBtn = document.querySelector(".analyzes_close_btn");

hiddenBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (list.classList.contains("unhidden")) {
        list.classList.remove("unhidden");
    } else {
        list.classList.add("hidden");
    }
});