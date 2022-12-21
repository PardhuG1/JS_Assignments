const readline = require("readline-sync");
let a = Number(readline.question("Enter the number:"));//1227
var sum = 0;//0
var z = a;//1227
    while(a > 0)
    {
      let b = a % 10;//7-2-2-1
      sum = (sum *10) + b;//7-2-2-1
      a = parseInt(a / 10);//122-12-1
    }
    console.log(sum);