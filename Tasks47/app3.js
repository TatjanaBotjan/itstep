let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let one = document.querySelector(".one");
        let x = one.classList;

        let two = document.querySelector(".two");
        let y = two.classList;

        let three = document.querySelector(".three");
        let q = three.classList;

        let ol = document.querySelector("ol");
        ol.innerHTML = x, y, q;


    });
}