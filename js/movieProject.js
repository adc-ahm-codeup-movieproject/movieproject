"use strict"


const OmdbAPIurl = "http://www.omdbapi.com/";

const ourMovieDB = "https://glitch.com/edit/#!/certain-careful-scent"



let movieTitle = {title: "Fetch Requests", body: "are a fun way to use JS"} // the what (the cover letter: fax metaphor)

let options = {
    method: "POST",
    header: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(movieTitle)
} // the necessary identifying options (the : fax metaphor)

   fetch(ourMovieDB, options).then(function(response) {
       console.log(response);
   });

  let url = "/posts";

  console.log(movieTitle);

