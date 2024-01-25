// practice set from chapter 5

// Ques 1  

// "use strict";
// const ps = require("prompt-sync");
// const prompt= ps();

// let arr = [1,2,3,4]
// let a = prompt("Enter an Array")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)  // Output:- [1,2,3,4,5]  if we give 5 

// Ques 2

// "use strict";
// const ps = require("prompt-sync");
// const prompt= ps();
// let arr = [1,2,3,4]
// let a;
// do{
// a = prompt("Enter an Array")
// a = Number.parseInt(a)
// arr.push(a)
// }while(a!=0);
// console.log(arr)  // Output:- it will add the numbers unltill we type "0"

//Ques 3

// let a =[1,20,3,40,50]
// let b = a.filter((s)=>{
//     return s%10==0
// })
// console.log(b)  // Output:- It will print [20, 40, 50] which is divisible by 10

//Ques 4

// let a =[1,20,3,40,50]
// let b =a.map((element)=>{
//     return element*element
// });
// console.log(b) // it will print the square of the given array

//Ques 5

"use strict";
const ps = require("prompt-sync");
const prompt= ps();

let fact = 1
let i;
let a = prompt("Enter the Number")
a = Number.parseInt(a)
for( i =1;i<=a;i++){
    fact=fact*i
}
console.log(fact) // Output:- It will show the factorial of the given number
