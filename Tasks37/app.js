console.log("Task 1:");

// 1. Дан пустой массив, его размер n и некоторое значение value.Заполнить массив этим значением. (используя fill)

let array = new Array(5);
let value = 2;
array.fill(value);

console.log(array);

console.log("Task 2:");
// 2. Найти сумму только положительных элементов массива

let a = [2, -5, 6, 3, -8, 9];

let sumArray = a.filter(function (item) {
    return item > 0;
}).reduce(function (sumArray, item) {
    return sumArray + item;
}, 0);

console.log(sumArray);

console.log("Task 3:");
// 3. Слить 3 массива и вывести на экран элементы полученного массива в порядке убывания значений

a = [2, 6, 8, 9];
let b = [-1, 7, 20, 4];
let c = [0, 5, 3, 10];

let newArray = a.concat(b).concat(c).sort((a, b) => b - a);

console.log(newArray);

console.log("Task 4:");
// 4. Проверить 2 массива на полное совпадение

a = [1, 2, 3, 2];
b = [1, 2, 3, 1];

if (a.length == b.length) {
    let isEqual = a.every(function (item, index) {
        return a[index] == b[index]; // item == a[index]
    });
    if (isEqual) {
        console.log("совпадают");
    } else {
        console.log("не совпадают");
    }
} else {
    console.log("не совпадают");
}


console.log("Task 5");
// 5. Дан массив [1,3,6,4,3,3,5,6]. Исключить из него значения из массива [1,3]. Должно работать для любых 2 аналогичных массивов

let deletedArray = [1, 3];
let myArray = [1, 3, 6, 4, 3, 3, 5, 6];

let newMyArray = myArray.filter(function (item) {
    return deletedArray.indexOf(item) == -1; 
});

console.log(newMyArray);

console.log("Task 6");
// 6. Дан массив [1,3,6,4,3,3,5,6]. Найти все значения, которые больше среднего арифметического значения всех элементов массива

a = [1, 3, 6, 4, 3, 3, 5, 6];

let sum = a.reduce(function(sum, item) {
    return sum + item;
}, 0) / a.length;

c = a.filter(function (item) {
    return item > sum;
});

console.log(sum);
console.log(c);

console.log("Task 7");
// 7. Дано предложение на русском языке.Определить, является ли оно панграммой

let str = "абвгдеёжзийклмнопрстуфхцчшщьыъэюя";
let arrRu = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];



let newStr = str.toLowerCase().split("").sort().join("");
let newarrRu = arrRu.sort().join("");

if (newStr == newarrRu) {
    console.log("Предложение является панграмма");
} else {
    console.log("Предложение не является панграммой");
}


console.log("Task 8");
// 8. Дано натурально число.Получить число, которое образуется из записи цифр данного в обратном порядке

myArray = [123];

newArray = myArray.toString().split("").reverse().join("");

let num = Number(newArray);

console.log(num)

console.log("Task 9");
// 9. Дан массив и число A.Переставить элементы в массиве так, чтобы сначала стояли элементы меньшие числа A, а потом большие

array = [1, 5, 9, 2, 3, 7, 15, 25];
num = 9;


let array1 = array.filter((item) => item <= num).sort((a, b) => a - b);
let array2 = array.filter((item) => item > num).sort((a, b) => a - b);

newArray = array1.concat(array2);

console.log(array1, array2, newArray);
