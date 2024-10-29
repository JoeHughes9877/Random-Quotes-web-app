fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
    method: "GET",
    headers: {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": "9e7606c1cbmsh8d8cdb53703a6eap16c543jsnf90c5ddd26dc"
    }
})
.then(response => response.json()) 
.then(data => {
    // Extract quote and author from the data object
    const quote = data.content; // Quote content
    const author = data.originator.name; // Quote author

    document.getElementById("heading").innerHTML = `Quote: "${quote}" - ${author}`;
})
.catch(error => {
    console.error("Error fetching quote:", error);
});
