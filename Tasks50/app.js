let form = document.getElementById("reg_form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let div = document.querySelector(".result");

    let name = document.querySelector("#name");
    div.innerHTML = div.innerHTML + `Имя: ${name.value}<br>`;

    let nameError;
    if(name.value == ""){
        if (name.nextElementSibling) {
            name.nextElementSibling.remove();
        }

        nameError = document.createElement("span");
        nameError.innerText = "Enter your name";
        name.insertAdjacentElement("afterend", nameError);

    } else if(name.nextElementSibling){
        name.nextElementSibling.remove();
    }

    let email = document.querySelector("#email");
    div.innerHTML += `Эл.почта: ${email.value}<br>`;

    let emailError;
    if (email.value == "") {
        if (email.nextElementSibling) {
            email.nextElementSibling.remove();
        }

        emailError = document.createElement("span");
        emailError.innerText = "Enter your email";
        email.insertAdjacentElement("afterend", emailError);

    } else if (email.nextElementSibling) {
        email.nextElementSibling.remove();
    }


    let phone = document.querySelector("#phone");
    div.innerHTML = div.innerHTML + `Телефон: ${phone.value}<br>`;

    if (phone.value == "") {
        if (phone.nextElementSibling) {
            phone.nextElementSibling.remove();
        }

        phoneError = document.createElement("span");
        phoneError.innerText = "Enter your phone";
        phone.insertAdjacentElement("afterend", phoneError);

    } else if (phone.nextElementSibling) {
        phone.nextElementSibling.remove();
    }


    let education = document.querySelector("#education");
    div.innerHTML = div.innerHTML + `Образование: ${education.value}<br>`;

    if (education.value == "") {
        if (education.nextElementSibling) {
            education.nextElementSibling.remove();
        }

        educationError = document.createElement("span");
        educationError.innerText = "Enter your education";
        education.insertAdjacentElement("afterend", educationError);

    } else if (education.nextElementSibling) {
        education.nextElementSibling.remove();
    }

    /*let sexs = ["sex-m", "sex-f"];

    let checked = sexs.some((radioId) => {
        return document.querySelector("#" + radioId).checked; 
    })

    if (!checked) {
        let span = document.createElement("span");
        span.className = "error-text";
        span.innerText = "Выберите пол";
        document.querySelector("#sex-f").parentElement.insertAdjacentElement("afterend", span);
       
    } 

    let hobbies = ["hobby-1", "hobby-2", "hobby-3"];

    checked = hobbies.some((checkboxId) => {
        return document.querySelector("#" + checkboxId).checked; 
    });

    if(!checked){
        let span = document.createElement("span");
        span.className = "erroe-text";
        span.innerText = "Выберите хобби";
        document.querySelector("#hobby-3").parentElement.insertAdjacentElement("afterend", span);
        hasError = true;
    }

    /*let inputSexM = document.querySelector("#sex-m");
    if (inputSexM.checked){
        div.innerHTML += `Пол: ${inputSexM.value}<br>`
    }

    let inputSexF = document.querySelector("#sex-f");
    if (inputSexF.checked) {
        div.innerHTML += `Пол: ${inputSexF.value}<br>`
    }*/
    

    let about = document.querySelector("#about");
    div.innerHTML = div.innerHTML + `О себе: ${about.value}<br>`

    if (about.value == "") {
        if (about.nextElementSibling) {
            about.nextElementSibling.remove();
        }

        aboutError = document.createElement("span");
        aboutError.innerText = "Enter your about";
        about.insertAdjacentElement("afterend", aboutError);

    } else if (about.nextElementSibling) {
        about.nextElementSibling.remove();
    }

    let file = document.querySelector("#file");
    div.innerHTML = div.innerHTML + `Файл: ${file.value}<br>`;

    if (file.value == "") {
        if (file.nextElementSibling) {
            file.nextElementSibling.remove();
        }

        fileError = document.createElement("span");
        fileError.innerText = "Выберите файл";
        file.insertAdjacentElement("afterend", fileError);

    } else if (file.nextElementSibling) {
        file.nextElementSibling.remove();
    }

    /*let inputHobby1 = document.querySelector("#hobby-1");

    if (inputHobby1.checked) {
        div.innerHTML += `Хобби: ${inputHobby1.value}<br>`;
    };

    let inputHobby2 = document.querySelector("#hobby-2");

    if (inputHobby2.checked) {
        div.innerHTML += `Хобби: ${inputHobby2.value}<br>`;
    };

    let inputHobby3 = document.querySelector("#hobby-3");

    if (inputHobby3.checked) {
        div.innerHTML += `Хобби: ${inputHobby3.value}<br>`;
    };*/
        
    /*let hobbys = []; 
        let hobby1 = document.querySelector("#hobby-1");
        if (hobby1.checked) {
            hobbys.push(hobby1.value); 
        }

        let hobby2 = document.querySelector("#hobby-2");
        if (hobby2.checked) {
            hobbys.push(hobby2.value);
        }
        
        let hobby3 = document.querySelector("#hobby-3");
        if (hobby3.checked) {
            hobbys.push(hobby3.value);
        }
        
        div.innerHTML += `Хобби: ${hobbys.join(",")}<br>`;*/
});







