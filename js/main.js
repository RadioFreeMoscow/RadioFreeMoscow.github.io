$(document).ready(weatherSettings);
var degSym = '&#8451';

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

  }
  function displayMelbourneData(callback) {
    console.log(callback);
    var kelvin = 273.15;
    var tempCel = callback.main.temp - kelvin;
    var conditions = callback.weather[0].description;
    var tempCond = (tempCel.toFixed(2)) + ('°C ') + conditions;

      console.log(tempCond);
    //
    // console.log(conditions);
    // console.log(tempCond);
    //
    if (tempCel < 10) {
      $('.weather').addClass('flaticon-021-snowflake').text(tempCond);
    } else
    $('.weather').text(tempCond);

    }
