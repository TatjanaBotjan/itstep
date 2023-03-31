
function outputIndex() {
    for (let i = 0; i < numbers.length; i++) {
        setTimeout(function () {
            console.log(i);
        }, i*3000);
    }
}

let numbers = [3, 4, 6];

outputIndex(numbers);