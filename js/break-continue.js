"use strict";

var promptedNum =  parseFloat(prompt("Please enter an odd number less than 100"));
while(promptedNum % 2 === 0 || promptedNum > 99) {
    promptedNum = parseFloat(prompt("Please enter an odd number between 1-100"));
}
