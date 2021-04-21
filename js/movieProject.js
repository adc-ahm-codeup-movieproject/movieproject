"use strict"


const ourMovieDB = "https://certain-careful-scent.glitch.me/movies"



let movieTitle = {
    title: "Hello",
    rating: "5",
    poster: "",
    year: "2002",
    genre: "Action, Horror, Sci-Fi",
    director: "Paul W.S. Anderson",
    plot: "A special military unit fights a powerful, out-of-control supercomputer and hundreds of scientists who have mutated into flesh-eating creatures after a laboratory accident.",
    actors: "Ryan McCluskey, Oscar Pearce, Indra Ové, Anna Bolt"} ;

let movieDbOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(movieTitle)
}

   fetch(ourMovieDB, movieDbOptions).then(function(response) {
       console.log(response);
       console.log(movieDbOptions)
       console.log(movieTitle)
   });

  // let url = "/posts";

let omdbApi = fetch("movieAPIToken")
    //  Parse the response into json
    .then((response)=>{return response.json()})
    // access the results property from the json Object
    .then((jsonData)=>{
        console.log(jsonData);
        return jsonData.results;
    })
    // iterate over the results array, and access poster url of each film
    .then((results)=>{
        results.forEach((film)=>console.log(`${film.poster}`))
    })
    // This runs if my fetch request fails. Try changing films to xfilms in the url and look at the error that gets passed. It isn't what you think it would be.
    .catch(error => console.log('Error getting films.', error));

// Notice how this log runs before the we log the results.
console.log('omdbApi Promise', omdbApi);