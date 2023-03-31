let button = document.querySelector("button");
if (button){
    button.addEventListener("click", function(){
        let time1 = document.querySelector("#time1");
        let a = time1.value;

        a = a.split(".").map((item) => parseInt(item));

        let time2 = document.querySelector("#time2");
        let b = time2.value;
    })
};