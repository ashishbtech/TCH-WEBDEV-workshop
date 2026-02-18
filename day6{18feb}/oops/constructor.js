class Student {
    constructor(name, marks){
        this.name = name;
        this.marks = marks;
    }

    greet() {
        console.log("Hello my name is " + this.name);
    }
}

const s1 = new Student("Rahul", 89);
s1.greet();
