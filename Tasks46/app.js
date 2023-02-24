let body = document.body;

let article = document.createElement("article");
document.body.insertAdjacentElement("afterbegin", article);
article.classList.add("news__item");

let a = document.createElement("a");
a.href = "/news/we-offer-a-new-fertilizer-potassium-salt-60-nod";
a.innerHTML = article.innerHTML;
article.innerHTML = "";
article.insertAdjacentElement("afterbegin", a);

let div1 = document.createElement("div");
div1.classList.add("news__img");
a.insertAdjacentElement("afterbegin", div1);

let img = document.createElement("img");
img.src = "/upload/iblock/950/9509c6f8dc75758c59e66de60cffa317.webp";
img.alt = "We offer a new fertilizer – potassium salt 60% NOD";
div1.insertAdjacentElement("afterbegin", img);

let time = document.createElement("time");
time.innerHTML = "06.01.2023";
div1.insertAdjacentElement("beforeend", time);

let div2 = document.createElement("div");
div2.classList.add("news__desciption");
a.insertAdjacentElement("beforeend", div2);

let div3 = document.createElement("div");
div3.classList.add("news__title");
div2.insertAdjacentElement("beforeend", div3);

let h4 = document.createElement("h4"); 
h4.innerHTML = "We offer a new fertilizer – potassium salt 60% NOD";
div3.insertAdjacentElement("beforeend", h4);

let div4 = document.createElement("div");
div4.classList.add("news__text");
div2.insertAdjacentElement("beforeend", div4);

let p = document.createElement("p");
p.innerHTML = "We are pleased to inform you that we have decided to expand our product range and add another noteworthy and effective product, potassium salt 60% NOD.";
div4.insertAdjacentElement("beforeend", p);

let div5 = document.createElement("div");
div5.classList.add("news__more");
div2.insertAdjacentElement("beforeend", div5);

let span = document.createElement("span");
span.innerHTML = "more";
div5.insertAdjacentElement("beforeend", span);


let removalSpan = document.querySelectorAll("span");
if (removalSpan.length) {
    Array.from(removalSpan).forEach((item) => {
        item.outerHTML = item.innerHTML;
        });
}

let backgroundTime = document.querySelectorAll("time");
if (backgroundTime.length) {
    Array.from(backgroundTime).forEach((item) => {
        item.style.backgroundColor = "#f00";
        item.style.color = "#fff";
        item.style.padding = "25px";
    });
}

let newH4 = document.querySelector("h4");
if (newH4) {
        let style = getComputedStyle(newH4);
        let fontSize = parseInt(style.fontSize, 10);
        newH4.style.fontSize = `${fontSize + 2}px`;
}

let newHref = document.querySelector("a");
let href;
if (newHref) {
    href = a.href;
    newHref.outerHTML = newHref.innerHTML;
}

let newsMore = document.querySelector(".news__more");
if (newsMore) {
    newsMore.innerHTML = `<a>${newsMore.innerHTML}</a>`;
    newsMore.firstElementChild.href = href;
} 

let newTagB = document.querySelectorAll("p");
    if (newTagB.length) {
        Array.from(newTagB).forEach((item) => {
            item.outerHTML = `<b>${item.innerHTML}</b>`;
        });
    }

let title = newH4.innerHTML;
newTagB.firstElementChild.title = title;


let newTagH4 = document.querySelector("h4");
if (newTagH4) {
    newTagH4.style.fontWeight = "500px";
    newTagH4.style.lineHeight = "150%";
    newTagH4.style.textTransform = "uppercase";
    newTagH4.style.color = "#000";
}