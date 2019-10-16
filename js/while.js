"use strict";

let x = 1;
while(x < 65536){
    console.log(x *= 2);
}

var allCones = Math.floor(Math.random() * 50) + 50;
while(allCones >= 0 ){
    let customerWants = Math.floor(Math.random() * 5) + 1;
    console.log("Miss icecream lady has " + allCones + " left!");
    if(allCones === 0){
        console.log("I GOT NO MORE ICECREAM KIDDOS, GO AWAY!");
        break;
        }
    else if(allCones >= customerWants){
        allCones -= customerWants;
    }
    else{
        console.log("I cannot sell you " + customerWants + " cones, I only have " + allCones + " left");
    }

}
