let form = document.getElementById("reg_form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    let errors = document.querySelectorAll(".error-text");

    if (errors.length) {
        Array.from(errors).forEach((errorSpan) => {
            errorSpan.parentElement.classList.remove("error");
            errorSpan.remove();
        })
    }

    let hasError = false;

    let nameInput = document.querySelector("#name");
    let regionInput = document.querySelector("#region");

    let fields = [nameInput, regionInput];

    fields.forEach((field) => {
        if (field.value == "") {
            let span = document.createElement("span");
            span.className = "error-text"; 
            span.innerText = "Заполните поле";
            field.insertAdjacentElement("afterend", span);
            field.parentElement.classList.add("error");
            hasError = true;
        }
    });

    let types = ["#city", "#urban-settlement", "#agro-city", "#station", "#departure", "#village", "#farm"];

    let checked = types.some((radioId) => {
        return document.querySelector(radioId).checked; 
    });

    if (!checked) {
        let span = document.createElement("span");
        span.className = "error-text"; 
        span.innerText = "Выберите тип";
        document.querySelector("#farm").parentElement.insertAdjacentElement("afterend", span);
        hasError = true;
    }

    if(!hasError){
        let name = document.querySelector("#name").value;
        let region = document.querySelector("#region").value;
                
        let tr = document.createElement("tr");

        let tdName = document.createElement("td");
        tdName.innerText = name;

        let tdRegion = document.createElement("td");
        tdRegion.innerText = region;

        let type = document.getElementsByName("type");
        let tdType = document.createElement("td");

        for (let element of type) {
            if (element.checked) {
                tdType.innerText = `${element.value}`;
            }
        }
    
        let tdAction = document.createElement("td");

        let editButton = document.createElement("button");
        editButton.innerText = "Редактировать";
        tdAction.insertAdjacentElement("beforeend", editButton);

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Удалить";
        tdAction.insertAdjacentElement("beforeend", deleteButton);

        tr.insertAdjacentElement("beforeend", tdName);
        tr.insertAdjacentElement("beforeend", tdRegion);
        tr.insertAdjacentElement("beforeend", tdType);
        tr.insertAdjacentElement("beforeend", tdAction);

        let tbody = document.querySelector("tbody");
        tbody.insertAdjacentElement("beforeend", tr);

        deleteButton.addEventListener("click", function () {
            this.parentElement.parentElement.remove();
        });

        editButton.addEventListener("click", function () {
            let name = this.parentElement.parentElement.firstElementChild.innerText;
            let region = this.closest("tr").children[1].innerText;

            document.querySelector("#name").value = name;
            document.querySelector("#region").value = region;
            let editTr = document.querySelector(".edit");
            if (editTr) {
                editTr.classList.remove("edit");
            }
            this.parentElement.parentElement.classList.add("edit");
        })
    }

   
        
});


 let buttonSave = document.querySelector(".btn_save");
    buttonSave.addEventListener("click", function () {
        let editTr = document.querySelector(".edit");
        if (editTr) {
            let name = document.querySelector("#name").value;
            let region = document.querySelector("#region").value;

            editTr.firstChild.innerText = name;
            editTr.children[1].innerText = region;

            editTr.classList.remove("edit");
        }
    });