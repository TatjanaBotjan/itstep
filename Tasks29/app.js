// Задача 1

let a = [0,1,2,3,4,5];

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

// Задача 2

let b = ["0","1","2","3","4","5"];
let i = 0;

while (i < b.length){
    console.log(b[i]);
    i++;
}

// Задача 3

a = [1, 2, 3];
console.log(a[0], a[1],a[2]);

// Задача 4

let sum = 0;

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < a.length; i++) {
    sum += a[i]
}
console.log(sum);

// Задача 5

let d = ["a", "b", "c", "d"];

console.log(d[0], "+", d[1], "+", d[2], "+", d[3]);

// Задача 6

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(a[a.length - 1], a[a.length - 2]);

// Задача 7

d = ["a","b","c"];

d[0] = 1;
d[1] = 2;
d[2] = 3;

console.log(d[0], d[1], d[2]);

// Задача 8


a = [1, 2, 3, 4, 5];

for (let i = 0; i < a.length; i++) {
   
    a[i] = a[i] + 3
}
console.log(a);


// Задача 9

a = [1, 2, 3];

for (let i = 0; i < a.length; i++) {
    a[i]++
  
}
console.log(a);

// Задача 10

a = [1, 2, 3];

a.push(4);
a.push(5);

console.log(a);



