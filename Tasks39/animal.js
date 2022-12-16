let animal = {
    name: "Барсик",
    color: "black",
    weight: 9,
   
}

let cat = {
    sound() {
        console.log("Meow");
    },
    __proto__: animal
}

let dog = {
    sound() {
        console.log("Гав");
    },
    __proto__: animal
}

cat.sound();
dog.sound();