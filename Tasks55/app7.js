document.querySelector("td").onmouseover = function (event) {
    if (event.target.classList.contains("td")) {
        event.target.classList.add("bg-change")
    }
}