let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let div = document.querySelector("div");

        let ul = div.querySelector("ul");

        if (!ul) {
            ul = document.createElement("ul");
            div.insertAdjacentElement("afterbegin", ul);
        }

        if (div.children.length == 0) {
            
            let ul = document.createElement("ul");
            Array.from(div).forEach((item) => {
                let li = document.createElement("li");
                
                li.innerText = item;
                ul.insertAdjacentElement("beforeend", li);
                
            });
            div.insertAdjacentElement("afterbegin", ul);
        }
        });
    }

