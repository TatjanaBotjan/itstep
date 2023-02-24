let third = document.querySelector("#third");

if (third) {
    // Найдите первого потомка этого элемента и сделайте его текст красного цвета
    let firstElementChild = third.firstElementChild.innerHTML; 
    console.log(firstElementChild);
    firstElementChild.style.color = "#FF0000";
    console.log(firstElementChild);

    // Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
    let lastElementChild = third.lastElementChild.innerHTML; 
    console.log(lastElementChild);
    lastElementChild.style.color = "#FF0000";
    console.log(lastElementChild);

    
}
//  Найдите всех потомков этого элемента и добавьте им в конец текст '!'
for (let child of document.third.children) {
    console.log(child); 
}