// Sample array
let numbers = [1, 2, 3, 4, 5];

// ============================
// 1️⃣ filter()
// Keeps only the elements that satisfy a condition
let evens = numbers.filter(n => n % 2 === 0); 
console.log("Even numbers:", evens); // [2, 4]

// ============================
// 2️⃣ map()
// Changes each element and returns a new array
let squares = numbers.map(n => n * n);
console.log("Squares:", squares); // [1, 4, 9, 16, 25]

// ============================
// 3️⃣ push()
// Adds element(s) at the end of the array
numbers.push(6);
console.log("After push:", numbers); // [1, 2, 3, 4, 5, 6]

// ============================
// 4️⃣ pop()
// Removes the last element
let last = numbers.pop();
console.log("Popped element:", last); // 6
console.log("After pop:", numbers);   // [1, 2, 3, 4, 5]

// ============================
// 5️⃣ reduce()
// Combines all elements into a single value
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum of numbers:", sum); // 15

// ============================
// 6️⃣ forEach()
// Runs a function for each element (does not return a new array)
numbers.forEach(n => console.log("Number:", n));

// ============================
// 7️⃣ find()
// Returns the first element that matches a condition
let firstEven = numbers.find(n => n % 2 === 0);
console.log("First even number:", firstEven); // 2

// ============================
// 8️⃣ includes()
// Checks if an array contains a value
console.log("Includes 3?", numbers.includes(3)); // true
console.log("Includes 10?", numbers.includes(10)); // false

// ============================
// 9️⃣ sort()
// Sorts the array (alphabetically or numerically with a function)
let sorted = [...numbers].sort((a, b) => b - a); // descending
console.log("Sorted descending:", sorted); // [5,4,3,2,1]

// ============================
// 🔟 slice()
// Returns a part of the array (does not change original)
let part = numbers.slice(1, 4); // index 1 to 3
console.log("Slice 1-4:", part); // [2,3,4]

// ============================
// 1️⃣1️⃣ splice()
// Removes or adds elements in the array
let removed = numbers.splice(2, 1); // remove 1 element at index 2
console.log("Removed:", removed); // [3]
console.log("After splice:", numbers); // [1,2,4,5]

// ============================
// 1️⃣2️⃣ join()
// Converts array to a string
let str = numbers.join(", ");
console.log("Joined string:", str); // "1, 2, 4, 5"

// ============================
// 1️⃣3️⃣ reverse()
// Reverses the array
numbers.reverse();
console.log("Reversed array:", numbers); // [5,4,2,1]
