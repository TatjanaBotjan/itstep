console.log("Task 1:");
// 1. Дана строка 'js'.Сделайте из нее строку 'JS'

let a = 'js';
let b = a.toUpperCase();

console.log(b);

console.log("Task 2:");
// 2. Дана строка 'JS'.Сделайте из нее строку 'js'

a = 'JS';
b = a.toLowerCase();

console.log(b);


console.log("Task 3:");
//3. Дана строка 'я учу javascript!'.Найдите количество символов в этой строке
a = 'я учу javascript!';

console.log(a.length);


console.log("Task 4:");
//4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice)
a = 'я учу javascript!';

let str1 = a.substr(2, 3);
let str2 = a.substr(6, 10);

console.log(str1, str2);

str1 = a.substring(2, 5);
str2 = a.substring(6, 16);

console.log(str1, str2);


str1 = a.slice(2,5);
str2 = a.slice(6, 16);

console.log(str1, str2);

console.log("Task 5:");
// 5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'

let str = 'Я учу учу Javascript';
console.log(str.indexOf('учу'));


console.log("Task 7:");
// 7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!'

str = 'Я-учу-javascript!';

while (str.indexOf("-") != -1) {
    str = str.replace("-", "!");
}
console.log(str);

console.log("Task 8:");
// 8. Дана строка 'я учу javascript!'.С помощью метода split запишите каждое слово этой строки в отдельный элемент массива
str = 'Я учу учу Javascript!';

b = str.split(" ");

console.log(b);

console.log("Task 9:");
//9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива

str = 'Я учу учу Javascript!';

b = str.split("");

console.log(b);

console.log("Task 10:");
// 10. В переменной date лежит дата в формате '2025-12-31'.Преобразуйте эту дату в формат '31.12.2025'

let date = '2025-12-31';

date = date.split("-");
date = date.reverse();
date = date.join(".");

console.log(date);


console.log("Task 6:");
// 6. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.

str = 'Я учу учу Javascript!';
n = 5;
let result;

if (str.length > n) {
    result = str.slice(0, n);
    console.log(result + '...');
} else {
    console.log(str);
}