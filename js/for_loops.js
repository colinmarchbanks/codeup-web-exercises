"use strict";

// var inputForChart = parseFloat(prompt("Please enter a number that you'd like to see the multiplication chart for, goes up to 12"));
// for(var mult = 1; mult<=12; mult++){
//     console.log(inputForChart + " * " + mult + " = " + inputForChart*mult);
// }

for(let x = 0; x <= 10; x++){
var numForLoop = Math.floor(Math.random() * 180) + 20;
if(numForLoop % 2 === 0){
    console.log(numForLoop + " is an even number!");
}
else{
    console.log(numForLoop + " is an odd number!");
}
}
var output = "";
for(let x = 1; x <10 ; x++){
    for(let y = 0; y < x ; y++){
        output += x;
    }
    console.log(output);
    output = "";
}

for(let x = 100; x >0 ; x -= 5){
    console.log(x);
}
