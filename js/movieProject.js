"use strict"


const ourMovieDB = "https://certain-careful-scent.glitch.me/movies"

const omdbUrl = " http://www.omdbapi.com/?apikey="

let moviesList = document.querySelector('#movies');


// let movieDbOptions = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(movieTitle)
// }
//
//    fetch(ourMovieDB, movieDbOptions).then(function(response) {
//        console.log(response);
//        console.log(movieDbOptions)
//        console.log(movieTitle)
//    });

  // let url = "/posts";

// let omdbApi = fetch(omdbUrl+movieAPIToken)
//     //  Parse the response into json
//     .then((response)=>{return response.json()})
//     // access the results property from the json Object
//     .then((jsonData)=>{
//         console.log(jsonData);
//         return jsonData.results;
//     })
//     // iterate over the results array, and access poster url of each film
//     .then((results)=>{
//         results.forEach((s)=>console.log(`${s.poster}`))
//     })
//     // This runs if my fetch request fails. Try changing films to xfilms in the url and look at the error that gets passed. It isn't what you think it would be.
//     .catch(error => console.log('Error getting films.', error));

// Notice how this log runs before the we log the results.
// console.log('omdbApi Promise', omdbApi);



// $("#datepicker").datepicker({
//     format: " yyyy",
//     viewMode: " years",
//     minViewMode: " years"
// });

//Below: Scraping OMDB for values on the AFI 100 Movies Array


let afiTopStr = "12 Angry Men,2001: A Space Odyssey,A Clockwork Orange,A Night At The Opera";


// // All The President's Men,American Graffiti,Annie Hall,Apocalypse Now,Ben-Hur,Blade Runner,Bonnie And Clyde,Bringing Up Baby,Butch Cassidy And The Sundance Kid,Cabaret,Casablanca,Chinatown,Citizen Kane,City Lights,Do The Right Thing,Double Indemnity,Dr. Strangelove,Duck Soup,E.T,Easy Rider,Forrest Gump,Gone With The Wind,Goodfellas,High Noon,In The Heat Of The Night,Intolerance,It Happened One Night,It'S A Wonderful Life,Jaws,King Kong,Lawrence Of Arabia,M*A*S*H,Midnight Cowboy,Modern Times,Mr. Smith Goes to Washington,Nashville,Network,North By Northwest,On The Waterfront,One Flew Over The Cuckoo's Nest,Platoon,Psycho,Pulp Fiction,Raging Bull,Raiders Of The Lost Ark,Rear Window,Rocky,Saving Private Ryan,Schindler's List,Shane,Singin' In The Rain,Snow White And The Seven Dwarfs,Some Like It Hot,Sophie'S Choice,Spartacus,Star Wars,Sullivan's Travels,Sunrise,Sunset Blvd,Swing Time,Taxi Driver,The African Queen,The Apartment,The Best Years Of Our Lives,The Bridge On The River Kwai,The Deer Hunter,The French Connection,The General,The Godfather,The Godfather Part Ii,The Gold Rush,The Graduate,The Grapes Of Wrath,The Last Picture Show,The Lord Of The Rings: The Fellowship Of The Ring,The Maltese Falcon,The Philadelphia Story,The Searchers,The Shawshank Redemption,The Silence Of The Lambs,The Sixth Sense,The Sound Of Music,The Treasure Of The Sierra Madre,The Wild Bunch,The Wizard Of Oz,Titanic,To Kill A Mockingbird,Tootsie,Toy Story,Unforgiven,Vertigo,West Side Story,Who's Afraid Of Virginia Woolf?,Yankee Doodle Dandy,A Streetcar Named Desire,All About Eve,All The President's Men,American Graffiti,Annie Hall,Apocalypse Now,Ben-Hur,Blade Runner,Bonnie And Clyde,Bringing Up Baby,Butch Cassidy And The Sundance Kid,Cabaret,Casablanca,Chinatown,Citizen Kane,City Lights,Do The Right Thing,Double Indemnity,Dr. Strangelove,Duck Soup,E.T,Easy Rider,Forrest Gump,Gone With The Wind,Goodfellas,High Noon,In The Heat Of The Night,Intolerance,It Happened One Night,It'S A Wonderful Life,Jaws,King Kong,Lawrence Of Arabia,M*A*S*H,Midnight Cowboy,Modern Times,Mr. Smith Goes to Washington,Nashville,Network,North By Northwest,On The Waterfront,One Flew Over The Cuckoo's Nest,Platoon,Psycho,Pulp Fiction,Raging Bull,Raiders Of The Lost Ark,Rear Window,Rocky,Saving Private Ryan,Schindler's List,Shane,Singin' In The Rain,Snow White And The Seven Dwarfs,Some Like It Hot,Sophie'S Choice,Spartacus,Star Wars,Sullivan's Travels,Sunrise,Sunset Blvd,Swing Time,Taxi Driver,The African Queen,The Apartment,The Best Years Of Our Lives,The Bridge On The River Kwai,The Deer Hunter,The French Connection,The General,The Godfather,The Godfather Part Ii,The Gold Rush,The Graduate,The Grapes Of Wrath,The Last Picture Show,The Lord Of The Rings: The Fellowship Of The Ring,The Maltese Falcon,The Philadelphia Story,The Searchers,The Shawshank Redemption,The Silence Of The Lambs,The Sixth Sense,The Sound Of Music,The Treasure Of The Sierra Madre,The Wild Bunch,The Wizard Of Oz,Titanic,To Kill A Mockingbird,Tootsie,Toy Story,Unforgiven,Vertigo,West Side Story,Who's Afraid Of Virginia Woolf?,Yankee Doodle Dandy

