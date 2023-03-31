
document.querySelector(".ul").onmouseover = function (event) {
    
    if (event.target.classList.contains("li")) {
        if (event.target % 2 == 0) {
            event.target.classList.add("red");
        } else {
            target.classList.add("blue");
        }

      
    }
}
