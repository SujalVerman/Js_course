"use strict";
const ps = require("prompt-sync");
const prompt= ps();

let obj={
    shiv:12,
    doop:2,
    ravi:9,
}
for(let a in obj){
    console.log("Marks of "+a+" is:",obj[a])
}