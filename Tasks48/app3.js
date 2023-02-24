let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let input1 = document.querySelector("#number1");
        let x = input1.value;

        let input2 = document.querySelector("#number2");
        let y = input2.value;

        let div = document.querySelector("div");
        
            if (x > y) {
                div.innerText = x;
            }  else {
                div.innerText = y;
            }

    });
}