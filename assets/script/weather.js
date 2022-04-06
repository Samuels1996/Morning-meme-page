var apiKey ='7adddd61a6c99ba40eb99e6a48cd59a1'
var searchBtnEl = $("#searchBtn")
var today = moment();
$('.date').text(today.format('L'))

function currentWeather (city) {
   
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey)
        .then(function (response) {
            return response.json();
        })
            .then(function(data) {
                
                var cityName = data.name;
                var humidity = data.main.humidity;
                var windSpeed = data.wind.speed;
                var temperature = data.main.temp;
                var icon = data.weather[0].icon;

                $('.cityNames').text(cityName);
                $('.humidity').text('Humidity: ' + humidity + '%');
                $('.nowTemp').text('Temp: ' + temperature +'°F');
                $('.currentIcon').attr('src','http://openweathermap.org/img/wn/' + icon + '@2x.png');
                $('.windSpeed').text('Wind Speed: ' + windSpeed +'mph');

              
            })

    };

    var searchBtnEl = $('#searchBtn');
    searchBtnEl.on('click', function(e) {
        e.preventDefault;
        var city = $('#city-name').val();
        currentWeather(city);
        $('#city-name').val('')
    })