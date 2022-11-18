// 1. Разрабоать функцию для генерации случаного целого числа от min до max.

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// 2. Разработать функцию для заполнения массива случаныйми числами

function fillRandomNumber(a, n){
    for (let i = 0; i < n; i++){
        a[i] = randomNumber(1, 100);
    }
}

let a = [];
fillRandomNumber(a, 5);
console.log(a);

// 3. Разработать функцию для нахождения максимального элемента в массиве

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
  

// 4. Разработать функцию для нахождения индекса максимального элемента в массиве

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

// 5. Разработать функцию, которая выводит элемента массива через запятую ([1,2,3,4,5] -> 1, 2, 3, 4, 5)

function newArray(a) {
    a = [1, 2, 3, 4, 5];
    return a = [1, 2, 3, 4, 5];
}

let y = newArray(a);
console.log(y);

// 6. Разработать функцию, которая уменьшает четные элементы в 2 раза.

function evenNumbers(a) { 
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        return a[i] / 2;
    }
}
}
evenNumbers(a);

// 7. Разработать функцию, которая проверит наличие некоторого элемента в массиве.

function searchElementInArray(a, k) {

    for (let i = 0; i < a.length; i++) {
        if (a[i] == k) {
            return true; 
        }
    }
    return false; 
}

console.log(a);
searchElementInArray(k);


// 8. Разработать функцию, которая ищет элемент в массиве и возвращает его индекс, если находит его, и - 1 - в противном случае.

function searchElement(a, x) {
    x = 25;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == x) {
            return index;
        } else 
            return -1;
    }
}
