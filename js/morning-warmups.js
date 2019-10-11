(function () {



function sumOfTwo(x,y)
{
    return x + y;
}
// 1/19/19 Warm up area of a triangle


function areaOfTriangle(x,y,z){
    //var p is the parameter
    let p = x + y + z;
    //p is now half the parameter
    p = p/2;
    //returns the "Heron's formula"
    return (Math.sqrt(p*(p-x)*(p-y)*(p-z)))
}


function returnHi(){
    //returns string of Hi
    return "Hi";
}

function helloName(x){
    //returns string of Hi
    return "Hello "  + x  + "!";
}

function returnFirst(x){
    return x[0];
}

function areaOfEquilateralTriangle(side){

    return (areaOfTriangle(side,side,side));
}


function threeStrings(x1,x2,x3){
    return x1 + " " + x2 + " " +x3;
}

function allUpper(x){
    return x.toUpperCase();
}

function areaOfCircle(diameter){
    let r = diameter/2;
    return Math.PI*(r*r);
}

function perimeterOfQuad(side1,side2,side3,side4){
    return side1 + side2 + side3 + side4;
}

function returnArgument(x){
    return typeof x;
}

function positiveEven(x){
    let result = false;
    if(x % 2 === 0){
        if(x > 0){
            result = true;
        }
    }
    return result;
}
function enteredNumGreater5(){
    let enteredNum = parseInt(prompt("Please enter a number"));
    return enteredNum > 5;
    // if(enteredNum > 5){
    //     return "Hey that number is greater than 5!";
    // }
    // else if(isNaN(enteredNum)){
    //     return "That's not even a number brah";
    // }
    // else{
    //     return "That's a number less than 5 :(("
    // }
}

function helloThere(x = "stranger"){
    var confName = confirm("Would you like to enter a name?");
    if(confName === true){
        let x = prompt("Please enter a name");
        alert("Hello there, " + x);
        return "Hello there, " + x;
    }
    else{
        alert("Hello there, " + x);
        return "Hello there, " + x;
    }
}

function arrayLength(x){
    return x.length;
}

function getQuotient(x,y){
    if(typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x/y;
}

const name = "Colin";

console.log(returnHi());
console.log(helloName(name));
console.log(sumOfTwo(2,2));
console.log(areaOfTriangle(3,4,5));
console.log(returnFirst(name));
console.log(areaOfEquilateralTriangle(5));
console.log(threeStrings("colin", " is"," king"));
console.log(allUpper(name));
console.log(areaOfCircle(20));
console.log(perimeterOfQuad(1,2,3,4));
console.log(returnArgument(name));
console.log(positiveEven(12));
console.log(positiveEven(-1));
console.log(positiveEven(3));
console.log(positiveEven(-4));
console.log(enteredNumGreater5());
console.log(helloThere());
console.log(arrayLength([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(getQuotient(10, 2));
console.log(getQuotient(5));
console.log(getQuotient());
    console.log(getQuotient('Beavis', 'butthead'));
})();
