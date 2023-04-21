function count(path) {
    let result = [];

    path.split("\\").forEach(function (item, index, array) {
        if (index != 0 && index != (array.length - 1)) {
            result.push(item);
        }
    });
    
    return result.length;
}

let path = "D: \\ITStep\\itstep2\\Tasks\\Task 61. Practice\\task.txt";

console.log(count(path)); 


