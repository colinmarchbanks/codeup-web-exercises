"use strict";
/*
* WHILE LOOPS
*/

// 1. Create a while loop that counts to 100 in increments of ten:
// (10...20...30...)
var counter = 0;
while(counter < 101){
  console.log(counter);
  counter += 10;
}

// 2. Create a while loop that counts backwards from 50 - 1

var reverseCount = 50;
while(reverseCount>0){
    console.log(reverseCount);
    reverseCount --;

}
var myQuestion = true;

// 3. Create a while loop that asks the user for a confirmation when asked: "Would you like to exit?"
// Store the confirm in the myQuestion variable.
// Try running this. What happens?

// while(!myQuestion){
//     myQuestion = confirm("Would you like to exit?");
// }


/*
* DO-WHILE LOOPS
*/


// 4. Refactor question 3 using a do-while loop.
// What is the behavior this time?

do{
    myQuestion = confirm("Would you like to exit?");
}while(!myQuestion);

// 5. Create a do-while loop that prompts the user for a color and continues
// to prompt until the string passed is "blue"
var myColor;
do{
    myColor = prompt("Please enter a color");
}while(myColor !== "blue");

// 6. Refactor question 1 using a do-while loop.
var countDoWhile = 0;

do{
    console.log(countDoWhile);
    countDoWhile += 10;
}while(countDoWhile < 100);
console.log(countDoWhile);
/*
* FOR LOOPS
*/

var myArray = ["apples", "oranges", "bananas", "grapes", "pineapples"];

// 7. Create a for loop that iterates over this array and logs out each
// element to the console

for(let x = 0;x<myArray.length;x++){
    console.log(myArray[x]);
}

// 8. You are going to use a for loop to complete the FizzBuzz exercise.
// Your program should count up to 100.
// For numbers divisible by 3, log "Fizz"
// For numbers divisible by 5, log "Buzz"
// If divisible by 3 and 5, log "FizzBuzz"
// All other cases, just log the number.

for(let x = 1; x<=100; x++){
    if(x % 3 === 0 && x % 5 === 0) console.log("FizzBuzz");
    else if(x % 3 === 0) console.log("Fizz");
    else if(x % 5 === 0) console.log("Buzz");
    else console.log(x);}

// 9. Refactor question 1 using a for-loop

for(let x = 0; x <= 100; x+= 10){
    console.log(x);
}


// 10. Write a for-loop

// for(initialize;condition;increment)


/*
* BREAK AND CONTINUE
*/

// 11. Refactor question 1: using a 'break', stop the counting once it hits 70.

// 12. Refactor question 2: using a 'continue', skip numbers 50-26 and only
// log 25 - 1.

