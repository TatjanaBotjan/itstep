// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром

function squareNumber(a) {
    return a*a;
}

// 2. Сделайте функцию, которая отнимает от первого числа второе и делит на третье

function differenceAndDivisionNumbers(a, b, c){
    let y = (a - b) / c;
    return y;
}

//3. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке
    
function daysOfTheWeek(day) {
    if (day == 1) {
        return ('Понедельник');
    } else if (day == 2) {
        return ('Вторнк');
    } else if (day == 3) {
        return ('Среда');
    } else if (day == 4) {
        return ('Четверг');
    } else if (day == 5) {
        return ('Пятница');
    } else if (day == 6) {
        return ('Суббота');
    } else if (day == 7) {
        return ('Воскресенье');
    }
}

// 4. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false

function equalityCheckNumbers(a, b) {
        if (a == b) {
            return true; 
        }
        return false;
    }
    

// 5. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false

function summa(a, b) {
    if (a + b > 10) {
        return true;
    }
    return false;
}


//6. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.Если отрицательное - пусть функция вернет true, а если нет - false

function checkPositiveOrNegativeNumber(a) {
    if (a < 0) {
        return true;
    }
    return false;
}


//7. Сделайте функцию, которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false

function checkEvenOrOddNumber(a) {
    if (a % 2 == 0) {
        return true;
    } 
    return false;
}


// 8. Сделайте функцию, которая параметром принимает число и возвращает массив его делителей

function arrayOfDivisorsNumber(num) {
    let result = [];
    let j = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            result[j] = i;
            j++;
        }
    } 
    return result;
}

//1
let x = squareNumber(3);
console.log(x);

//2
console.log(differenceAndDivisionNumbers(20, 5, 3));

//3 
console.log(daysOfTheWeek(3));

//4
console.log(equalityCheckNumbers(2, 2));

//5
console.log(summa(9, 7));

//6
console.log(checkPositiveOrNegativeNumber(-6));

//7
console.log(checkEvenOrOddNumber(7));

//8
console.log(arrayOfDivisorsNumber(44));

