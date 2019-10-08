"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


 function askForNum() {
    var wouldLikeNum = confirm("Would you like to enter a number?");
    if (wouldLikeNum === true) {
        var numEntered = parseInt(prompt("Please enter a number"));
        if (!isNaN(numEntered)) {
            if (numEntered % 2 === 0) {
                alert("This is an even number!");
            } else if (numEntered === 0) {
                alert("Your number is 0 >:(");
            } else {
                alert("This is an odd number... very odd indeed.");
            }
            alert("Your number plus 100 is " + (numEntered + 100));
            if (numEntered > 0) {
                alert("This is a postively postive number");
                return numEntered;
            } else if (numEntered === 0) {
                alert("Your number is 0 >:(");
                return numEntered;
            } else {
                alert("This number is negative... Bummer man");
                return numEntered;
            }
        } else {
            alert("THIS ISN'T A NUMBER!!!!!");
            return numEntered;
        }
    } else {
        alert("Well okay then...");
    }
}
/* ########################################################################## */



/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)


function analyzeColor(colorName){
    if(colorName === "red"){
        return "Red is the color of fire!!!";
    }
    else if(colorName === "orange"){
        return "Orange is the color of UT";
    }
    else if(colorName === "yellow"){
        return "Yellow is the color of Daisies";
    }
    else if(colorName === "green"){
        return "Green is the color of grass";
    }
    else if(colorName === "blue"){
        return "Blue is the color of the sky";
    }
    else if(colorName === "indigo"){
        return "Indigo is a color that is indigo";
    }
    else if(colorName === "violet"){
        return "Violet is the color of purple";
    }
    else{
        return "I am not programmed to know that color or phrase."
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColorSwitch(colorName){
    switch (colorName) {
        case "red":
            return "Red is the color of fire!!!";
        case "orange":
            return "Orange is the color of UT";
        case "yellow":
            return "Yellow is the color of Daisies";
        case "green":
            return "Green is the color of grass";
        case "blue":
            return "Blue is the color of the sky";
        case "indigo":
            return "Indigo is a color that is indigo";
        case "violet":
            return "Violet is the color of purple";
        default:
            return "I am not programmed to know that color or phrase."

    }
}

console.log(analyzeColorSwitch(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var chosenColor = prompt("What color would you like to choose?");
alert(analyzeColorSwitch(chosenColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum,total){
    if(luckyNum === 0){
        return total;
    }
    else if(luckyNum === 1){
        return total * .9;
    }
    else if(luckyNum === 2){
        return total * .75;
    }
    else if(luckyNum === 3){
        return total * .65;
    }
    else if(luckyNum === 4){
        return total * .5;
    }
    else if(luckyNum === 5){
        return 0;
    }
    else{
        return "That's not a lucky number so total is still: $" + total;
    }
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(1, 100));
console.log(calculateTotal(2, 100));
console.log(calculateTotal(3, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));
console.log(calculateTotal(6, 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var total = parseFloat(prompt("What is your total bill?"));
alert("Your lucky number is :" + luckyNumber + " So we took your total: $" + total + " and made it: $" +calculateTotal(luckyNumber,total));