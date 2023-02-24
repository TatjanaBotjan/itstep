let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {
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

        li.addEventListener("click", function (){
            this.remove();
        })
    }
    )
};



