console.log("Ashish Kushwaha");

let a =10;
let b = 50;
console.log(a+b);

// ===============================
// JAVASCRIPT VARIABLES
// var, let, const
// ===============================


// ---------------------------------
// 1. VAR (Old way - avoid in modern JS)
// ---------------------------------

var name = "Ashish";
console.log("var name:", name);

// var can be REDECLARED
var name = "Suryanshu";
console.log("var redeclared name:", name);

// var can be UPDATED
name = "Ansh [ratap singh";
console.log("var updated name:", name);

// var is FUNCTION scoped (not block scoped)
if (true) {
    var city = "Jhansi";
}

console.log("var city outside block:", city); 
// Still accessible outside block


// ---------------------------------
// 2. LET (Modern way - recommended)
// ---------------------------------

let age = 20;
console.log("let age:", age);

// let CANNOT be redeclared
// let age = 25;  Error

// let can be UPDATED
age = 21;
console.log("let updated age:", age);

// let is BLOCK scoped
if (true) {
    let marks = 90;
    console.log("let marks inside block:", marks);
}

// console.log(marks);  Error (not accessible outside block)


// ---------------------------------
// 3. CONST (Used for fixed values)
// ---------------------------------

const country = "India";
console.log("const country:", country);

// const CANNOT be redeclared
// const country = "USA";  Error

// const CANNOT be updated
// country = "Canada";  Error

// const must be initialized while declaring
// const pi;  Error

const pi = 3.14;
console.log("const pi:", pi);


// ---------------------------------
// IMPORTANT: const with objects
// ---------------------------------

const student = {
    name: "Ashish",
    age: 21
};

// We CANNOT reassign the whole object
// student = {};  Error

// But we CAN change properties inside object
student.age = 22;
console.log("Updated student object:", student);


// ---------------------------------
// SUMMARY
// ---------------------------------

/*
var:
- Can redeclare
- Can update
- Function scoped
- Avoid using in modern JS

let:
- Cannot redeclare
- Can update
- Block scoped
- Best for changing values

const:
- Cannot redeclare
- Cannot update
- Block scoped
- Best for fixed values
*/

let personName = "Ashish";

let anotherName = personName;  // copy is created

anotherName = "Ashish Kushwaha";

console.log("personName:", personName);
console.log("anotherName:", anotherName);

