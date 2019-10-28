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

function displayFiveElements(x){
    console.log(x[0]);
    console.log(x[1]);
    console.log(x[2]);
    console.log(x[3]);
    console.log(x[4]);
    return x;
}

function lengthOver8(x){
    return typeof x === "string" && x.length >= 8;
}

function countUpTo(x){
    for (let i = 1; i <= x; i++){
        console.log(i);
    }
    return "Counting is done";
}

function createPersonObject(name,age){
    var personObject = {
        name : name,
        age : age
    };

    return personObject;
}

function fizzBuzz(){
    for(let i=1;i<=100;i++){
        if(i % 15 ===0){console.log("FizzBuzz");}
        else if(i%5===0){console.log("Buzz");}
        else if(i%3===0){console.log("Fizz");}
        else{console.log(i);}
    }
}

function returnNum5fromString(stringfive){
    if(stringfive === "five"){
        return 5;
    }
    else{
        return "This is not the string of \'five\'";
    }
}

const name = "Colin";

    var shoppingCarts = [
        {
            apples: 8,
            bananas: 2,
            oranges: 4,
            grapes: 24
        }, {
            apples: 3,
            bananas: 6,
            oranges: 8,
            grapes: 12
        } , {
            apples: 0,
            bananas: 12,
            oranges: 0,
            grapes: 0
        } , {
            apples: 4,
            bananas: 0,
            oranges: 12,
            grapes: 10
        }
    ];

    function mostOranges(x){
        var result = {
            oranges : 0
        };
        for(let i = 0; i< x.length;i++){
            if(result.oranges < x[i].oranges)
                result = x[i];
        }
        return result;
    }

// console.log(returnHi());
// console.log(helloName(name));
// console.log(sumOfTwo(2,2));
// console.log(areaOfTriangle(3,4,5));
// console.log(returnFirst(name));
// console.log(areaOfEquilateralTriangle(5));
// console.log(threeStrings("colin", " is"," king"));
// console.log(allUpper(name));
// console.log(areaOfCircle(20));
// console.log(perimeterOfQuad(1,2,3,4));
// console.log(returnArgument(name));
// console.log(positiveEven(12));
// console.log(positiveEven(-1));
// console.log(positiveEven(3));
// console.log(positiveEven(-4));
// console.log(enteredNumGreater5());
// console.log(helloThere());
// console.log(arrayLength([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(getQuotient(10, 2));
// console.log(getQuotient(5));
// console.log(getQuotient());
//     console.log(getQuotient('Beavis', 'butthead'));
//     displayFiveElements([1,2,3,4,5]);
//     console.log(lengthOver8("abcdefgh"));
//     console.log(lengthOver8("abcdefghi"));
//     console.log(lengthOver8("abcdefg"));
//     console.log(countUpTo(50));
//     console.log(createPersonObject("Colin,24"));
//     fizzBuzz();
//     console.log(returnNum5fromString("five"));
//     console.log(returnNum5fromString(5));
//     console.log(10 % 3);
//     var hidden = 50;
    console.log(mostOranges(shoppingCarts));
})();
var array = ['John', 'Paul', 'George', 'Ringo', 'Santana'];

var shown = 50;
