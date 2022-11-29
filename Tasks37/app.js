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
