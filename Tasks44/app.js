// let firstElement = document.getElementById("first-element");
let firstElement = document.querySelector("#first-element")

if (firstElement) {
    firstElement.classList.add("www"); // добавить
    firstElement.classList.remove("www");// удалить
    firstElement.classList.contains("www"); // Проверьте наличие у него класса www.
    firstElement.classList.toggle("www"); // Добавьте ему класс www, если его нет и удалите - если есть
    console.log(firstElement.classList); //Выведите последовательно через console.log его классы.
    console.log(firstElement.classList.length); // Узнайте количество его классов
    firstElement.style.color = "#F00"; // красный
    firstElement.style.fontSize = "30px";
    firstElement.style.border = "1px solid #000";
    console.log(firstElement.tagName.toLowerCase()); // название его тега в нижнем регистре
    let spanAdd = document.createElement("span"); // добавление span
    spanAdd.innerHTML = "мой любимый спан";
    console.log(spanAdd)
}

