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


function renderCoffee(coffee) {

    var html = `<div id="accordion">`;
    html += `<div className="card">`;
    html += `<h5 className="mb-0">`;
    html += `<button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true aria-controls="collapseOne">${movieTitle.title}</button>`;
    html += `<div className="card-header" id="headingOne">`;
    html += `</h5>`;
    html += `</div>`;
    html += `<div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">`;
    html += `<div className="card-body">`;
    html += `<table className="table">`;
    html += `<thead>`;
    html += `<tr>`;
    html += `<th scope="col">Movie Title</th>`;
    html += `<th scope="col">Movie Rating</th>`;
    html += `<th scope="col">Release Year</th>`;
    html += `<th scope="col">Director</th>`;
    html += `</tr>`;
    html += `</thead>`;
    html += `<tbody>`;
    html += `<tr>`;
    html += `<th scope="row">${movieTitle.title}</th>`;
    html += `<td>${movieTitle.title}</td>`;
    html += `<td>${movieTitle.title}</td>`;
    html += `<td>${movieTitle.title}</td>`;
    html += `<td>${movieTitle.title}</td>`;
    html += `</tr>`;
    html += `</tbody>`;
    html += `</table>`;
    html += `<h3>Id #</h3>`;
    html += `<p class="product-roast">' + coffee.roast + '</p>`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;

    return html;
}
                    </tr>
                    </tbody>
                </table>
                <h3>Id #</h3>
            </div>
        </div>
    </div>