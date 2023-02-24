let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let input1 = document.querySelector("#number1");
        let x = input1.value;

        let input2 = document.querySelector("#number2");
        let y = input2.value;

        let sum = document.querySelector("div");
        sum.innerHTML = (+x) + (+y);

        sum.insertAdjacentElement("beforeend", sum);

        let div2 = document.querySelector("div");
        div2.innerHTML = x - y;

        div2.insertAdjacentElement("beforeend", div2);


    });
}