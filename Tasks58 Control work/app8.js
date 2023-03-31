function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if(i % 3 == 0){
            console.log('fizz')
        } if (i % 5 == 0) {
            console.log('buzz')
        } if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        }

       console.log(i);
}
};

console.log(fizzBuzz(30));
