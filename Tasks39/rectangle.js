console.log("Task 1");

let rectangle = {
    a: 5,
    b: 3, 
    getPerimeter(){
       return (this.a + this.b) * 2;
    },
    getSquare(){
        return this.a * this.b;  
    },
}

console.log(rectangle.perimeter(), rectangle.square());
