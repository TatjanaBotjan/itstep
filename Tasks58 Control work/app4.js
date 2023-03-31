
let newArray = [];
function numbers(array) {

    let even = array.filter(item => item % 2 == 0).sort((a, b) => b - a);
    let odd = array.filter(item => item % 2 == 1).sort((a, b) => a - b);


}
let array = [7, 3, 4, 9, 5, 2, 17];

newArray = numbers(array);
console.log(newArray)