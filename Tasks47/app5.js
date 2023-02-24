let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let input1 = document.querySelector("#number1");
        let x = input1.value; 
        
        let p = document.querySelector("p");
        p.innerHTML = Number.isInteger(+x);
    
}
    )};