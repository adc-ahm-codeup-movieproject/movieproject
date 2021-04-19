"use strict"


const movieURL = "https://glitch.com/edit/#!/certain-careful-scent";



let movieTitle = {title: "Fetch Requests", body: "are a fun way to use JS"} // the what (the cover letter: fax metaphor)

let options = {
    method: "POST",
    header: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(blogPost)
} // the necessary identifying options (the : fax metaphor)

  let url = "/posts";

  console.log(blogPost);