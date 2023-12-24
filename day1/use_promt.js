"use strict";
const ps = require("prompt-sync");
const prompt= ps();

let a= prompt("what is your age?:");  
a= Number.parseInt(a);  // (parseInt) is use to change the string to number

    console.log(typeof(a));
    
