let str = "Найти символ в предложении, который чаще всего в нем встречается";

let unique = str.toLowerCase().split("").filter((item, index) => str.toLowerCase().indexOf(item) == index);
let countArr = [];

unique.forEach(function (item, index, array) {
    let count = str.toLowerCase().split("").filter((letter) => letter == item).length;
    countArr[index] = count;
});

    unique.forEach((item, index) => console.log(item, "->", countArr[index]));

    let frequentSymbol = countArr.reduce((maxIndex, item, index) => {
        if (countArr[index] > countArr[maxIndex]){
            return index;
        }
        return maxIndex;
    },0);

console.log(unique[frequentSymbol], countArr[frequentSymbol]);

