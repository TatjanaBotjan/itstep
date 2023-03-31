let ul = document.querySelector("ul");
ul.addEventListener("mouseover", function (event) {
    let li = event.target;
    if(li.tagName != "LI"){
        return false;
    }

    if(+li.innerText %2 == 0){
        li.classList.add("red");
    } else {
        li.classList.add("blue");
}
});

ul.addEventListener("mouseout", function (event) {
    let li = event.target;
    if (li.tagName != "LI") {
        return false;
    }

    if (+li.innerText % 2 == 0) {
        li.classList.remove("red");
    } else {li.classList.remove("blue")};
});
