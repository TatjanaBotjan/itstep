class Student{
    firstName;
    lastName;
    group;
    averageMark;

    constructor(firstName, lastName, group, averageMark) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.averageMark = averageMark;
    }

    getScholarship(){
        if (this.averageMark == 5){
            return "100$";
        } else
            return "80$";
    }
}


class Aspirant extends Student {

   scientificWork

    constructor(firstName, lastName, group, averageMark, scientificWork) {
        super(firstName, lastName, group, averageMark);
        this.scientificWork = scientificWork; 
    }

    getScholarship() {
        if (this.averageMark == 5) {
            return "200$";
        } else
            return "180$";
    }
}

let students = [];
let student = new Student("Вася", "Иванов", 15, 4); 
students.push(student);

let aspirant = new Aspirant("Ваня", "Петров", 16, 5, "десертация");
students.push(aspirant);

students.forEach(function(item){
    console.log(item.getScholarship());
});
