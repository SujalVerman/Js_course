"use strict";
const ps = require("prompt-sync");
const prompt= ps();
// Ques1: Write the program to print the marks of a student in an object using for loop obj ={harry:98, rohan:70, Akash:7}
let obj ={
    harry:98,
    rohan:70, 
    Akash:7
}
for(let a =0;a< Object.keys(obj).length;a++){
    console.log("The marks of "+ Object.keys(obj)[a] +" is: "+ obj[Object.keys(obj)[a]])
}

// Ques2: Write a program to q1 using for in loop 

for(let i in obj){
    console.log("The marks of "+[i] +" is: "+ obj[i])
}

// Ques3: Write a program to find correct number from the users

let cn=23;
let i
while(i!=cn){
    i= prompt("Enter the number:")
}
console.log("You Guessed it")

// Ques4: Write a program to find mean of 5

const mean=(a, b, c, d)=>{
    return (a+b+c+d)/4
}
console.log(mean(4, 5 ,6 ,7))