const readline = require("readline-sync");
  
// Enter the number
let a = Number(readline.question("Enter 5 Numbers"));
let number = [];
for (let i = 0; i < a; ++i) {
  number.push(Number(readline.question()));
}
console.log(number);