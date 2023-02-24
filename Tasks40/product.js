class Product {

    name;
    price;
    rating;

    constructor(name, price, rating) {
        this.name = name;
        this.price = price;
        this.rating = rating;
    }
}

class Category {

    name;
    productArray;

    constructor(name, productArray = []) {
        this.name = name;
        this.productArray = productArray;
}
}

let Clothes = new Category({
    name: "Clothes",
},
   ["pants", "dress", "jacket"]
);

let Food = new Category({
    name: "Food",
},
    ["pasta", "sugar", "bread"]
);

let Beverages = new Category({
    name: "Beverages",
},
    ["water", "tea", "coffee"],
);

console.log(Clothes, Food, Beverages);

class Basket {
    purchasedGoodsArray;

    constructor(purchasedGoodsArray = []) {
        this.purchasedGoodsArray = purchasedGoodsArray;
    }
}

class User extends Basket {
    login;
    password;

    constructor(purchasedGoodsArray, login, password) {
        super(purchasedGoodsArray); 
        this.login = login;
        this.password = password;
        
    }
}

let user = new User(
    ["water", "tea", "coffee"],
{
    login: "Vasja.Ivanov",
},
    {password: "1234vasla4321",
},   
);

console.log(user);

