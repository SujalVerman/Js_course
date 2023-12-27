"use strict";
const ps = require("prompt-sync");
const prompt= ps();

function MyFunc(a,b){
    return  1+(a+b)
}
let a= 2;
let b=3;
console.log(MyFunc(a,b))

