let form = document.getElementById("reg_form"); // находим форму по ID

form.addEventListener("submit", function (event) {
    event.preventDefault(); // отменяет стандартные действия браузера

    // <span class="error-text">Заполните поле</span>

    let errors = document.querySelectorAll(".error-text"); // находим, есть ли ошибки

    if (errors.length) {
        Array.from(errors).forEach((errorSpan) => { // создаем массив ошибок и проверяем массив с ошибками
            errorSpan.parentElement.classList.remove("error"); // у родительского эл-та удаляем класс error
            errorSpan.remove(); // удаляем errorSpan (если были ошибки раньше, убираем)
        })
    }

    let hasError = false; // has возвращает логическое значение, показывающее, существует ли элемент с указанным значением в объекте

    let nameInput = document.querySelector("#name"); // находим поля по ID
    let emailInput = document.querySelector("#email");
    let phoneInput = document.querySelector("#phone");
    let aboutInput = document.querySelector("#about");
    let educationInput = document.querySelector("#education");
    let fileInput = document.querySelector("#file");

    let fields = [nameInput, emailInput, phoneInput, aboutInput, educationInput, fileInput]; // массив из найденных полей

    fields.forEach((field) => {
        if (field.value == "") { // если поле не заполнено
            let span = document.createElement("span");  // создаем спан
            span.className = "error-text"; // span.classList.add("error-text"); добавляем класс "error-text"
            span.innerText = "Заполните поле"; // span с текстом внутри "Заполните поле"
            field.insertAdjacentElement("afterend", span);  // пустому полю добавляем спан с ошибкой, если пустое
            field.parentElement.classList.add("error"); // родительскому эл-ту доб. класс error
            hasError = true; // проверяем наличие ошибки
        }
    });

    let sexs = ["sex-m", "sex-f"]; // массив из радио кнопок по ID

    let checked = sexs.some((radioId) => { // some - проверяет, удовлетворяет ли эл-т массива условию
        return document.querySelector("#" + radioId).checked; //document.querySelector("#"+radioId) - input
    }) // находит по ID и возвращает выбранный эл-т

    if (!checked) { // если не выбран
        let span = document.createElement("span"); // создаем спан
        span.className = "error-text"; // span.classList.add("error-text"); доб. класс 
        span.innerText = "Выберите пол"; // спан с текстом "Выберите пол"
        document.querySelector("#sex-f").parentElement.insertAdjacentElement("afterend", span);
        hasError = true;
    }

    let hobbies = ["hobby-1", "hobby-2", "hobby-3"];

    checked = hobbies.some((checkboxId) => {
        return document.querySelector("#" + checkboxId).checked; //document.querySelector("#"+checkbox) - input
    })

    if (!checked) {
        let span = document.createElement("span");
        span.className = "error-text"; // span.classList.add("error-text");
        span.innerText = "Выберите хобби";
        document.querySelector("#hobby-3").parentElement.insertAdjacentElement("afterend", span);
        hasError = true;
    }

    
    if (!hasError) { // если нет ошибок
        let div = document.querySelector(".result"); // находим div с классом result

        div.innerHTML += `Имя: ${nameInput.value}<br>`; // в div записываем значения полей
        div.innerHTML += `Email: ${emailInput.value}<br>`;
        div.innerHTML += `Телефон: ${phoneInput.value}<br>`;
        div.innerHTML += `Образование: ${educationInput.value}<br>`;
        if (document.querySelector("#sex-m").checked) { // если выбран этот эл-т, записываем в див
            div.innerHTML += `Пол: ${document.querySelector("#sex-m").value}<br>`;
        } else if (document.querySelector("#sex-f").checked) {
            div.innerHTML += `Пол: ${document.querySelector("#sex-f").value}<br>`;
        }

        let hobbyValue = []; // пустой массив с хобби

        hobbies.forEach((hobby) => {
            if (document.querySelector("#" + hobby).checked) {
                hobbyValue.push(document.querySelector("#" + hobby).value);
            }
        })

        div.innerHTML += `Хобби: ${hobbyValue.join(",")}<br>`;
        div.innerHTML += `О себе: ${aboutInput.value}<br>`;
        div.innerHTML += `Файл: ${file.value}<br>`;


        let path = fileInput.value;
        let pathArray = path.split("\\");
        file = pathArray[pathArray.length-1];
        div.innerHTML += `Файл: ${file}<br>`;      

        this.reset(); // очищение формы this==form
    }
})