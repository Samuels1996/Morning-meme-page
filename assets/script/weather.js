var cityEl = document.querySelector('#city');
var searchBtnEl = document.querySelector('#searchBtn');
var apiKey = '7adddd61a6c99ba40eb99e6a48cd59a1'
var url1 = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'

searchBtnEl.addEventListener('click', getCurrentWeather);

function getCurrentWeather (cord) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + cord.lat + '&lon=' + cord.lon + '&units=imperial&appid='+ apiKey)
    .then(response => response.json())
        .then(data =>{
            const { main,name,sys,weather } = data;
            const icon = `https://openweathermap.org/img/wn/${
                weather[0]['icon']
        }@2x.png`


            
            })
}
