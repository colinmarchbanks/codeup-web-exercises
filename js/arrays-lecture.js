"use strict";
console.log("Welcome to intro to arrays");
/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data



/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`
var pies = [];
console.log(pies);

//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
pies = ["apple", "cherry", "key lime", "huckleberry"];
console.log(pies);

// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
var shapes =   ['square', 'rectangle', 'circle', 'triangle'];
console.log(shapes);

// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
var instructors =  ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];
console.log(instructors);

// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
var daysOfTheWeek =   ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
console.log(daysOfTheWeek);

// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable
var favoriteFoods = ['cold chinese food', 'cereal with water', 'other disgusting things Bryan might like']
console.log(favoriteFoods);

/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

// //We can also count the length of an array by using the `.length` property
// //
// // // TODO TOGETHER: Log the length of shapes array
// // console.log(shapes.length);
// // // TODO: console.log the length of the instructors array
// // console.log(instructors.length);
// // // TODO: console.log the length of the daysOfTheWeek array
// // console.log(daysOfTheWeek.length);
// // // TODO: console.log the length of the favoriteFoods array
// // console.log(favoriteFoods.length);
//
//
// /* ***************************************************************
// * 				ACCESSING ARRAY ELEMENTS
// *************************************************************** */
// // ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.
//
// // TODO TOGETHER: What do we expect the following to output?
// // 	console.log(shapes[0]);
// // 	console.log(shapes[1]);
// // 	console.log(shapes[2]);
// // 	console.log(shapes[3]);
// // 	console.log(shapes[4]);
//
// // TODO: console.log each element of the instructors array
// for(let x =0; x<instructors.length;x++){
//     console.log(instructors[x]);
// }
// // TODO: console.log the first three elements of the daysOfTheWeek array
// console.log(daysOfTheWeek[0]);
// console.log(daysOfTheWeek[1]);
// console.log(daysOfTheWeek[2]);
// // TODO: console.log the first three elements of the favoriteFoods array
// console.log(favoriteFoods[0]);
// console.log(favoriteFoods[1]);
// console.log(favoriteFoods[2]);
//
// // TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array
//
// function returnLastElement(x){
//     return x[x.length-1];
// }
//
// console.log(returnLastElement(instructors));
// console.log(returnLastElement(shapes));
//
// /* ***************************************************************
// * 					ITERATING ARRAYS
// *************************************************************** */
// //  TODO TOGETHER: Log each element of the shapes array
// //
// // for(let x =0; x<shapes.length;x++){
// //     console.log(shapes[x]);
// // }
// //
// // // TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape
// // for(let x =0; x<shapes.length;x++){
// //     console.log(shapes[x]);
// // }
//
//
// // TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.
//
// for(let x = 0; x <shapes.length;x++){
//     if(shapes[x] === 'rectangle'){
//         alert('Hey, thats a pretty good shape ' + shapes[x]);
//     }
//     console.log(shapes[x]);
// }
//
// // TODO: What happens if we change var i = 1? or var i = 2;
// // its skip the first couple of indexs
// // TODO: What are benefits of using loops to iterate?
// //its faster and it call go through the entire loop in just a couple of lines
// // TODO: How does the loop know when to stop iterating?
// //if you use array length as the condition statement then it will always end on the last element
// // TODO: Using a for loop, iterate through the instructors array and console.log each instructor
// for(let x = 0;x<instructors.length;x++){
//     console.log(instructors[x]);
// }
// // TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week
// for(let x = 0; x<daysOfTheWeek;x++){
//     console.log(daysOfTheWeek[x]);
// }
// // TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food
// for(let x = 0; x<favoriteFoods;x++){
//     console.log(favoriteFoods[x]);
// }
// // TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor. If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"
//
// for(let x = 0;x<instructors.length;x++){
//     var posStatement = "Hey, i know " + instructors[x];
//     switch(instructors[x]){
//         case 'sophie':
//             alert(posStatement);
//             break;
//         case 'vivian':
//             alert(posStatement);
//             break;
//         case 'david':
//             alert(posStatement);
//             break;
//         case 'justin':
//             alert(posStatement);
//             break;
//         default:
//             alert("I haven't had class with " + instructors[x] + " yet!");
//     }
// }


/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array
shapes.forEach(function (element) {
    console.log(element);
});

// TODO TOGETHER: Using a for each loop, console.log each element from the following array:

pies.forEach(function (element) {
    console.log(element);
});
// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor
instructors.forEach(function (element) {
    console.log(element);
});
// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week
daysOfTheWeek.forEach(function (element) {
    console.log(element);
});
// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food
favoriteFoods.forEach(function (element) {
    console.log(element);
});
