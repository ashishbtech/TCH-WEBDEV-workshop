// ==========================================
// JAVASCRIPT DATA TYPES
// ==========================================


// ------------------------------------------
// WHAT ARE DATA TYPES?
// ------------------------------------------

/*
Definition:
Data types define the type of value that a variable can store.

In simple words:
Data type tells JavaScript what kind of data we are working with
(number, text, true/false, etc.)
*/


// ------------------------------------------
// TYPES OF DATA TYPES IN JAVASCRIPT
// ------------------------------------------

/*
JavaScript has TWO main categories:

1. Primitive Data Types
   - Store single simple values
   - Immutable (cannot be changed directly)

2. Non-Primitive Data Types (Reference Types)
   - Store multiple values
   - Stored by reference
*/


// ==========================================
// PRIMITIVE DATA TYPES
// ==========================================


// ------------------------------------------
// 1. NUMBER
// ------------------------------------------

/*
Definition:
Number data type is used to store numeric values.
It includes both integers and decimal numbers.
*/

let age = 21;
let price = 99.99;

console.log("age:", age);
console.log("type of age:", typeof age);


// ------------------------------------------
// 2. STRING
// ------------------------------------------

/*
Definition:
String data type is used to store text.
Text must be written inside quotes.
*/

let name = "Ashish";
let city = 'Jhansi';
let message = `My name is ${name}`;

console.log("name:", name);
console.log("type of name:", typeof name);


// ------------------------------------------
// 3. BOOLEAN
// ------------------------------------------

/*
Definition:
Boolean data type stores only two values:
true or false.
Used in conditions and decision making.
*/

let isStudent = true;

console.log("isStudent:", isStudent);
console.log("type of isStudent:", typeof isStudent);


// ------------------------------------------
// 4. UNDEFINED
// ------------------------------------------

/*
Definition:
Undefined means a variable is declared
but not assigned any value.
*/

let x;

console.log("x:", x);
console.log("type of x:", typeof x);


// ------------------------------------------
// 5. NULL
// ------------------------------------------

/*
Definition:
Null represents an intentional empty value.
It means "nothing" or "no value".
*/

let data = null;

console.log("data:", data);
console.log("type of data:", typeof data);
// Note: typeof null returns "object" (this is a known JavaScript bug)


// ------------------------------------------
// 6. BIGINT
// ------------------------------------------

/*
Definition:
BigInt is used to store very large numbers
that are bigger than normal number limit.
*/

let bigNumber = 12345678901234567890n;

console.log("bigNumber:", bigNumber);
console.log("type of bigNumber:", typeof bigNumber);



// ==========================================
// NON-PRIMITIVE DATA TYPES
// ==========================================


// ------------------------------------------
// 7. OBJECT
// ------------------------------------------

/*
Definition:
Object is used to store multiple values
in key-value pairs.
*/

let student = {
    name: "Ashish",
    age: 21,
    city: "Jhansi"
};

console.log("student:", student);
console.log("type of student:", typeof student);


// ------------------------------------------
// 8. ARRAY
// ------------------------------------------

/*
Definition:
Array is a special type of object
used to store multiple values in list form.
*/

let fruits = ["Apple", "Banana", "Mango"];

console.log("fruits:", fruits);
console.log("first fruit:", fruits[0]);
console.log("type of fruits:", typeof fruits);



// ==========================================
// FINAL SUMMARY
// ==========================================

/*
Primitive Data Types:
- 1 number
- 2 string
- 3 boolean
- 4 undefined
- 5 null
- 6 bigint

Non-Primitive Data Types:
- object
- array
- function

Use "typeof" operator to check data type.
Example:
console.log(typeof age);
*/


// ------------------------------------------
// 7. SYMBOL
// ------------------------------------------

/*
Definition:
Symbol is a primitive data type used to create
unique identifiers.

Every Symbol value is unique,
even if they have the same description.
*/

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log("id1:", id1);
console.log("id2:", id2);

console.log("Are id1 and id2 equal?", id1 === id2);
// false (because every Symbol is unique)

console.log("type of id1:", typeof id1);


// ------------------------------------------
// SYMBOL USED IN OBJECT
// ------------------------------------------

/*
Symbols are often used as object property keys
to avoid name conflicts.
*/

let user = {
    name: "Ashish",
    age: 20
};

let uniqueId = Symbol("userId");

// Adding Symbol as a key
user[uniqueId] = 101;

console.log("user object:", user);
console.log("Access symbol value:", user[uniqueId]);
