"use strict";
const ps = require("prompt-sync");
const prompt= ps();
let a=prompt("Enter the number:")
a=Number.parseInt(a)
let b=prompt("Enter the number:")
b=Number.parseInt(b)
const sum=(a,b)=>{
    let c= a+b
    return c
}
let j=sum(a,b);
console.log(j)


// console.log(c)
