// 1️⃣ Person Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const p1 = new Person("Rahul", 22);
p1.greet();


// 2️⃣ Car Class
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  start() {
    console.log(`${this.brand} car started.`);
  }
}

const car1 = new Car("Toyota", "Red");
car1.start();


// 3️⃣ BankAccount (Encapsulation)
class BankAccount {
  #balance = 0; // private property

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(1000);
console.log("Balance:", account.getBalance());


// 4️⃣ Inheritance Example
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

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const dog = new Dog();
const cat = new Cat();

dog.speak(); // Dog barks
cat.speak(); // Cat meows


// 5️⃣ Polymorphism Example
const animals = [new Dog(), new Cat()];

animals.forEach(animal => {
  animal.speak(); // Different output, same method name
});
