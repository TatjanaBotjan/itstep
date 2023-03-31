function uniqueNumbers(arr){
    let result = [];

    for (let num of arr) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }
    return result;
}

let numbers = [1, 4, 2, 1, 6, 4, 2, 1];

console.log(uniqueNumbers(numbers)); 