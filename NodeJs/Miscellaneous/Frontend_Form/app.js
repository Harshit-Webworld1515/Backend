const stu1 = {
    name: "adam",
    age: 25,
    marks: 95,
    getMarks: function () {
        return this.marks;
    }
};
const stu2 = {
    name: "eve",
    age: 25,
    marks: 99,
    getMarks: function () {
        return this.marks;
    },
};
const arr = [123, 456, 789];
const arr2 = [987, 654, 321];
arr.hello = () => {
    return "hello world from array";
}
arr2.hello = () => {
    return "hello world from array2";
}
//                     Factory function
// function personmaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//         }
//     }
//     return person;
// }
// const person1 = personmaker("Alice", 30);
// const person2 = personmaker("Bob", 25);
// person1.talk();     //copy in storage in diffrent memory location
// person2.talk();    //copy in storage in diffrent memory location


//                     Constructor function
// does not return anything, it is used with the new keyword to create objects starts with capital letter by convention
function Person(name, age) {
    this.name = name;
    this.age = age;
    Person.prototype.talk = function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    console.log(this);
}
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);
person1.talk();
person2.talk();
// class
class Student {
constructor(name, age) {
this.name = name;
this.age = age;
}
talk() {
console.log(`Hi, my name is ${this.name}`);
    }
}

let s1 = new Student("student1", 25);
let s2 = new Student("student2", 25);

// Inheritance Concept in JavaScript's oops
class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "mammal";
        console.log("Mammal constructor called (parent class)");
    }
    talk () {
        console.log(`${this.name} is a warm-blooded animal.`);
    }
}

class Dog extends Mammal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
        console.log(`${this.name}'s constructor called(child class)`);      
    }
    talk() {
        console.log(`${this.name} is a ${this.breed} dog.`);
    }
}   
const dog1 = new Dog("Tommy🐶", "Golden Retriever");
dog1.talk();
class Cat extends Mammal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }   
}
const cat1 = new Cat("Whiskers", "Gray");
cat1.talk();