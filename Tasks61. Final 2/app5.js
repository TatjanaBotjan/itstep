let str = "   Дана    строка    с    пробелами    .";

str = str.split("").filter(function (letter, i, array) {
    if (letter == " " && array[i + 1] == " ")
        return false; 
    return true;
}).join("");

console.log(str);