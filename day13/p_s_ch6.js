"use strict";
const ps = require("prompt-sync");
const prompt= ps();

// Ques 1

// let a= prompt("Enter the number");
// a = Number.parseInt(a)
// const canDrive =(a)=>{
//     return a>=18?true:false
// }
// if(canDrive(a)){
//     alert("you can drive")
// }
// else{
//     alert("you can't drive")    // you can only run this in html by script tag
// }

//Ques 2

// let runAgain = true;
//         while(runAgain){
//             let a = prompt("Enter the number");
//         a = Number.parseInt(a)
//         const canDrive = (a) => {
//             return a >= 18 ? true : false
//         }
//         if (canDrive(a)) {
//             alert("you can drive")
//         }
        
//         else {
//             alert("you can't drive")
//         }
//         runAgain= confirm("Do you wanna check again?")   // run it in html
                                                            
//    }      

// Ques 3

// let runAgain = true;
//         while(runAgain){
//             let a = prompt("Enter Your Age");
//         a = Number.parseInt(a)
//         const canDrive = (a) => {
//             return a >= 18 ? true : false
//         }
//         if (canDrive(a)) {
//             alert("you can drive")
//         }
//         else if(a<0){
//             console.error("Please enter a valid age")
//             break;
//         }
//         else {
//             alert("you can't drive")
//         }
//         runAgain= confirm("Do you wanna check again?")   // run it in html and the error will shown in console of browser

//     }

// Ques 4

// let number = prompt("Enter the number")
// number = Number.parseInt(number)
// if(number>4){
//     location.href ="https://google.com" // run it in html
// }
 let color = prompt("Enter the color name")
 if(color==color){
    document.body.style.background =color
 }
