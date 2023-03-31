let addButton = document.querySelector(".add");
addButton.addEventListener("click", function (event){
    let td = document.querySelectorAll("td");
    let circle = document.createElement("div");
    circle.classList.add("circle");
       

    td.forEach(item => {
        item.insertAdjacentElement("beforeend", circle);
        console.log(item)
    })

})

let turnButton = document.querySelector(".turn");
turnButton.addEventListener("click", function(event){
    let table = document.querySelector("table");
    table.classList.add("toTurn");
})
