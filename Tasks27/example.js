// Задача 1
var i = 1;

while (i <= 10) {

    console.log(i);
    i++;
}

// Задача 2

var a = 20;
while (a >= 11) {

    console.log(a);
    a--;
}

// Задача 3
var n = 1;
a = 4;
var p;
while (n <= 10) {
    p = n * a;
    n++
    console.log(`${n-1} * ${a} = ${p}`);
}

// Задача 4
var s = 0; 
i = 1; // хранит текущее число 
var N = 100;
while (i <= N) {
    if (i % 2 == 0) {
        s += i; // s = s + is
    }
    i++
}
console.log(s);
// Задача 5
a = 20;
while (a <= 50) {
    if (a % 3 == 0 && a % 5 != 0){
        console.log(a);
    }

    a++;
}

// Задача 6
s = 0;
N = 10;

for (let i = 1; i <= N; i++) {
    s += i**2;
}
console.log(s);



//сумма 3х значный чисел, которые деляться на 10 и на 13

s = 0;
for (let i = 100; i <= 999; i++) {
    if (i % 10 == 0 && i % 13 == 0) {
        s += i;
    }
}
console.log(s);

// 2й вариант

s = 0;
var i = 100;

while (i <= 999) {
    if ((i % 10 == 0 && i % 13 == 0)) {
        s += i;
    }
    i++;
}
console.log(s);

// 3й вариант
s = 0;
i = 100;
do {
    if ((i % 10 == 0) && (i % 13 == 0)) {
        s += i;
    }
    i++;

} while (i <= 999);

console.log(s);

// Доставка

var day = 6;
var time = 20;

if (time >= 8 && time <= 16 && day != 7) {
    console.log("today after 16");
} else if (time <= 8 && day != 7) {
    console.log("today from 8 to 16");
} else if (time >= 16 && day != 7 && day != 6) {
    console.log("tomorrow from 8 to 16");
} else if (day == 7) {
    console.log("tomorrow from 8 to 16");
} else  {
    console.log("day after tomorrow from 8 to 16");
}

// условия задач

//task 1  найти сумму всех четных чисел до 100
let sum = 0, i = 2;

while (i <= 100) {
    sum += i;
    i += 2;
}

console.log(sum, i);

//task 2
sum = 0, i = 2;

do {
    sum += i;
    i += 2;
} while (i <= 100);

console.log(sum, i);

//task 3
for (sum = 0, i = 2; i <= 100; i += 2) {
    sum += i;
}

console.log(sum, i);

//task 4
let n = 1_000_000, count = 0;

while (n != 1) {

    if (n % 2 == 0) {
        n = n / 2;
    } else {
        n = (n * 3 + 1) / 2;
    }
    count++;
}
console.log(count);


//task 5 найти все числа, которые делятся на 7 и не делятся на 5 до 51
count = 0, i = 0;

while (count != 51) {

    i++;
    if (i % 7 == 0 && i % 5 != 0) {
        count++;
    }
}

console.log(i);

//task 6
count = 0, i = 0;

do {
    i++;
    if (i % 7 == 0 && i % 5 != 0) {
        count++;
    }

} while (count != 51);

console.log(i);
//task 7
count = 0, i = 100;

do {

    if (i % 21 == 0 || i % 14 != 0) {
        count++;
        console.log(i)
    }
    i++;
} while (count != 10);

//task 8
for (i = 100, count = 0; count <= 10; i++) {
    if (i % 21 == 0 || i % 14 != 0) {
        count++;
        console.log(i)
    }
}
