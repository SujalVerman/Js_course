"use strict";
const ps = require("prompt-sync");
const prompt= ps();
let a= prompt("Enter First Number:");
let b= prompt("Name of operation:");
let c= prompt("Enter Second Number:");
a= Number.parseInt(a);
c= Number.parseInt(c);
switch(b){
    case '+':
        console.log(a+c)
        break;
    case '-':
        console.log(a-c)
        break;
    case '*':
        console.log(a*c)
        break;
    case '/':
        console.log(a/c)
        break;
    default:
        console.log("Invalid Operations")
}

