"use strict";
const ps = require("prompt-sync");
const prompt= ps();
const a= prompt("What is your age?:");
if(a>=18){
    console.log("you can vote");
    }
else{
    console.log("you can't vote")
}