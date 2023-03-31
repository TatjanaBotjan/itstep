
let input = document.querySelector("input");

input.addEventListener("focus", function(){
    input.classList.add("cl-blue");
})

input.addEventListener("blur", function () {
    input.classList.remove("cl-blue");
})

