console.log("Task 1:");

// 1. Посчитать количество слов в строке

let a = 'Я учу Javascript!';
let b = a.split(" ");

function getAmountOfWords(b) {
    return b.length;
}

console.log(getAmountOfWords(b));


console.log("Task 2:");
// 2. Вывести последнее слово в предложении

a = 'я учу javascript!';
b = a.split(" ").slice(-1);

console.log(b);

console.log("Task 3:");
// 3. Дано слово.Вывести набор букв, из которых состоит это слово без повторений

let word = 'человечество';
a = word.split("");

let c = a.filter(function (item, i) {
    return a.indexOf(item) == i;
})

console.log(c);

console.log("Task 4:");
// 4. Даны 2 слова. Проверить, состоят ли они из одних и тех же букв

a = 'дом';
b = 'корм';

let x = a.split("");
let y = b.split("");

function checkWord(a, b) {
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] == b[j]) {
            return true;
        }  
        return false;
    } 
}
}

console.log(checkWord(a, b));


console.log("Task 5:");
// 5. Дано предложение. Проверить, есть ли в этом предложение заданное слово

let str = 'Следующий пример проверяет наличие в предложении заданного слова';

console.log(str.includes('слово')); 


console.log("Task 6:");
// 6. Удалить из предложения все знаки препинания(. , : ; ! ? -)

str = 'Что значит осень? Осень - самое красивое время года! Осенью много всего интересного. Можно гулять под дождём, играя с сухими, разноцветными листьями. Листья бывают разные: оранжевые, жёлтые, коричневые и красные.';

while (str.indexOf("?") != -1) {
    str = str.replace("?", "");
}
while (str.indexOf("-") != -1) {
    str = str.replace("-", "");
}
while (str.indexOf("!") != -1) {
    str = str.replace("!", "");
}
while (str.indexOf(".") != -1) {
    str = str.replace(".", "");
}
while (str.indexOf(",") != -1) {
    str = str.replace(",", "");
}
while (str.indexOf(":") != -1) {
    str = str.replace(":", "");
}


console.log(str); 


