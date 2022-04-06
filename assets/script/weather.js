var apiKey ='7adddd61a6c99ba40eb99e6a48cd59a1'
var searchBtnEl = $("#searchBtn")
var today = moment();
$('.date').text(today.format('L'))

function currentWeather () {
    // var url1 = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey;
    var city = $('#city-name').val();
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey)
        .then(function (response) {
            return response.json();
        })
            .then(function(data) {
                
                var cityName = data.name;
                var humidity = data.main.humidity;
                var windSpeed = data.wind.speed;
                var longitude = data.coord.lon;
                var latitude = data.coord.lat;
                var temperature = data.main.temp;
                var icon = data.weather[0].icon;
                var todayWeather = [cityName, humidity, windSpeed, longitude, latitude, temperature, icon]


                $('.cityNames').innerHTML = cityName;
                $('.humidity').innerHTML = humidity + '%';
                $('.nowTemp').innerHTML = temperature +'°F';
                $('.currentIcon').src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
                $('.windSpeed').innerHTML = windSpeed +'mph';

              
            })

    };

    var searchBtnEl = $('#searchBtn');
    searchBtnEl.on('click', currentWeather)