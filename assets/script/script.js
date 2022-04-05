function init() {
    renderArticle();
    //if random number greater than 50, run this function.
    //if less than, run the other function
}

function renderArticle() {
    

    fetch('https://api.thenewsapi.com/v1/news/top?api_token=DXwhOvJHaGZy15HN6l9GPYBKRvAPc0BDJPDLBNJI&locale=us&limit=5')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            
            var img = document.createElement("img");
           function getRandomArticle() {
               i = Math.floor(Math.random() * 5);
            //console.log(data.data[i].image_url);
            //console.log(data.data[i].title);
            //console.log(data.data[i].url);
            
            newsImageId = document.querySelector("#newsImage");
            var titleId = document.querySelector("#newsTitle");
            var snipId = document.querySelector("#snippet");
            var urlId = document.querySelector("#newsUrl");
            
            img.src = data.data[i].image_url;
            newsImageId.appendChild(img);
            titleId.textContent = data.data[i].title;
            snipId.textContent = data.data[i].snippet;
            urlId.textContent = data.data[i].url
           }
           getRandomArticle();
        })
};

//function renderOnionArticle();

init();