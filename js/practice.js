"use strict";


var bread = [
    "bread1",
    "bread2",
    "bread3",
    "bread4"
];

var filling = [
    "filling1",
    "filling2",
    "filling3",
    "filling4"
];

function createSandwichObjects(breads,fillings){
    let sandwichArr = [];
    for(let x = 0; x<breads.length;x++){
        let sandwichObject = {};
        sandwichObject.filling = fillings[x];
        sandwichObject.bread = breads[x];
        sandwichArr.push(sandwichObject);
        console.log(sandwichObject);
    }
    return sandwichArr;
}

console.log(createSandwichObjects(bread, filling));
