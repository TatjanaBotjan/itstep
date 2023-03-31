
function sortArray(array) {

    let newArray = [];

    let even = array.filter((num) => (num % 2 == 0)).sort((a, b) => b - a);
    let odd = array.filter((num) => (num % 2 == 1)).sort((a, b) => a - b);

    array.filter(num => {
        if (num % 2 == 1) {
            newArray.push(odd.shift());
        }
        else {
            if (num % 2 == 0) {
                newArray.push(even.shift());
            }
        }
    });
    return newArray;
};

let array = [7, 3, 4, 9, 5, 2, 17];


console.log(sortArray(array));