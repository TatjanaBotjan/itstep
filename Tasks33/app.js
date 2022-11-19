// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе (concat)

const a = [1, 2, 3];
const b = [4, 5, 6];
const x = a.concat(b);

console.log(a, b);
console.log(x);

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1] (reverse)

с = [1, 2, 3];
с.reverse();

console.log(с);

//3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6 (push)

let q = [1, 2, 3];
q.push(4, 5, 6);

console.log(q);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6 (unshift)

q = [1, 2, 3];
q.unshift(4, 5, 6);

console.log(q);

//5. Дан массив [7, 9, 3]. Выведите на экран первый элемент (shift)

q = [7, 8, 9];
let y = q.shift();

console.log(y);

// 6. Дан массив[7, 9, 3].Выведите на экран последний элемент (pop)

q = [7, 9, 3];
y = q.pop();

console.log(y);

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]

q = [1, 2, 3, 4, 5];
y = q.slice(0, 3);

console.log(y);

//8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]

q = [1, 2, 3, 4, 5];
y = q.slice(-2);

console.log(y);

//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]

q = [1, 2, 3, 4, 5];
y = q.splice(1, 2);

console.log(q);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]

q = [1, 2, 3, 4, 5];
y = q.splice(1, 3);

console.log(y);

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

q = [1, 2, 3, 4, 5];
q.splice(3, 0, "a", "b", "c");

console.log(q);

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

q = [1, 2, 3, 4, 5];
q.splice(1, 0, "a", "b");
q.splice(6, 0,"c");
q.splice(9, 0,"e");

console.log(q);

// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его (sort)

let r = [3, 4, 1, 2, 7];
r.sort();

console.log(r);

// 14. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел (forEach)

r = [2, 3, 4, 5, 6, 7];

r.forEach(function(item, i, array) {
    array[i] = item * item;
});
console.log(r);

// 15. Дан массив с числами.Найдите сумму этих чисел (forEach)

let sum = 0;

r = [2, 3, 4, 5, 6, 7];

r.forEach(function (item) {
    sum += item;
});
console.log(sum);

// 16. Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел (map)

r = [2, 3, 4, 5, 6, 7];

q = r.map(function (item, i, array) {
    return array[i]**2;
});
console.log(q);

// 17. Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля (every)

r = [-2, 3, 4, 5, 6, 7];

function isPositive(number) {
    return number > 0;
}

console.log(r.every(isPositive)); 

// 18. Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы (some)

r = [2, -3, 4, 5, 6, 7];

function isPositive(number) {
    return number < 0;
}

console.log(r.some(isPositive));

// reduce, reduceRight
// 19. Дан массив с числами. Найдите сумму этих чисел

r = [2, 3, 4, 5, 6, 7];

sum = r.reduce(function (summa, item) {
    return summa + item;
}, 0);

console.log(sum);

// 20. Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0

r = [1, 2, 3, 0, 4, 5, 6];

sum = 0;

let result = r.reduce(function (summa, item) {
    if (item == 0) {
        sum = summa;
    } else {
        return summa + item;
    }
});

console.log(sum);

// 21. Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0

r = [1, 2, 3, 0, 4, 5, 6];

sum = 0;

result = r.reduceRight(function (summa, item) {
    if (item == 0) {
        sum = summa;
    } else {
        return summa + item;
    }
});

console.log(sum);

// 22. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти

r = [2, 9, 3, 4, 5, 6];
let num = 1;
result = r.reduce(function (summa, item) {
    if (summa > 10) {
        console.log(num);
        return;
    } else {
        num++;
        return summa + item;
    }
}); 

// 23. Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти

r = [2, 9, 3, 4, 5, 1];
num = 1;
result = r.reduceRight(function (summa, item) {
    if (summa > 10) {
        console.log(num);
        return;
    } else {
        num++;
        return summa + item;
    }
}); 

// Комбинирование:
// 24. Дан массив с числами.Оставьте в нем только положительные числа.Затем извлеките квадратный корень и этих чисел.

r = [1, 2, 3, -8, 4, 5, 6, -14];

function isPositiveunc(item) { 
    return item > 0 };

let newArr = r.filter(isPositiveunc);
console.log(newArr);


newArr.forEach(function (item, i, array) {
    array[i] = item **0.5;
});
console.log(newArr);
