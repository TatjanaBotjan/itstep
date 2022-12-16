let car = {
    marka: "Opel",
    model: "Astra",
    fuel: "diesel",
    print(){
        console.log(this.marka, this.model);
    }
}

let auto = {
    __proto__: car,
    coutry: "Германия",
    drive(){
        console.log(this.coutry);
    }
}

let plain = {
    __proto__: car,
    mover: 2,
    fly() {
        console.log(this.mover);
    }
}

let train = {
    __proto__: car,
    cargo: 5,
    movel(){
        console.log(mover.movel);
    }
}

console.log(car.print(), auto.print(), plain.print(), train.print(), auto.drive(), plain.fly(), train.movel());