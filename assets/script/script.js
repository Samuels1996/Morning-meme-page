// The following line of code is going to be pulling the news articles from the API
function renderArticle() {

    fetch('https://api.thenewsapi.com/v1/news/top?api_token=DXwhOvJHaGZy15HN6l9GPYBKRvAPc0BDJPDLBNJI&locale=us&limit=5')
        .then(function (response) {
            if (!(response.status === 200)) {
               $('#snippet').text("You're Broke");
            } 
            return response.json();   
        })
        .then(function (data) {
            
            var img = document.createElement('img');
           function getRandomArticle() {
               i = Math.floor(Math.random() * 5);
            
            newsImageId = document.getElementById("newsImage");
            var titleId = document.getElementById("newsTitle");
            var snipId = document.getElementById("snippet");
            var urlId = document.getElementById("newsUrl");
            
            img.src = data.data[i].image_url;
            newsImageId.append(img);
            titleId.textContent = data.data[i].title;
            snipId.textContent = data.data[i].snippet;
            urlId.textContent = data.data[i].url;
           
           }
           getRandomArticle();
        })
};

// The following code is the generator for the trump and kanye quotes. It is utilizing two different APIs for the function
var quoteBox = $('#quoteBox');
var person;
var TrumpScoreCounter = localStorage.getItem('trump') || 0;
var SaintPabloScoreCounter = localStorage.getItem('kanye') || 0;
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
function displayQuote(quote, speaker) {
   
    var quoteText = $('<h1>');
    var YeezusBtn = $('<button>');
    var TrumpBtn = $('<button>');

    person = speaker;
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
function answer(e){

    var scoreBox = $('<div>');
    var SaintPabloScore = $('<h1>');
    var TrumpScore = $('<h1>');
    
    var userAnswer = e.target.textContent;

    if(userAnswer === person) {
        if (person === "Kanye") {
            SaintPabloScoreCounter ++;
        } else {
            TrumpScoreCounter ++;
        }
    } 
    SaintPabloScore.text('Kanye: ' + SaintPabloScoreCounter);
    TrumpScore.text('Trump: ' + TrumpScoreCounter);
    scoreBox.append(SaintPabloScore,TrumpScore);
    if(quoteBox.children().length < 4 ){
        quoteBox.append(scoreBox);  
    }
    saveScores(SaintPabloScoreCounter,TrumpScoreCounter);
}

function saveScores(Kscore, Tscore) {
    localStorage.setItem("trump", Tscore);
    localStorage.setItem('kanye', Kscore);
}

// The following section is a random lunch generator for Jung.
var up = $('#Jung');
var down = $('#Jung2');
var jungBtn = $('#jungBtn');
var arr = ["Rice with spam🥫", "Rice with Kimchi stew🍚🥬", "Rice with Mapo tofu🍚🧈", "Rice with Seaweed soup🍚🍲🚣🌿", "Sushi🍣", "Rice with ramen🍚🍜", "Omelette Rice🥚🍚🥢", "Protien Bar💪🍫","Pizza🍕","Cheeseburger🍔","Tacos🌮","doughnut🍩"];
           
function GFG_Fun() {            
    down.text(arr[Math.floor(Math.random() * arr.length)]);              
}
         
getRandomQuote();
quoteBox.on('click', 'button', answer)
jungBtn.on('click', GFG_Fun);   

renderArticle()
