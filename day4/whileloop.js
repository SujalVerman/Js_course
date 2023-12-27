"use strict";
const ps = require("prompt-sync");
const prompt= ps();

let a= prompt("Enter the number:")
a=Number.parseInt(a)
let i=0
while(i<a){
console.log(i)
    i++;
}