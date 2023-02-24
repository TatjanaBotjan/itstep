let addButton = document.querySelector(".btn_add");
if (addButton) {
    addButton.addEventListener("click", function () {
        let div = document.querySelector("div");   
        let ul = document.querySelector("ul");  
        if (!ul) {
            ul = document.createElement("ul");
            div.insertAdjacentElement("afterbegin", ul);
        }
            let input = document.querySelector("input");
            let x = input.value;
            let li = document.createElement("li");          
            li.innerHTML = x;
            ul.insertAdjacentElement("beforeend", li);

            let buttonEdit = document.createElement("button");
            buttonEdit.innerText = "Изменить";
            li.insertAdjacentElement("beforeend", buttonEdit);

            let buttonDelete = document.createElement("button");
            buttonDelete.innerText = "Удалить";
            li.insertAdjacentElement("beforeend", buttonDelete);

            buttonDelete.addEventListener("click", function () {
                let ul = this.parentElement.parentElement;
                this.parentElement.remove();

                if(ul.children.length == 0){
                    ul.remove();
                }
            });    
            
            buttonEdit.addEventListener("click", function(){
                input.value = this.parentElement.firstChild.nodeValue;
            });
    }
    
)};