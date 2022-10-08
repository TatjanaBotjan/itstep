var name = "Вася";
const surname = "Пупкина";

// неициализированные переменные
var growth, weight;

// рост 180, вес - 0.89
growth = 180;
weight = 0.89;

// вес в кг
var weightKg = (0.89 * 100);

//надпись
console.log("Меня зовут", name, surname, ".Я вешу", weight, "ц", ".Мой рост", growth, "см.");

// изменение роста и веса
var weightKg2 = (weightKg + 10);
var growth2 = (growth - 2);

// новые параменты Васи
console.log(name, surname, "потолстел и стоптался");

//новый мальчик
var name2 = "Петя";
var weight3 = (weightKg * 2);
console.log(name2, weight3);
var weight4 = (weight3 / weightKg);
console.log("Теперь я", name2, surname, "и вешу в", weight4, "раза больше, чем в молодости.");

//Задача 2

//периметр
var a = 3;
var p = (a * 4);
console.log(p);

//площадь круга
var r = 4;
const Pi = 3.14159;
console.log(r**2 * Pi);

//гипотенуза
var a, b, c;
a = 2;
b = 5;
с = a**2 + b**2;
var hypotenuse = c**0.5;
console.log(hypotenuse);
