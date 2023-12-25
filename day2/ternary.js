"use strict";
const ps = require("prompt-sync");
const prompt= ps();
const a= prompt("In which year you are in?:");

if(a<=0){
    console.log("Wrong Input")
}
if(a==1){
    console.log("You are in First year")
}
else if(a==2){
    console.log("you are in Second year")
}
else if(a>=9 && a<18){
    console.log("you are in Third year")
}
else if(a>=18 && a<=50){
    console.log("you are in Fourth year")
}
else{
    console.log("you are Passed out")
}
console.log("You are",(a>=2?"senior":"passed out or Invalid Input")) // "?" it shows yes or not