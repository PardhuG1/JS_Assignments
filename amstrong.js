//import readline-sync
const readline = require("readline-sync");
//console value read into the below variable num
let num = Number(readline.question("Enter three number digit")); //153
let org = num; //153
let addition =0; //0
while(org>0){
    remainder = org%10//153=3
    addition = addition+(remainder*remainder*remainder);//27
    org=parseInt(org/10)//15
}
if(addition==num){
    console.log(num,"is a amstrong")
}
else{
    console.log(num,"is not amstrong")
}