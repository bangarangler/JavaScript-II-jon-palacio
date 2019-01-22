// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
//function printMyName(first, last) {
//let sentence = `Hello, my name is`;

//function wholeName() {
//return `${sentence} ${first} ${last}`;
//}

//return wholeName();
//}

//console.log(printMyName("Jon", "Palacio"));
// ==== Challenge 2: Create a counter function ====
//let count = 0;
//const counter = inc => {
//count++;
//return count;
//// Return a function that when invoked increments and returns a counter variable.
//};
//console.log(counter());
//console.log(counter());
//console.log(counter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let count = 0;
const counterFactory = {
  name: "jon",
  skills: function() {
    count++;
  },
  patience: function() {
    count--;
  }

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
counterFactory.skills();
counterFactory.skills();
counterFactory.patience();
console.log(count);
