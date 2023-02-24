// first-element

let firstElement = document.querySelector("#first-element");
if (firstElement) {
    if (firstElement.previousElementSibling){
        firstElement.previousElementSibling.innerHTML = "Я хороший сосед";
    }
    if (firstElement.previousElementSibling) {
        firstElement.previousElementSibling.previousElementSibling.innerHTML = "Я хороший сосед";
    }
    if (firstElement.nextElementSibling) {
        firstElement.nextElementSibling.innerHTML = "Я хороший сосед";
    }
    if (firstElement.nextElementSibling) {
        firstElement.nextElementSibling.nextElementSibling.innerHTML = "Я хороший сосед";
    }

    if (firstElement.previousElementSibling) {
        firstElement.previousElementSibling.insertAdjacentText("beforeend", "№2");
    }
    if (firstElement.previousElementSibling) {
        firstElement.previousElementSibling.previousElementSibling.insertAdjacentText("beforeend", "№1");
    }
    if (firstElement.nextElementSibling) {
        firstElement.nextElementSibling.insertAdjacentText("beforeend", "№3");
    }
    if (firstElement.nextElementSibling) {
        firstElement.nextElementSibling.nextElementSibling.insertAdjacentText("beforeend", "№4");
    }


    if (i = 0, i < firstElement.length, i++){
        
    }
}

let neighbor = document.querySelector(".neighbor");
if (neighbor){
    let newNeighbor = document.createElement("div");
}

// secondElement

let secondElement = document.querySelector("#second-element");

if (secondElement) {

    let list = ["Пункт 1", "Пункт 2", "Пункт 3", "Пункт 4", "Пункт 5", "Пункт 6", "Пункт 7", "Пункт 8", "Пункт 9", "Пункт 10"];
    let out = "<ul>";
    list.forEach(function (item) {
        out += `<li>${item}</li>`;
    });
    out += "</ul>";

    secondElement.insertAdjacentHTML("beforeend", out);

    let points = secondElement.querySelectorAll("ul > li");
    Array.from(secondElement).forEach((item, index) => {
        if (index % 4 == 0) {
            item.style.color = "#f00";
        }
    })

    Array.from(secondElement).forEach((item, index) => {
        if (index % 2 != 0) {
            item.classList.add("odd-element");
        }
    })

    Array.from(secondElement).forEach((item, index) => {
        if (index % 3 !== 0 && item.classList == "odd-element") {

        }
    })
}

// #third-element
let thirdElement = document.querySelector("#third-element");


Array.from(col).forEach(function (element) {
    element.innerHTML = `<strong>${element.innerText}</strong>`;
});

Array.from(col).forEach(function (element) {
    element.innerHTML = `<span>${element.innerHTML}</span>`;
});




