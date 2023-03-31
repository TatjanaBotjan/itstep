document.querySelector(".box").onmouseover = function(event){
    if (event.target.classList.contains("box")) {
        event.target.classList.add("bg-change")
    }
}