"use strict";

var promptedNum =  parseFloat(prompt("Please enter an odd number less than 100"));
while(promptedNum % 2 === 0 || promptedNum > 99) {
    promptedNum = parseFloat(prompt("Please enter an odd number between 1-100"));
}

for(let x=1; x <= 50; x+=2){

    if(x === promptedNum){
        console.log("Ew, the number we are skipping is " + promptedNum);
        continue;
    }
    console.log(x);
}
