// Pulls a randomly Yeezus quote 
function KanyeQuote () {
    fetch("https://api.kanye.rest/")
    .then(response => response.json())
    .then(data => {
        displayQuote(data.quote, 'Kanye');
    })
}
// Pull a random Donald Trump
function TrumpQuote () {
    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
    .then(response => response.json())
    .then(data => {
        displayQuote(data.message, 'Trump')
    })
}
// Randomly calls  
function getRandomQuote(){
    var random = Math.floor(Math.random() * 2)
    if (random === 0) {
        KanyeQuote();
    } else {
        TrumpQuote();
    }
}
function displayQuote(quote, person) {
    var quoteBox = $('#quoteBox');
    var quoteText = $('<h1>');
    var YeezusBtn = $('<button>');
    var TrumpBtn = $('<button>');
    var scoreBox = $('<div>');
    var SaintPabloscore = $('<h1>');
    var TrumpScore = $('<h1>');
    quoteText.text(quote);
    quoteText.addClass('m-3');
    quoteBox.append(quoteText);

    YeezusBtn.text('Kanye');
    YeezusBtn.addClass('col-2 m-3 bg-primary');
    quoteBox.append(YeezusBtn);

    TrumpBtn.text('Trump');
    TrumpBtn.addClass('col-2 m-3 bg-danger');
    quoteBox.append(TrumpBtn);
}

getRandomQuote();