
// 1. Разрабоать функцию для генерации случаного целого числа от min до max.

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// 2. Разработать функцию для заполнения массива случаныйми числами

function fillRandomNumber(a, n) {
    for (let i = 0; i < n; i++) {
        a[i] = randomNumber(1, 100);
    }
}

let a = [];
fillRandomNumber(a, 5);
console.log(a);




function maxElement(a, maxElement) {
    maxElement = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] > maxElement) {
            maxElement = a[i];
        }
    }
    return maxElement;
}

let x = maxElement(a, maxElement);
console.log(x);


function maxIndex(a, maxIndex) {
maxIndex = 0;
for (let i = 1; i < a.length; i++) {
    if (a[i] > a[maxIndex]) {
        maxIndex = i;
    }
}
    return a[maxIndex];
}
let f = maxIndex(a, maxIndex);
console.log(f);

function newArray(a) {
    a = [1,2,3,4,5];
    return a = [1, 2, 3, 4, 5];
}

let y = newArray(a);
console.log(y);




console.log(a);

function divEvenNumbers(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
         
             a[i] = a[i] / 2;
        }
        return a[i];
    }
}

function searchElement(a, x) {
    x = 25;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == x) {
            return index;
        } else
            return -1;
    }
}



