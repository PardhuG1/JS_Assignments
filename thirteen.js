//import readline-sync
const readline = require("readline-sync");

// Enter the number
let n1 = Number(readline.question("Num1:"));
let n2 = Number(readline.question("Num2:"));
let n3 = Number(readline.question("Num3:"));
let n4 = Number(readline.question("Num4:"));
let n5 = Number(readline.question("Num5:"));

if (n1 > 0 && n1 % 2 == 0) {
  console.log(n1 + " is a even number.");
}
if (n2 > 0 && n2 % 2 == 0) {
  console.log(n2 + " is a even number.");
}
if (n3 > 0 && n3 % 2 == 0) {
  console.log(n3 + " is a even number.");
}
if (n4 > 0 && n4 % 2 == 0) {
  console.log(n4 + " is a even number.");
}
if (n5 > 0 && n5 % 2 == 0) {
  console.log(n5 + " is a even number.");
}
