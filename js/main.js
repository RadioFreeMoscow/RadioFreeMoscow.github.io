$(document).ready(weatherSettings);

  function weatherSettings () {
    var config =
    {
      url: ' http://api.openweathermap.org/data/2.5/weather',
      data: {
        id:'7281804',
        appid: '065e043f1d8cf7b05c1d84ea90c06987'
      }
    };

  $.ajax(config).done(displayMelbourneData);
  console.log('Good');

  }
  function displayMelbourneData(callback) {
    console.log(callback);
    var tempCel = callback.main.temp - 273.15;
    console.log(tempCel.toFixed(2));
    if (tempCel > 10) {
      $('.weather').addClass('flaticon-021-snowflake').text(tempCel.toFixed(2));
    } else
    $('.weather').text(tempCel.toFixed(2));

    }
