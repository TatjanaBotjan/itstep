// Задача 1
var s = 16;
var a = s**0.5;
var p = a * 4;
console.log(p);

// Задача 2
a = 5;
b = 3;
c = 7;

if (a != b && a != c && b != c) {
    console.log("Разносторонний");
} else if (a = b && a != c && b != c) {
    console.log("Ранобедренный");
} else { 
    console.log("Равносторонний");
}

// Задача 3
a = 5;
b = 3;
c = 7;

if ((a < b + c) && (b < a + c) && (c < a + b)) {
    console.log("Треугольник");
} else {
    console.log("Не треугольник");
}

// Задача 5
a = 15;
b = 10;
var sum = a + b;

if (sum % 2 == 0) {
    console.log(a * b);
} else if (sum % 2 == 1) {
    console.log(a / b);
}

// Задача 6
var age = 90;
if (age <= 17) {
    console.log("Молодой");
} else if (age >= 18 && age <= 69) {
    console.log("Взрослый");
} else {
    console.log("Пожилой"); 
}

// Задача 7
var r = 5;
a = 10;
var squareDiagonal = (2 * a)**0.5;
var circleDiagonal = r * 2;

if (circleDiagonal <= a) {
    console.log("Круг поместится в квадрате");
} else if (squareDiagonal <= circleDiagonal) {
    console.log("Квадрат поместится в круге");
} else {
    console.log("Ничего ни во что не поместится");
}

// Задача 8

var day = 30;
var month = 3;
var year = 1996;

if (((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && (day <= 31) && (year >= 1)) || ((month == 4 || month == 6 || month == 9 || month == 11) && (day <= 30) && (year >= 1)) || ((month == 2) && (day <= 29) && ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) && (year >= 1)) || ((month == 2) && (day <= 28) && (year >= 1))) {
    console.log("Дата корректная");
} else {
    console.log("Дата некорректная");
}

// Задача 9

var x = 0;
var y = -7;

if ((x > 0) && (y > 0)) {
    console.log("Точка лежит в первой четверти");
} else if ((x < 0) && (y > 0)) {
    console.log("Точка лежит во второй четверти");
} else if ((x < 0) && (y < 0)) {
    console.log("Точка лежит в третьей четверти");
} else if ((x > 0) && (y < 0)) {
    console.log("Точка лежит в четвертой четверти");
} else {
    console.log("Точка лежит на оси координат");
}

// Задача 10

var r1 = 5;
var r2 = 3;
var distanceBetweenCircleCenters = 2;

if ((distanceBetweenCircleCenters > r1 - r2) && (distanceBetweenCircleCenters < r1 + r2)) {
    console.log("Окружности пересекаются");
} else if (distanceBetweenCircleCenters < r1 - r2) {
    console.log("Одна окружность лежит внутри другой, не касаясь"); 
} else if (distanceBetweenCircleCenters > r1 + r2) {
    console.log("Окружности расположены одна вне другой, не касаясь"); 
} else if (distanceBetweenCircleCenters == r1 + r2) {
    console.log("Окружности касаются извне"); 
} else {
    console.log("Окружности касаются изнутри");
}

















