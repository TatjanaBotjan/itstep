
function uniqueArray(){

    let result = [];
    
    a.forEach(function (item) {
        if (b.includes(item))
            result.push(item);
        
    });
    console.log(result);

    unique = result.filter(function (item, i) {
        return result.indexOf(item) == i;
    })

    console.log(unique);
    
};


let a = [1, 2, 3, 3, 4, 5, 6];
let b = [1, 2, 3, 3, 4, 5, 6, 7, 7, 8];

uniqueArray();









