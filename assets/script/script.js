

function KanyeQuote () {
    fetch("https://api.kanye.rest/")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}
function TrumpQuote () {
    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}
function getRandomQuote(){
    var random = Math.floor(Math.random() * 2)
    console.log(random);
    if (random === 0) {
        KanyeQuote();
    } else {
        KanyeQuote();
    }
}

getRandomQuote();