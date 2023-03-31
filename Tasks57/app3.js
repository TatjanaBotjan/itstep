let showButton = document.querySelector("button");
showButton.classList.add("show-button");

showButton.addEventListener("click", function (event) {
    event.preventDefault();
   
    if (showButton) {
        let text = document.querySelector(".text");
        text.classList.remove("text");
        showButton.classList.remove("show-button");
    }

    document.querySelector("button").innerText = "Скрыть";
    document.querySelector("button").classList.add("hide");


    let hideButton = document.querySelector("button"); // скрыть

hideButton.addEventListener("click", function (event){
    event.preventDefault();

    if (hideButton) {
        let text = document.querySelector("div");
        text.classList.add("text");
        hideButton.classList.add("show-button");
    }
   

    document.querySelector("button").innerText = "Показать";
    document.querySelector("button").classList.add("show-button");
    

});
})



/*if (text) {
    text.classList.remove("text");
}
text.classList.add("textBlock");

document.querySelector("button").innerText = "Скрыть";
document.querySelector("button").classList.add("hide");*/




