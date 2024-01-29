"use strict";
const ps = require("prompt-sync");
const prompt= ps();
let guess;
let attempt
function guessTheNumberGame(){
let number= Math.floor(Math.random()*100)+1;
do{
    guess = prompt("guess the number between (1 to 100):",)
    guess= Number.parseInt(guess)
    if(guess<number){
        console.log("Higher number please")
    }
    else if ( guess>number){
        console.log("Lower number please")
    }
    else{
        console.log("You guessed it")
    }
}while(guess!=number)
}
guessTheNumberGame();
