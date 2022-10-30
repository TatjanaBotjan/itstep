// четное или нечетное число
var a = 2;
if (a % 2 == 0) {
console.log("a - четное число");
} else console.log("a - нечетное число");

//Задача 2 вывод нечетных чисел
var b = 5;
var c = 4;
if (b % 2 == 1) {
    console.log(b);
}
if (c % 2 == 1) {
    console.log(c);
}

// Максимальное из двух чисел
a = 6;
b = 8;
if (a >= b) {
    console.log(a);
} else {
    console.log(b);
} 

// Максимальное из трех чисел
a = 5;
b = 7;
var c = 9;
if ((a >= b) && (a >= c)) {
    console.log(a); 
}
if ((b >= a) && (b >= c)) {
    console.log(b);
}
if ((c >= a) && (c >= a)) {
    console.log(c);
}

// Среднее по значению из трех чисел
if (((a >= b) && (a <= c)) || ((a <= b) && (a >= c))) {
    console.log(a);
}
if (((b >= a) && (b <= c)) || ((b <= a) && (b >=c))) {
    console.log(b);
}
if (((c >= a) && (c <=b)) || ((c <= a) && (c >= b))) {
    console.log(c);
}

// Существование треугольника при условии, что ни одна его сторона не превышает сумму двух других
if ((a < (b + c)) && (b < (a + c)) && (c < (a + b))) {
    console.log("Треугольник существует");
}

//*Даны координаты точки, а также радиус круга, центр которого находится в начале координат.
//*Определить, принадлежит ли данная точка кругу
var x = 4;
var y = 3;
var r = 2;
if ((x**2 + y**2) < r**2) {
    console.log("принадлежит");
} else console.log("не принадлежит");

// Високосный год
var year = 2020;
if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
    console.log("високосный", 366);
} else console.log("не високосный", 365);


// Рабочий день
var workingDay = 5;
var hour = 14;
var minutes = 30;
if ((workingDay >= 1) || (workingDay <= 5) && ((hour >= 8 && hour <= 17) && (minutes <= 0))) {
    console.log("рабочий");
} else console.log("нерабочий");

// Грибы
var mushrooms = 10;
if (mushrooms == 1) {
    console.log("гриб");
}
if ((mushrooms >= 2) || (mushrooms <= 4)) {
    console.log("гриба");
}
    
// Квадратное уравнение
var a = 2;
var b = 5;
var c = 4;
var x = 3;
var D = b**2 - 4 * a * c;

if (D > 0) {
    console.log("D");
}
if (D == 0) {
    console.log("D");
}
if (D < 0) {
    console.log("нет корней");
}

// Линейное уравнение ax = b
a = 5;
b = 7;
if(a != 0) {
    console.log(`${(a / b)}`);
} else if(a == 0 && b == 0){ 
    console.log(`x - любое число`);
} else 
    console.log(`нет корней`);




