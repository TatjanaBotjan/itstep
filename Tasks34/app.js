console.log("Task 1:");
// 1. Дан числовой массив. Удалить все отрицательные элементы в нем, а все положительные элементы умножить на -1

let a = [2, -1, 5, 1, -2, 4];

let b = a.filter(function (item) {
    return item > 0;
}).map(function (item) {
    return item * -1;
});
console.log(b);


console.log("Task 2:");
// 2. Дан числовой массив. Сформировать два новых массива: в первом - четные элементы массива, во втором - нечетные элементы. Сравнить суммы полученных массивов (определить большую)

a = [9, 14, 5, 1, 28, 4, 49];

let sumArray1 = a.filter(function(item) {
    return item % 2 == 0;
}).reduce(function(sumArray1, item) {
    return sumArray1 + item;
}, 0);

let sumArray2 = a.filter(function(item) {
    return item % 2 == 1;
}).reduce(function(sumArray2, item) {
    return sumArray2 + item;
}, 0);

console.log(sumArray1, sumArray2);


function sumComparison(sumArray1, sumArray2) {
    if (sumArray1 > sumArray2) {
        return sumArray1;
    } else {
        return sumArray2;
    }
}

console.log(sumComparison(sumArray1, sumArray2));

console.log("Task 6:");
// 6. Дан числовой массив и некоторое число x. Удалить все элементы больше заданного числа x

a = [3, 15, 0, -7, 9, 11, 24, 10];
let x = 10;

b = a.filter(function (item) {
    return item < x;
});
console.log(b);


console.log("Task 4:");
// 4. Дан числовой массив. Найти максимальный элемент массива

a = [1, 5, 6, 2, 3];
let m = Math.max.apply(null, a);
console.log(m);


console.log("Task 3:");
// 3. Дан числовой массив.Сформировать два новых массива: в первом - элементы с четными индексами, во втором - элементы с нечетными индексами.Сравнить суммы полученных массивов(определить большую)

a = [9, 14, 5, 1, 28, 4, 49];

sumArray1 = a.filter(function(item, i) {
    return i % 2 == 0;
}).reduce(function(sumArray1, i) {
    return sumArray1 + i;
}, 0);

sumArray2 = a.filter(function(item, i) {
    return i % 2 == 1;
}).reduce(function(sumArray2, i) {
    return sumArray2 + i;
}, 0);

console.log(sumArray1, sumArray2);


function sumComparison(sumArray1, sumArray2) {
    if (sumArray1 > sumArray2) {
        return sumArray1;
    } else {
        return sumArray2;
    }
}

console.log(sumComparison(sumArray1, sumArray2));


console.log("Task 5:");
// 5. Дан числовой массив.Найти разность максимального и мининального элемента массива.

a = [1, 5, 6, 2, 3];

let max = Math.max.apply(null, a);
console.log(max);

let min = Math.min.apply(null, a);
console.log(min);

function difference(max, min) {
    return max - min;
};

console.log(difference(max, min));



