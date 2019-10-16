(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // hint: area = pi * radius^2

            return Math.PI * Math.pow(circle.radius, 2); // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if(doRounding){
                console.log(Math.round(circle.getArea()));
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            else
                console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
