let age = 18;

if (age ) {
  console.log("You are an adult");
} else {
  console.log("You are not an adult");
}

let marks = 75;

if (marks >= 0) {  // main condition

  if (marks > 100) {   // nested condition
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
