let field = document.querySelector("input");
field.addEventListener("keyup", function(){
    let text = this.value;
    let p = document.querySelector("p");
    p.innerHTML = text;
});

field.addEventListener("keypress", function(event){
    if(event.key == " "){
        event.preventDefault();
    }
});
