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

max = a.reduce((maximum, item) => {
    if (item > maximum)
        return item;
    return maximum;
});

let min = a.reduce((minimum, item) => {
    if (item < minimum)
        return item;
    return minimum;
});

a[0] = max;

console.log(a);