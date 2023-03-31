let select = document.querySelector("select");
select.addEventListener("change", function(){

    let color = this.value;

    let block = document.querySelector(".block");
    block.style.backgroundColor = color;
})