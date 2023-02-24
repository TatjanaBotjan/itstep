let secondElement = document.querySelector("#second-element");

if (secondElement) {
    let spanAdd = document.createElement("span");
    spanAdd.innerHTML = "!!!";
    secondElement.insertAdjacentElement("beforebegin", spanAdd); // Вставьте перед ним span с текстом
    secondElement.insertAdjacentElement("afterbegin", spanAdd); // Вставьте после него span с текстом
    secondElement.insertAdjacentElement("beforeend", spanAdd); // Вставьте ему в начало span с текстом
    secondElement.insertAdjacentElement("afterend", spanAdd); // Вставьте ему в конец span с текстом
}

