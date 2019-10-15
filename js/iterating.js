    (function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["Colin", "Ethan", "Ken", "Amber"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("This is the length of the array \"names\" : " + names.length);


        /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

        console.log(("This is the first index: " + names[0]));
        console.log(("This is the second index: " + names[1]));
        console.log(("This is the third index: " + names[2]));
        console.log(("This is the fourth index: " + names[3]));

        /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for(let x = 0 ; x <= 3; x++){
        console.log("This is the name: " + names[x] + " at the index of " + x);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function (name,index) {
        console.log("This is a name: " + name + " at the index of " + index);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


    function displayFirst(x){
        console.log("The first element in the array is: " + x[0]);
    }

    function displaySecond(x){
        console.log("The second element in the array is: " + x[1]);
    }

    function displayLast(x){
        console.log("The last element in the array is: " + x[x.length-1]);
    }

    displayFirst(names);
    displaySecond(names);
    displayLast(names);
})();
