"use strict";
const ps = require("prompt-sync");
const prompt= ps();

let name= "harry"
console.log(name.length)

console.log(name.toUpperCase())

console.log(name.toLowerCase())

console.log(name.slice(1,4))

console.log(name.slice(1))

let friend = "Wolf killer"
let friend1= "tiger"
let friend2= "lion"
console.log(friend.replace("Wolf","happy"))

let friend3 = "loop"
let friend4= "accent"
let friend5= "part"
console.log(friend3.concat(friend4 + "pop"))

let name2= "    momo   "
console.log(name2.trim()) // removes the white spaces

// print any string using for loop

var fr= prompt("Name please:")
for(var i=0;i<fr.length;i++){

console.log( fr[i])

}