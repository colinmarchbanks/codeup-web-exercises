"use strict";

let promptedNum = 99999;
while(promptedNum % 2 === 0 || promptedNum > 99) {
    let promptedNum = parseFloat(prompt("Please enter an odd number between 1-100"));
}