let afiTopArr = [];

afiTopArr = afiTopStr.split(",");
console.log(afiTopArr);


afiTopArr.forEach(function (movie){
    fetch(omdbUrl + movieAPIToken + "&t=" + movie).then(function (response){
        response.json().then(function (response){

            // console.log("movie response", response);
            // console.log();
            movieScrapper(response);

        })
    })
});

const movies = [];
let movieScrapper = function(movie){
    let addTitle = movie.Title.toString();
    let addRatings = movie.Ratings.reduce(function (acc, curVal) {return `${acc} ${curVal.Source} : ${curVal.Value},`}, '');
    let addPoster = movie.Poster.toString();
    let addYear = movie.Year.toString();
    let addGenre = movie.Genre.toString();
    let addDirector = movie.Director.toString();
    let addPlot = movie.Plot.toString();
    let addActors = movie.Actors.toString();
    let singleTitle =
        {
            Title: addTitle,
            Rating: {addRatings},
            Poster: addPoster,
            Year: addYear,
            Genre: addGenre,
            Director: [addDirector],
            Plot: addPlot,
            Actors: [addActors]
        };

    movies.push(singleTitle);


    // movieList.innerHTML = renderCoffees(movies);
};

console.log(movies);

// let movieTitle = {
//     title: "Hello",
//     rating: "5",
//     poster: "",
//     year: "2002",
//     genre: "Action, Horror, Sci-Fi",
//     director: "Paul W.S. Anderson",
//     plot: "A special military unit fights a powerful, out-of-control supercomputer and hundreds of scientists who have mutated into flesh-eating creatures after a laboratory accident.",
//     actors: "Ryan McCluskey, Oscar Pearce, Indra Ové, Anna Bolt"} ;

// function renderMovies(movieTitle) {
//     console.log(movieTitle);
//     const section = document.createElement('section');
//     main.appendChild(section);
//
//     var html = `<div id="accordion">`;
//     html += `<div class="card">`;
//     html += `<h5 class="mb-0">`;
//     html += `<button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true aria-controls="collapseOne">${movieTitle.title}</button>`;
//     html += `<div class="card-header" id="headingOne">`;
//     html += `</h5>`;
//     html += `</div>`;
//     html += `<div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">`;
//     html += `<div class="card-body">`;
//     html += `<div class="row cardText">`;
//     html += `<div class="col">`;
//     html += `<img class="col" id="moviePoster" src="${movieTitle.poster}" alt="media/missing movie poster.png"></div>`;
//     html += `<div class="col-9">`;
//     html += `<p>${movieTitle.plot}</p>`;
//     html += `<p>${movieTitle.actors}</p>`;
//     html += `</div>`;
//     html += `</div>`;
//     html += `<table class="table">`;
//     html += `<thead>`;
//     html += `<tr>`;
//     html += `<th scope="col">Movie Title</th>`;
//     html += `<th scope="col">Movie Rating</th>`;
//     html += `<th scope="col">Release Year</th>`;
//     html += `<th scope="col">Genre</th>`;
//     html += `<th scope="col">Director</th>`;
//     html += `</tr>`;
//     html += `</thead>`;
//     html += `<tbody>`;
//     html += `<tr>`;
//     html += `<th scope="row">${movieTitle.title}</th>`;
//     html += `<td>${movieTitle.title}</td>`;
//     html += `<td>${movieTitle.rating}</td>`;
//     html += `<td>${movieTitle.year}</td>`;
//     html += `<td>${movieTitle.genre}</td>`;
//     html += `<td>${movieTitle.director}</td>`;
//     html += `</tr>`;
//     html += `</tbody>`;
//     html += `</table>`;
//     html += `<h2>Id #</h2>`;
//     html += `</div>`;
//     html += `</div>`;
//     html += `</div>`;
//
//     return html;
// }

// moviesList.innerHTML = renderMovies(moviesFinal);