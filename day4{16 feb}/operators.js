// ==========================================
// JAVASCRIPT OPERATORS
// ==========================================


// ------------------------------------------
// 1. ARITHMETIC OPERATORS
// ------------------------------------------

let a = 10;
let b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.333...
console.log("Modulus:", a % b);         // 1 (remainder)
console.log("Exponent:", a ** b);       // 1000 (10^3)


// ------------------------------------------
// 2. ASSIGNMENT OPERATORS
// ------------------------------------------

let x = 5;

x += 2;   // x = x + 2
console.log("x after += :", x);  // 7

x -= 1;   // x = x - 1
console.log("x after -= :", x);  // 6

x *= 2;   // x = x * 2
console.log("x after *= :", x);  // 12

x /= 3;   // x = x / 3
console.log("x after /= :", x);  // 4


// ------------------------------------------
// 3. COMPARISON OPERATORS
// ------------------------------------------

let num1 = 10;
let num2 = "10";

console.log("== :", num1 == num2);    // true (value only)
console.log("=== :", num1 === num2);  // false (value + type)
console.log("!= :", num1 != num2);    // false
console.log("!== :", num1 !== num2);  // true
console.log("> :", num1 > 5);         // true
console.log("< :", num1 < 20);        // true
console.log(">= :", num1 >= 10);      // true
console.log("<= :", num1 <= 9);       // false


// ------------------------------------------
// 4. LOGICAL OPERATORS
// ------------------------------------------

let isLoggedIn = true;
let isAdmin = false;

console.log("AND (&&):", isLoggedIn && isAdmin);  // false
console.log("OR (||):", isLoggedIn || isAdmin);   // true
console.log("NOT (!):", !isLoggedIn);             // false


// ------------------------------------------
// 5. INCREMENT & DECREMENT
// ------------------------------------------

let count = 5;

count++;  // increment
console.log("After increment:", count);  // 6

count--;  // decrement
console.log("After decrement:", count);  // 5


// ------------------------------------------
// 6. TERNARY OPERATOR
// ------------------------------------------

let age = 18;

let result = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary result:", result);


// ------------------------------------------
// 7. TYPEOF OPERATOR
// ------------------------------------------

let name = "Ashish";
console.log("Type of name:", typeof name);  // string



// Unary Operator – Definition

// A unary operator is an operator that works on only one operand (one value or variable).

// In simple words:
// Unary operator sirf ek value par kaam karta hai.
