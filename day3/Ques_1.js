"use strict";
const ps = require("prompt-sync");
const prompt= ps();
let a= prompt("Enter the number:")
a=Number.parseInt(a)
let sum=0;
for(let i=0;i<a;i++){
    sum += (i+1)
}
console.log("the sum of first " + a + " number is:", sum)