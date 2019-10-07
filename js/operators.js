const rentcost = 3;

function rentTotal(days){
    return days * rentcost;
}

console.log(rentTotal(3) + rentTotal(5) + rentTotal(1));

const googlePay = 400;
const amazonPay = 380;
const facebookPay = 350;

function payTotal(hours,payRate){
    return hours * payRate;
}

console.log(payTotal(10, facebookPay)+ payTotal(6,googlePay) + payTotal(4,amazonPay));

function canEnroll(currentSchedule,classSchedule) {
    if(currentSchedule !== classSchedule){
        if (classSchedule < 28){
            return true;
        }
    }
}

function productOfferValid(membership,numItems,offerExp,todaysDate){
    if(membership === "Premium"){
        if(offerExp <= todaysDate){
            return true;
        }
    }
    else if(numItems > 2){
        if(offerExp <= todaysDate){
            return true;
        }
    }
    else{
        return false;
    }
}

var username = 'codeup';
var password = 'notastrongpassword';

var validUserPassword = true;

function validation(password,username){
    if(password.length < 5){
        validUserPassword = false;
    }
    if(password.includes(username)){
        validUserPassword = false;
    }
    if(username.length > 20){
        validUserPassword = false;
    }
    if(username[0] === " " || username[username.length-1] === " "){
        validUserPassword = false;
    }
    if(password[0] === " " || password[password.length-1] === " "){
        validUserPassword = false;
    }
    return validUserPassword;
}

console.log(validation(password, username));