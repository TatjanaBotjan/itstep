let keyboard = document.querySelectorAll("keyboard");
let display = document.querySelector("p");


for (let k of key) {
    k.onclick = function () {
        display.textContent += k.textContent;
    }
}



