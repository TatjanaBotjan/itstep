let array = [1, 3, 6, 4, 3, 3, 5, 6];

array.sort(function (a, b) {
    return a - b;
});

let median = array.length / 2;

for (let i = 0; i < array.length; i++){
    if (array[i] < median){
        console.log(array[i]);
    }
};