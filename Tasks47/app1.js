let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {
        let p = document.querySelector("p");
        p.innerHTML = +p.innerHTML + 1;
    });
}