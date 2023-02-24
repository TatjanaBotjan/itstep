let fifthElement = document.querySelector("#fifth-element");
if (fifthElement){
// Задание 1
    let div1 = document.createElement("div");
    div1.innerHTML = "1";
    fifthElement.insertAdjacentElement("beforebegin", div1);
    let div2 = document.createElement("div");
    div2.innerHTML = "2";
    div1.insertAdjacentElement("afterend", div2);

    let div3 = document.createElement("div");
    div3.innerHTML = "3";
    fifthElement.insertAdjacentElement("afterend", div3);
    let div4 = document.createElement("div");
    div4.innerHTML = "4";
    div3.insertAdjacentElement("afterend", div4);

    // Задание 2

    



div1 = fifthElement.parentElement.firstElementChild;

let ol = document.createElement("ol");

div1.insertAdjacentElement("beforeend", ol)

let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

for (let i = 0; i < days.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = days[i];
    ol.insertAdjacentElement("beforeend", li)
}
div1.firstElementChild.firstElementChild.style.color = "#f00";
div1.firstElementChild.lastElementChild.style.color = "#f00";

    // Задание 3

let newDiv2 = fifthElement.previousElementSibling;
    
if (newDiv2) {
        div2.insertAdjacentHTML("beforeend", "<span>Спан 1</span>");
        div2.insertAdjacentHTML("beforeend", "<span>Спан 2</span>");
    } 

    let span1 = div2.firstElementChild;
    let span2 = div2.lastElementChild;

    let lengthSpan1 = span1.innerHTML.length;
    let lengthSpan2 = span2.innerHTML.length;
    span1.insertAdjacentHTML("beforeend", `(${lengthSpan1})`)
    span2.insertAdjacentHTML("beforeend", `(${lengthSpan2})`)

}

