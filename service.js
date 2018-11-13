
function fetchForecast ( cityCode ) {
    var apiKey = '28dbd54334ddfbaae0035fbbf292c00e';
    var city = cityCode || 'dallas,us';
    var fetchURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey + '&units=imperial';
    var output = {};

    var forecastData = $.ajax({url: fetchURL} )
        .done(function( data, textStatus ) {
            output.data = data;
            output.status = textStatus;
        })
        .fail( function(textStatus, errorThrown ) {
            output.data = errorThrown;
            output.status = textStatus;
        })
    ;


    return output;
};

function checkFetch ( fetchData ){
    if (fetchData.status == '200')  {
        renderForecast( fetchData.data );
    } else {
        displayError( fetchData.status, fetchData.data );
    }
}

function renderForecast ( data ){
    var weather = JSON.parse(data);
    var weatherForecast = weather.forecast;
    foreach(weather.forecast)
}

function displayError ( status, data ){
    $('cityForecast').html().append("<h1> API Error " + status + "</h1>");
    $('cityForecast').append("<p>" + data + "</p>");
}

$(document).ready(function(){
    var cityInput = $('.cityName').value();
    fetchForecast(cityInput);

    $('.cityName').blur(function() {
        cityInput = $('.cityName').value();
        fetchForecast(cityInput);
    });
})