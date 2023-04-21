let str = "К нам пришла холодная зима.";

let shortWord = str.split(" ").reduce(function (word, item) {
    if (item.length < word.length) {
        return item;
    }
    return word;
});

console.log(shortWord);