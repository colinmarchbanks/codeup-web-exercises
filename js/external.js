"use strict";

console.log("Hello from External Javascript");
alert("Welcome to my website!");
var color = prompt("What is you're favorite color???");
alert("Awesome " + color + " is my favorite too!");

var movieRentCost = parseInt(prompt("How much does it cost to rent a movie per day?"));
var littleDays = parseInt(prompt("How many days did you rent the Little Mermaid?"));
var bbDays = parseInt(prompt("How many days did you rent the Brother Bear?"));
var hercDays = parseInt(prompt("How many days did you rent the Hercules?"));

function rentTotal(days){
    return days * movieRentCost;
}

alert("The total cost of the rented movies is " + (rentTotal(littleDays) + rentTotal(bbDays) + rentTotal(hercDays)));

var googPay = parseInt(prompt("How much does Google pay you?"));
var googHours = parseInt(prompt("How many hours did you work for Google this week?"));
var zonPay = parseInt(prompt("How much does Amazon pay you?"));
var zonHours = parseInt(prompt("How many hours did you work for Amazon this week?"));
var fbPay = parseInt(prompt("How much does FaceBook pay you?"));
var fbHours = parseInt(prompt("How many hours did you work for FaceBook this week?"));

function payTotal(hours,payRate){
    return hours * payRate;
}

alert("The total amount payed from the three contracting jobs for the week is " + (parseInt(payTotal(googHours, googPay))+ parseInt(payTotal(fbHours,fbPay)) + parseInt(payTotal(zonHours,zonPay))));

var numStudents = parseInt(prompt("How many students are currently in the class?"));
var classTime = prompt("When does this class start?");
var studentTime = prompt("When do your classes start?");

function canEnroll(currentSchedule,classSchedule,students) {
    if(currentSchedule !== classSchedule){
        if (students < 125){
            return true;
        }
    }
}

alert("Can you enroll in this class? " + canEnroll(classTime,studentTime,numStudents));

var premium = confirm("Are you a premium member?");
var numItems = parseInt(prompt("How many items are in your cart?"));
var offerExp = parseInt(prompt("When does the offer expire?"));
var todaysDate = parseInt(prompt("What's today's date?"));

function productOfferValid(premMembership,numItems,offerExp,todaysDate){
    if(premMembership === true){
        if(offerExp >= todaysDate){
            return true;
        }
    }
    else if(numItems > 2){
        if(offerExp >= todaysDate){
            return true;
        }
    }
    else{
        return false;
    }
}

alert("Is the offer valid?? " + productOfferValid(premium,numItems,offerExp,todaysDate));