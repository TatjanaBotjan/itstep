let addButton = document.querySelector(".btn_add");

    addButton.addEventListener("click", function () {
        let table = document.querySelector("table");
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(""));

        let td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(""));

        let td3 = document.createElement("td");
        td3.appendChild(document.createTextNode(""));

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);

        let inputValue1 = document.querySelector("#number1").value;
        td1.innerText = inputValue1;

        let inputValue2 = document.querySelector("#number2").value;
        td2.innerText = inputValue2;

        let editButton = document.createElement("button");
        editButton.innerText = "Редактировать";
        td3.insertAdjacentElement("beforeend", editButton);

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Удалить";
        td3.insertAdjacentElement("beforeend", deleteButton);     

        deleteButton.addEventListener("click", function () {
            let tr = this.parentElement.parentElement;
            this.parentElement.parentElement.remove(); 

            if (tr.children.length == 0) {
                tr.remove();
            }

        })

        editButton.addEventListener("click", function () {
            let text1 = this.parentElement.parentElement.firstElementChild.innerText;
            document.querySelector("#number1").value = text1;

            let text2 = this.parentElement.parentElement.children[1].innerText;
            document.querySelector("#number2").value = text2;

            let editTr = document.querySelector(".edit");
            if(editTr){
                editTr.classList.remove("edit");
            }
            this.parentElement.parentElement.classList.add("edit");
        });
    })

let saveButton = document.querySelector(".btn_save");
saveButton.addEventListener("click", function(){

    editTr = document.querySelector(".edit");
    if (editTr) {
        let inputValue1 = document.querySelector("#number1").value;
        let inputValue2 = document.querySelector("#number2").value;

        editTr.firstChild.innerText = inputValue1;
        editTr.children[1].innerText = inputValue2;
        
        editTr.classList.remove("edit");
    }
})

