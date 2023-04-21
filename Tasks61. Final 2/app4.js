let word = "меридиана";
let vowels = "уеыаоэяиюё";

let count = word.split("").filter((item) => vowels.includes(item)).length;

console.log(count);