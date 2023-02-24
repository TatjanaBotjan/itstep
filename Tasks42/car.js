class Person{
    age;
    fullname;

    constructor(age, fullname) {
        this.age = age;
        this.fullname = fullname;
    }

    toString() {
        return `age: ${this.age}, fullname: ${this.fullname}`;
    }
}

class Driver extends Person{
    experience;

    constructor(age, fullname, experience) {
        super(age, fullname);
        this.experience = experience;
    }

    toString() {
        return `age: ${this.age}, fullname: ${this.fullname}, experience: ${this.experience}`;
    }
}

class Client extends Person{
    address;
    payment;

    constructor(age, fullname, address, payment) {
        super(age, fullname);
        this.address = address;
        this.payment = payment;
    }

    toString() {
        return `age: ${this.age}, fullname: ${this.fullname}, address: ${this.address}, payment: ${this.payment}`;
    }
}

class Engine{
    power;
    company;

    constructor(power, company) {
        this.power = power;
        this.company = company;
    }

    toString() {
        return `power: ${this.power}, company: ${this.company}`;
    }
}

class Car{
    carClass;
    marka;
    engine;
    driver;
    
    constructor(carClass, marka, engine, driver) {
        this.carClass = carClass;
        this.marka = marka;
        this.engine = engine;
        this.driver = driver;
    }

    start() {
        this.engine.power = 100;
    }

    stop() {
        this.engine.power = 0;
    }

    turnRight() {
        console.log("Машина повернула направо");
    }

    turnLeft() {
        console.log("Машина повернула налево");
    }

    toString() {
        return `carClass: ${this.carClass}, engine: ${this.engine.toString()}, marka: ${this.marka}, driver: ${this.driver.toString()}`;
    }
}


class Taxi extends Car {
    tariff;

    constructor(carClass, marka, engine, driver, tariff) {
        super(carClass, marka, engine, driver);

        this.tariff = tariff;
    }

    toString() {
        return `carClass: ${this.carClass}, engine: ${this.engine.toString()}, marka: ${this.marka}, driver: ${this.driver.toString()}, tariff: ${this.tariff}`;
    }
}

class Lorry extends Car{
    carrying;

    constructor(carClass, marka, engine, driver, carrying) {
        super(carClass, marka, engine, driver);
        
        this.carrying = carrying;
    }

    toString() {
        return `carClass: ${this.carClass}, engine: ${this.engine.toString()}, marka: ${this.marka}, driver: ${this.driver.toString()}, carrying: ${this.carrying}`;
    }
}

class SrortCar extends Car {
    speed;

    constructor(carClass, marka, engine, driver, speed) {
        super(carClass, marka, engine, driver);

        this.speed = speed;
    }

    toString() {
        return `carClass: ${this.carClass}, engine: ${this.engine.toString()}, marka: ${this.marka}, driver: ${this.driver.toString()}, speed: ${this.speed}`;
    }
}

class Order{
    distance;
    taxi;
    client;

    constructor(distance, taxi, client){
        this.distance = distance;
        this.taxi = taxi;
        this.client = client;
    }
    getPrice(){
        return this.distance * this.taxi.tariff;
    }

    toString(){
        return `Client: ${this.client.fullname}, payment: ${this.client.payment}, distance: ${this.distance}, price: ${this.getPrice()}`;
    }
}

let carEngine = new Engine(100, "Opel");
let carDriver = new Driver("40 лет", "Сергей Иванов", "5 лет");
let client = new Client("30 лет", "Петя Петров", "ул. Чкалова, д.29", "наличные");

console.log(client);

let srortCar = new SrortCar("хэтчбек", "Opel Astra", carEngine, carDriver, "100 км/ч");
console.log(srortCar);
console.log(srortCar.toString());

let lorryEngine = new Engine(200, "МАЗ");
let lorryDriver = new Driver("50 лет", "Иван Петров", "10 лет");

let lorryCar = new Lorry("грузовик", "МАЗ", lorryEngine, lorryDriver, "2 тонны");
console.log(lorryCar);
console.log(lorryCar.toString());

let taxi = new Taxi("хэтчбек", "Opel Astra", carEngine, carDriver, 2);
console.log(taxi);

let order = new Order(50, taxi, client);
console.log(order);
console.log(order.getPrice());
console.log(order.toString());






