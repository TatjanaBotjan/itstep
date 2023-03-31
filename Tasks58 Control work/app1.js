function compare(str1, str2){

    let newStr1 = str1.toLowerCase().split("").sort().join("");
    let newStr2 = str2.toLowerCase().split("").sort().join("");

    if (newStr1 == newStr2) {
        return true;
    } else {
        return false;
    }
}

let result = compare("ток","кот");
console.log(result);