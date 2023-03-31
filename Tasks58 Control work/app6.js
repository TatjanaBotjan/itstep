function create() {
    
    let a = [];
    const min = 1, max = 1000, n = 100;

for(let i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

let maxNumber = a.reduce((maximum, i) => {
    if (i > maximum)
        return i;
    return maximum;
});

let minNumber = a.reduce((minimum, i) => {
    if (i < minimum)
        return i;
    return minimum;
});

console.log(maxNumber);
console.log(minNumber);
console.log(maxNumber - minNumber);

}

create();
 