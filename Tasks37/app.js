console.log("Task 1:");

// 1. Дан пустой массив, его размер n и некоторое значение value.Заполнить массив этим значением. (используя fill)

let array = new Array(5);
let value = 2;
array.fill(value);

console.log(array);

console.log("Task 2:");
// 2. Найти сумму только положительных элементов массива

let a = [2, -5, 6, 3, -8, 9];

let sumArray = a.filter(function (item) {
    return item > 0;
}).reduce(function (sumArray, item) {
    return sumArray + item;
}, 0);

console.log(sumArray);

console.log("Task 3:");
// 3. Слить 3 массива и вывести на экран элементы полученного массива в порядке убывания значений

a = [2, 6, 8, 9];
let b = [-1, 7, 20, 4];
let c = [0, 5, 3, 10];

let newArray = a.concat(b).concat(c).sort((a, b) => b - a);

console.log(newArray);

console.log("Task 4:");
// 4. Проверить 2 массива на полное совпадение

a = [1, 2, 3, 2];
b = [1, 2, 3, 1];

if (a.length == b.length) {
    let isEqual = a.every(function (item, index) {
        return a[index] == b[index]; // item == a[index]
    });
    if (isEqual) {
        console.log("совпадают");
    } else {
        console.log("не совпадают");
    }
} else {
    console.log("не совпадают");
}


console.log("Task 5");
// 5. Дан массив [1,3,6,4,3,3,5,6]. Исключить из него значения из массива [1,3]. Должно работать для любых 2 аналогичных массивов

let deletedArray = [1, 3];
let myArray = [1, 3, 6, 4, 3, 3, 5, 6];

let newMyArray = myArray.filter(function (item) {
    return deletedArray.indexOf(item) == -1; 
});

console.log(newMyArray);

console.log("Task 6");
// 6. Дан массив [1,3,6,4,3,3,5,6]. Найти все значения, которые больше среднего арифметического значения всех элементов массива

a = [1, 3, 6, 4, 3, 3, 5, 6];

let sum = a.reduce(function(sum, item) {
    return sum + item;
}, 0) / a.length;

c = a.filter(function (item) {
    return item > sum;
});

console.log(sum);
console.log(c);

console.log("Task 7");
// 7. Дано предложение на русском языке.Определить, является ли оно панграммой

let str = "абвгдеёжзийклмнопрстуфхцчшщьыъэюя";
let arrRu = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];



let newStr = str.toLowerCase().split("").sort().join("");
let newarrRu = arrRu.sort().join("");

if (newStr == newarrRu) {
    console.log("Предложение является панграмма");
} else {
    console.log("Предложение не является панграммой");
}


console.log("Task 8");
// 8. Дано натурально число.Получить число, которое образуется из записи цифр данного в обратном порядке

myArray = [123];

newArray = myArray.toString().split("").reverse().join("");

let num = Number(newArray);

console.log(num)

console.log("Task 9");
// 9. Дан массив и число A.Переставить элементы в массиве так, чтобы сначала стояли элементы меньшие числа A, а потом большие

array = [1, 5, 25, 2, 3, 7, 15, 26];
num = 8;


let array1 = array.filter((item) => item <= num);
let array2 = array.filter((item) => item > num);

newArray = array1.concat(array2);

console.log(array1, array2, newArray);


console.log("Task 11");
// 11. Дана строка. Подсчитать количество слогов в слове

let vowels = ["а", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё"];
let word = "человечество";

let newWord = word.split("");

console.log(newWord);

function numberOfSyllables(newWord) {
    let vowels = ["а", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё"];
    let vcount = 0;

    for (let x = 0; x < newWord.length; x++) {
        if (vowels.indexOf(newWord[x]) !== -1) {
            vcount += 1;
        }
    }
    return vcount;
}

console.log(numberOfSyllables(newWord));


console.log("Task 13");
// 13. Дано полный путь к файлу (например, "D:\ITStep\itstep2\Tasks\Task 37. Practice\task.txt"). Вывести все названия папок, которые входят в заданный путь

str = "D:\\ITStep\\itstep2\\Tasks\\Task 37. Practice\\task.txt";

let folderName = str.split("\\");

console.log(folderName);


console.log("Task 15");
// 15. Дано слово. Проверить, является ли данное слово палиндромом

word = "топот ";

let palindro = word.split('').reverse().join('');

console.log(word);
console.log(palindro);


console.log("Task 12");
// 12. Дано слово.Получить строку из данного слова, где нечетные буквы будут заглавными, а четные - строчными

word = "Книга";

newWord = word.toLowerCase().split("").map((item, i) => {
    if (i % 2 == 0){
        return item.toUpperCase();
    } else 
        return item;
}).join("");

console.log(newWord);


console.log("Task 21");
// 21. Дано 2 массива и число k. Найти числа по одному из каждого массива, сумма которых будет равно k

a = [3, 6, 8, 5, 4, 8];
b = [7, 9, 10, 12, 2];
let k = 15;

a.forEach(function(item){
    if(b.includes(k - item)){
        console.log(item, k - item);
    }
});