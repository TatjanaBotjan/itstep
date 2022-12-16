console.log("Task 1");

let user = {};
user = new Object();

console.log(user);

console.log("Task 2");

user.name = "John";

console.log(user.name);

console.log("Task 3");

user.surname = "Smith";

console.log(user.surname);

console.log("Task 4");

user.name = "Pete";

console.log(user.name);

console.log("Task 5");

delete user.name;

console.log(user);

console.log("Task 6");

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (let key in salaries){
    sum += salaries[key];
}

console.log(sum);

console.log("Task 7");

user = {
    name: "Иван",
    age: 30
};

let copyUser = Object.assign({}, user);

console.log(copyUser);

console.log("Task 8");

cloneUser = {};

for (let key in user) {
    if (typeof user[key] != "object")
        cloneUser[key] = user[key];
    else {
        cloneUser[key] = {};
        for (let key1 in user[key]) {
            cloneUser[key][key1] = user[key][key1];
        }
    }
}

console.log(user, cloneUser);

