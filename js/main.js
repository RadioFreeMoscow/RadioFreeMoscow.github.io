console.log('Connected to Script.js');
$(document).ready(weatherSettings);
  function weatherSettings () {
    var config =
    {
      url: 'https://api.openweathermap.org/forecast',
      data: {
        id:'7281804',
        appid: '065e043f1d8cf7b05c1d84ea90c06987'
      }
    };
    $.ajax(config).done(displayMelbourneData);

    function displayMelbourneData(callback) {
      console.log(callback);
    }

  }
