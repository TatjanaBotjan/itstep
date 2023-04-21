let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 5, 4, 8];

let newArr1 = arr1.sort();
let newArr2 = arr2.sort();

if (newArr1.length == newArr2.length){
    let isEqual = newArr1.every(function (item, index) {
        return newArr1[index] == newArr2[index]
    });
    if(isEqual){
        console.log("Можно путём перестановки элементов получить один массив из другого");
    } else{
        console.log("Нельзя путём перестановки элементов получить один массив из другого");
    }
} else {
    console.log("Нельзя путём перестановки элементов получить один массив из другого");
};