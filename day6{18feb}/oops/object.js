// 1️⃣ Simple Object (Object Literal)
const person = {
  name: "Rahul",
  age: 22,
  greet() {
    console.log("Hi, I'm " + this.name);
  }
};

person.greet();


// 2️⃣ Class Example
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  start() {
    console.log(this.brand + " car started");
  }
}

const car1 = new Car("Toyota", "Red");
car1.start();


// 3️⃣ Encapsulation (Private Property)
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(500);
console.log("Balance:", account.getBalance());


// 4️⃣ Inheritance
class Animal {
  speak() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const myDog = new Dog();
myDog.speak();


// 5️⃣ Polymorphism
class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const animals = [new Dog(), new Cat()];

animals.forEach(animal => animal.speak());

