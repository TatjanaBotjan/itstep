let date = "28.1.2016";
date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 10);

console.log(date.toLocaleDateString());
