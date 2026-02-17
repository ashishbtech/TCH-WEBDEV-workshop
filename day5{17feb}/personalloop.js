//personal notes by me 


// ======================================
// LOOPS AND CONDITIONS REVISION
// ======================================

// ----------------- FOR LOOP -----------------

console.log("For Loop: Print 1 to 10");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("\nFor Loop: Print 10 to 1");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("\nFor Loop: Even numbers 1 to 100");
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("\nFor Loop: Table of 2");
for (let i = 1; i <= 10; i++) {
  console.log("2 x " + i + " = " + 2 * i);
}

// ----------------- WHILE LOOP -----------------

console.log("\nWhile Loop: Print 1 to 10");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log("\nWhile Loop: Print 10 to 1");
i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

// ----------------- DO...WHILE LOOP -----------------

console.log("\nDo...While Loop: Print 1 to 10");
i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

console.log("\nDo...While Loop: Print 10 to 1");
i = 10;
do {
  console.log(i);
  i--;
} while (i >= 1);

// ----------------- CONDITIONAL STATEMENTS -----------------

console.log("\nConditional Statements Example (Grades)");

let marks = 75;

if (marks >= 0) { // main condition
  if (marks > 100) { // nested condition
    console.log("Invalid marks");
  } else if (marks >= 90) {
    console.log("Grade A");
  } else if (marks >= 80) {
    console.log("Grade B");
  } else if (marks >= 70) {
    console.log("Grade C");
  } else if (marks >= 60) {
    console.log("Grade D");
  } else {
    console.log("Fail");
  }
} else {
  console.log("Invalid marks");
}

// ----------------- TABLE OF 19 -----------------

console.log("\nTable of 19");
for (let i = 1; i <= 10; i++) {
  console.log("19 x " + i + " = " + 19 * i);
}

// ----------------- PRINT 100 TO 0 -----------------

console.log("\nFor Loop: Print 100 to 0");
for (let i = 100; i >= 0; i--) {
  console.log(i);
}


// -------------------Break-----------------------
console.log("Break Example: Stop at 5");

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;  // exit the loop
  }
  console.log(i);
}


// -------------------continue--------------------
console.log("Continue Example: Skip 5");

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;  // skip this iteration
  }
  console.log(i);
}

//----------------------Switch Case---------------------



//---format


switch(expression) {
  case value1:
    // code to execute if expression === value1
    break;
  case value2:
    // code to execute if expression === value2
    break;
  default:
    // code to execute if none of the cases match
}


//-------Example 1: Day of the Week--------

let day = 3;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}


//-----------Example 2: Grade Checker--------



let grade = "B";

switch(grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("You can do better");
    break;
  case "D":
    console.log("Needs improvement");
    break;
  default:
    console.log("Invalid grade");
}

