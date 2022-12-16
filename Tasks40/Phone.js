class Phone {

    number;
    model;
    weight;
   
    constructor(number, model, weight) {
        this.number = number;
        this.model = model;
        this.weight = weight;
    }

    receiveCall(name){
        console.log(`Звонит ${name}`);
    }

    getNumber(){
        return this.number;
    }
}

let Huawei = new Phone("9091874", "P20", 340);
let Samsung = new Phone("7445464", "G4", 500);
let ZTE = new Phone("9288852", "A510", 480);

console.log(Huawei, Samsung, ZTE);

Huawei.receiveCall("Таня");
let number = Huawei.getNumber();

console.log(number);