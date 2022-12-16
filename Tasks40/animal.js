class BigAnimal{
    name;
    size;
    weight;
    length;
    
    constructor(name, size, weight, length) {
        this.name = name;
        this.size = size;
        this.weight = weight;
        this.length = length;
    }
    getSize() {
        console.log(this.size);
    }
}

class Dragon extends BigAnimal {

    constructor(name, size, weight, length) {
        super(name, size, weight, length);
    }
    getSize() {
        super.getSize() 
    }
}

let dragon = new Dragon("Дракалис", 35, 500, 20);
console.log(dragon);
dragon.getSize();


class SmallAnimal {
    name;
    size;
    weight;
    color;

    constructor(name, size, weight, color) {
        this.name = name;
        this.size = size;
        this.weight = weight;
        this.color = color;
    }
    getSize() {
        console.log(this.size);
    }
}

class Goose extends SmallAnimal {

    constructor(name, size, weight, length) {
        super(name, size, weight, length);
    }
    getSize() {
        super.getSize()
    }
}

let goose = new SmallAnimal("Кроха", 15, 10, "белый");
console.log(goose);
goose.getSize();

