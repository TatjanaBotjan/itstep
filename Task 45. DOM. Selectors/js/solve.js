//let neighbors = document.querySelectorAll(".first-section .neighbor");

let firstElement = document.querySelector("#first-element");
let neighbors = firstElement.parentElement.querySelectorAll(".neighbor");
if(neighbors.length){ // количество элементов, проверить наличие через длину
    //Array.from(neighbors)  единоразовое преобразование, оно не меняет сам список на массив
    // let arrayNeighbors = Array.from(neighbors);
    Array.from(neighbors).forEach(function(element){
        element.innerHTML = "Я хороший сосед";
    });

    Array.from(neighbors).forEach(function(element, index){
        element.innerHTML = `Я хороший сосед №${index+1}`;
    });

    Array.from(neighbors).forEach(function(element){
        element.innerHTML = `<span>${element.innerHTML}</span>`;
    });

    Array.from(neighbors).forEach(function(element){
        element.innerHTML = `<b>${element.innerText}</b>`;
    });
}
let lastNeighbor = firstElement.parentElement.querySelector(".fourth-neighbor");
if(lastNeighbor){
    if(lastNeighbor.firstElementChild){
        lastNeighbor.firstElementChild.innerHTML = "Я последний хороший сосед";
    }
}

let secondElement = document.querySelector("#second-element"); // находим эл-т secondElement
if (secondElement) { // проверяем наличие secondElement
    /*let out = "<ul>";
    for(let i = 1; i <= 10; i++){
        out += `<li>Пункт ${i}</li>`;
    }
    out += "</ul>";
    secondElement.insertAdjacentHTML("afterbegin", out);*/

    let ul = document.createElement("ul"); // создаем маркированный список
    secondElement.insertAdjacentElement("afterbegin", ul); // добавляем список после secondElement
    for(let i = 1; i <= 10; i++){ // условие для создания 10 пунктов
        let li = document.createElement("li"); // создаем строку с li 
        li.innerHTML = `Пункт ${i}`; // в li добавляем текст Пункт №
        ul.insertAdjacentElement("beforeend", li); // доб. в ul эл-ты списка с li с конца 
    }

    let evenElements = ul.querySelectorAll("li:nth-child(2n)"); // ищем четные эл-ты // ul.querySelectorAll("li:nth-child(even)");
    if(evenElements.length){ // проверяем наличие четных эл-тов через длину
        Array.from(evenElements).forEach(function(item){ // создаем массив и красим четные в красный
            item.style.color = "#f00";
        });
    }

    let oddElements = ul.querySelectorAll("li:nth-child(2n+1)"); // ищем нечетные эл-ты 
    if (oddElements.length) {  // проверяем наличие нечетных эл-тов через длину
        Array.from(oddElements).forEach((item) => { // создаем массив, метод forEach проверяет эл-ты и после нечетных добавляем "odd-element"
            item.classList.add("odd-element");
        })
    }

    let elements = ul.querySelectorAll("li:nth-child(3n)"); // создаем переменную elements и записываем каждый 3й эл-т 
    if (elements.length) { // проверяем наличие эл-тов через длину, т.к. исп-ся querySelectorAll, если бы было querySelector, длина не нужна 
        Array.from(elements).forEach((item) => { // создаем массив
            if (item.classList.contains("odd-element")) { // contains проверяет наличие odd-element у эл-та
                let styles = getComputedStyle(item); // возвращает объект, содержащий значения всех CSS-свойств элемента, полученных после применения всех активных таблиц стилей,
                let fontSize = parseInt(styles.fontSize, 10); // parseInt выводит числовое значение
                item.style.fontSize = `${fontSize*2}px`; // каждому 3му нечетному эл-ту увеличиваем размер в 2р
            }
        })
    }
}
let thirdElement = document.querySelector("#third-element");
if(thirdElement){
    let bs = thirdElement.querySelectorAll("b"); // создаем переменную bs и ищем эл-ты с тегом b
    if (bs.length) { // проверяем наличие этих эл-тов через длину, т.к. querySelectorAll
        Array.from(bs).forEach((item) => {
            item.outerHTML = `<strong>${item.innerHTML}</strong>`; // Свойство outerHTML позволяет получить и изменить текст элемента вместе с его тегом. Создаем эл-т с тегом strong
        });
    }

    let strongs = thirdElement.querySelectorAll("strong"); // находим все эл-ты со strong
    if(strongs.length){
        Array.from(strongs).forEach((item) => {
            item.innerHTML = item.innerText; // innerHTML перезаписывает новое содержимое: item.innerText - текст без тегов
        });

        Array.from(strongs).forEach((item) => { 
            let words = item.innerText.split(" "); // разделяем массив на слова через пробел
        
            let newInnerHTML = words.map((word) => { // создаем новое содержимое, с помощью map слова меняем - обворачиваем в span
                return `<span>${word}</span>`
            }).join(" "); // join() объединяет все элементы массива

            item.innerHTML = newInnerHTML; // в item.innerHTML записываем новый текст со словами в span
        });
    }
}
let fourthElement = document.querySelector("#fourth-element"); // ищем #fourth-element по id
if (fourthElement) { // проверяем наличие #fourth-element
    if(fourthElement.parentElement){ // проверяем наличие эл-та у родителя
        let divs = fourthElement.parentElement.querySelectorAll("div"); // создаем переменную divs, проверям у родителя наличие эл-тов с тегом div
        if(divs.length){ // проверям наличие этих эл-тов через длину
            Array.from(divs).forEach((div) => {
                console.log(div.innerHTML); // выводим  текст из всех тегов div вместе с тегами
            });

            let reverseDivs = []; // создаем массив reverseDivs
            Array.from(divs).forEach((item) => {
                reverseDivs.unshift(item.innerHTML); // добавляем эл-ты перед эл-лтами, чтобы получился обратный порядок
            });

            Array.from(divs).forEach((div, index) => {
                div.innerHTML = reverseDivs[index]; // перезаписываем текст в обратном порядке, div остаются на месте
            })

            divs[1].remove(); // удаляем третьего соседа, в массиве он с индексом 1, т.к. перевернули текст
            
            // аналог
            //fourthElement.parentElement.firstElementChild.nextElementSibling.remove();
            let fifthNeighbor = document.createElement("div"); // создаем новый div
            fifthNeighbor.classList.add("neighbor"); // добавляем класс neighbor
            fifthNeighbor.classList.add("fifth-neighbor"); // добавляем класс fifth-neighbor
            fifthNeighbor.innerHTML = "Я пятый сосед";  // добавляем текст Я пятый сосед
            divs[0].insertAdjacentElement("afterend", fifthNeighbor); // divs[0] = fourthElement.parentElement.firstElementChild
            fifthNeighbor.style.border = "1px solid #000"; // добавляем границу
            fifthNeighbor.style.padding = "10px"; // отступы
            fifthNeighbor.style.backgroundColor = "#ff0"; // цвет фона
        }
    }
}