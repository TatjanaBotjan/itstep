console.log("Task 1");

let a = [];
let N = 5;

for (let i = 1; i <= N; i++) {
    a.push(i);
}

let numberSquares = a.map(function (item) { 
    return item** 2;
});
console.log(numberSquares);


console.log("Task 2");

a = [-5, 6, 2, -9, 4];

let modulusOfSumNegativNum = a.filter(function (item) {
    return item < 0;
}).reduce(function (sum1, item) {
    return sum1 + item;
}, 0);

let sumPositivNum = a.filter(function (item) {
    return item > 0;
}).reduce(function (sum2, item) {
    return sum2 + item;
}, 0);

console.log(-modulusOfSumNegativNum, sumPositivNum);

if (-modulusOfSumNegativNum > sumPositivNum) {
    console.log("Модуль суммы отрицательных чисел больше суммы положительных чисел");
} else {
    console.log("Сумма положительных чисел больше модуля суммы отрицательных чисел");
}


console.log("Task 3");

a = [-5, 6, 0, 2, -9, 0, 4, 0];

let b = a.filter((item) => item != 0);

console.log(b);


console.log("Task 4");

a = [5, 6, 2, 9, 4];

let maxElement = [a[0]];

for (let i = 1; i < a.length; i++) {
    if (a[i] > maxElement[maxElement.length - 1]) {
        maxElement.push(a[i]);
    }
}
console.log(maxElement[maxElement.length - 1], maxElement[maxElement.length - 2]);


console.log("Task 5");

a = [5, 6, 2, 9, 4];

let maxIndex = 0;
for (let i = 1; i < a.length; i++) {
    if (a[i] > a[maxIndex]) {
        maxIndex = i;
    }
}

let minIndex = 0;
for (let i = 1; i < a.length; i++) {
    if (a[i] < a[minIndex]) {
        minIndex = i;
    }
}
console.log(a);

let temp;

temp = a[maxIndex];
a[maxIndex] = a[minIndex];
a[minIndex] = temp;

console.log(a);

console.log("Task 6");

a = [5, 6, 2, 9, 4, 8];
b = [];

a.forEach(function (item, i) {
    if (a[i] > a[i - 1])
        b.push(item);
})
console.log(b);

console.log("Task 7");

a = [5, 6, 2, 9, 4, 8];
b = [];

N = 3;
let M = 7;

a.forEach(function (item, i) {
    if (a[i] >= N && a[i] <= M)
        b.push(item)
});

console.log(b);

console.log("Task 8");

let num = "539762";

let newNum = + num.split("").sort((a, b) => b - a).join("");

console.log(newNum);


console.log("Task 18");

a = [5, 2, 6, -9, 11];

for (let i = 1; i < a.length; i++) {
    if (i % 2 == 1) {
        a[i] = 0;
    } 
}

console.log(a);


console.log("Task 12");

let word1 = "Машина";
let word2 = "Маша";