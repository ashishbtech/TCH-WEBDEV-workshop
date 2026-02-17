// ======================================
// 1️⃣ NORMAL FUNCTION
// ======================================
// A normal function is the traditional way to define a function.
// Can be called anywhere after it is declared.
function sumFunction(a, b) {
  return a + b;  // returns the sum of a and b
}

let result1 = sumFunction(1, 2);  // call the function and store the result
console.log(result1); // Output: 3

// ======================================
// 2️⃣ FUNCTION EXPRESSION
// ======================================
// A function expression is a function stored in a variable.
// Can be anonymous and cannot be called before it is defined.
let greetExpression = function() {
  console.log("Hello from function expression!");
};
greetExpression(); // Output: Hello from function expression!

// ======================================
// 3️⃣ ARROW FUNCTION
// ======================================
// Arrow functions are shorter syntax for functions
// and inherit `this` from outer scope.

// Basic arrow function
let greetArrow = () => console.log("Hello from arrow function!");
greetArrow(); // Output: Hello from arrow function!

// Arrow function with parameters
let addArrow = (a, b) => {
  return a + b;
};
console.log(addArrow(5, 3)); // Output: 8

// Arrow function with implicit return (shorter)
let multiplyArrow = (a, b) => a * b;
console.log(multiplyArrow(4, 6)); // Output: 24

// Arrow function with single parameter (no parentheses needed)
let squareArrow = x => x * x;
console.log(squareArrow(5)); // Output: 25

// Arrow functions with array methods
let numbers = [1, 2, 3, 4, 5];

// Square each number
let squares = numbers.map(n => n * n);
console.log(squares); // Output: [1, 4, 9, 16, 25]

// Filter even numbers
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // Output: [2, 4]

// Sum all numbers
let totalSum = numbers.reduce((acc, n) => acc + n, 0);
console.log(totalSum); // Output: 15

// Arrow function for custom calculation
const calculate = () => (1 + 2 + 3 + 4 + 5) * 5;
console.log(calculate()); // Output: 75

// ======================================
// 4️⃣ IIFE (Immediately Invoked Function Expression)
// ======================================
// IIFE runs automatically as soon as it is defined.
// Useful for one-time calculations or private code.
const result2 = (() => (1 + 2 + 3 + 4 + 5) * 5)();
console.log(result2); // Output: 75

// ======================================
// 5️⃣ THIS KEYWORD
// ======================================
// `this` refers to the object that is calling the function.
const person = {
  name: "Ashish",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};
person.greet(); // Output: Hello, my name is Ashish
