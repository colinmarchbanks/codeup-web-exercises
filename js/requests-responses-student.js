$(document).ready(function(){
    "use strict";
    console.log("Intro to AJAX!");

    // /*********************************************
    //  *              INTRO TO AJAX
    //  ******************************************** */
    //
    // /*
    //  * TO DO TOGETHER: Let's make our first AJAX request. Generate a new Hookbin
    //  * endpoint, then query it for a username...
    //  */
    //
    // // console.log($.ajax('https://hookb.in/8Px8RKdwJXs86RgkGJPR?username=Bob'));
    //
    // /*
    //  * TO DO TOGETHER: For this next one, we'll send over some data. Add the
    //  * following JavaScript Object to your Hookbin AJAX request:
    //  */
    //
    // var person = {
    //     type: "POST",
    //     data: {
    //         first: "Jesse",
    //         last: "Pinkman",
    //         location: "unknown"
    //     }
    // };
    //
    // // console.log($.ajax('https://hookb.in/8Px8RKdwJXs86RgkGJPR', person));
    //
    // /*
    //  * TO DO: Refactor the first example using a GET request object instead of
    //  * appending a query to the url.
    //  */
    //
    // var person1 = {
    //     type: "GET",
    //     data: {
    //         username : "bob"
    //     }
    // };
    //
    // // console.log($.ajax('https://hookb.in/8Px8RKdwJXs86RgkGJPR', person1));
    // /*********************************************
    //  *              REQUESTS and RESPONSES
    //  ******************************************** */
    //
    // /*
    //  * TO DO TOGETHER: Now, let's see how we can use AJAX requests to communicate with an
    //  * API and get data back. Uncomment the line below.
    //  */
    //
    // // $.ajax("https://pokeapi.co/api/v2/pokemon").done(function(data){
    // //     console.log(data);
    // // });
    //
    // /*
    //  * TO DO: Look up the Star Wars API and make a similar request that would
    //  * return a list of all Star Wars films.
    //  */
    // var starwarsfilms = $.ajax("https://swapi.co/api/films").done(function(data){
    //     console.log(data);
    // });
    // /*
    //  * That's fine and dandy, but what if we have a local JSON file and
    //  * want to request data from that? We can! The URL will be the path to
    //  * the JSON file.
    //  *
    //  * TO DO TOGETHER: Let's make a request to the books inventory we saved
    //   * previously.
    //  */
    //
    // // var myBooks = $.ajax("./data/books.json");
    // // myBooks.done(function (data) {
    // //     console.log(data);
    // // });
    // /*
    //  * TO DO TOGETHER: What if we want to display a message if this AJAX request
    //  * fails?
    //  */
    //
    //
    // /*
    //  * TO DO TOGETHER: How about a function that always runs whether the request
    //  * fails or not?
    //  */
    //
    // /*
    //  * TO DO: Refactor your Star Wars API request to log a message that says
    //  * "Something wrong with your request..." if it fails.
    //  */
    //
    // starwarsfilms.fail(function () {
    //     console.log("Unable to retrieve star wars films")
    // });
    //
    // /*
    //  * TO DO: Refactor your Star Wars API request to log a message that says
    //  * "...loading" whether the request fails or not.
    //  */
    //
    // starwarsfilms.always(function () {
    //     console.log("Trying to retrieve the star wars film list")
    // });
    //
    // /*
    //  * TO DO TOGETHER: Create a Star Wars API request that queries for "A
    //  * New Hope" and store this request in a variable.
    //  *
    //  * Take a look at the object that is being returned. Write a console log
    //   * that displays the director of the film.
    //  */
    //
    // var mymovie = $.ajax("https://swapi.co/api/films",{
    //     type : "GET",
    //     data: {
    //         "search":"A New Hope"
    //     }
    // });
    //
    // mymovie.done(function (data) {
    //     console.log("The director for the movie is: " + data.results[0].director);
    // });
    //
    // mymovie.fail(function () {
    //     console.log("Unable to retrieve film")
    // });
    //
    //
    //
    // /*
    //  * TO DO: Create a new variable that makes a similar request. Search for
    //  * "The Force Awakens" and console log its release date.
    //  */
    //
    // var releaseDate = $.ajax("https://swapi.co/api/films",{
    //     type : "GET",
    //     data: {
    //         "search":"The Force Awakens"
    //     }
    // });
    //
    // releaseDate.done(function(data){
    //     console.log(data.results[0].release_date)
    // });
    //
    // /*
    //  * TO DO: Make a request to books.json. Return the author of "The
    //  * Canterbury Tales."
    //  */
    //
    // var canterburyTales = $.ajax('./data/books.json');
    // /*********************************************
    //  *              GET and POST SHORTHAND
    //  ************************** ****************** */
    //
    // canterburyTales.done(function (data) {
    //     data.forEach(function (object) {
    //         if(object.author === "Geoffrey Chaucer"){
    //             console.log(object);
    //         }
    //     });
    //     console.log(data[17].author);
    // });
    //
    // /*
    //  * TO DO TOGETHER: Let's take a look at our AJAX requests so far and see
    //  * how we can refactor them with the GET and POST shorthand.
    //  *
    //  * Remember, this isn't necessary. It's up to you to decide which
    //  * syntax to use. (: At the end of the day, what we are doing is making
    //  * a request to a server!
    //  */
    //
    // /*
    //  * TO DO TOGETHER: There's some additional refactoring we can do. We can
    //  * break up our callback methods on an AJAX request.
    //  *
    //  * We can also declare named functions to pass in to these methods.
    //  */

    /*********************************************
     *              AJAX and HTML
     ******************************************** */

    /*
     * TO DO TOGETHER: Make a request to books.json and append all book
     * titles to your html. You may need to create a div and assign a
     * class/id to target it.
     */
   function generateBooks(){
       var requestBooks = $.ajax("./data/books.json");
        requestBooks.done(function (data) {
        console.log(data);
        $.each(data,function(index,book){
            $('.main').append(book.title + '<br>');
        });
    });

    requestBooks.fail(function () {
        console.log("This request has failed");
    })
   }
    /*
     * TO DO: Add your favorite book to the end of books.json.
     */
    generateBooks();


    /*
     * Bonus: Create a button the refreshes the contents of your html
     * without refreshing the page.
     */

   $('#refresh').click(function(){
       $('.main').html(" ");
       generateBooks();
   })

});
