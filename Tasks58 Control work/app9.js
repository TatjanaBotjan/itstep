function countVowels(str){
    let vowels = ["a", "e", "i", "o", "u", "y"];
    let total = 0;

    const string = str.toLowerCase().split("");

    for (let i = 0; i < string.length; i++) {
        let letters = string[i];

        if (vowels.includes(letters)) {
            total += 1;
        }
    }

    return total;

}

console.log(countVowels("I have to go to the university"));

