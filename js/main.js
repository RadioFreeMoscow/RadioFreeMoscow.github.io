$(document).ready(weatherSettings);


// Setting up the connection to the API
function weatherSettings() {
    var config = {
        url: ' http://api.openweathermap.org/data/2.5/weather',
        data: {
            id: '7281804',
            appid: '065e043f1d8cf7b05c1d84ea90c06987'
        }
    };
    $.ajax(config).done(displayMelbourneData); // Pass the info from Config to displayMelbourneData
}

function displayMelbourneData(callback) { // And we'll call the data from config "call back"
    var kelvin = 273.15;
    var weatherCond = [ // Array for all of the various weather conditions
        'clear sky', 'few clouds', 'scattered clouds', 'broken clouds', 'shower rain', 'rain', 'thunderstorm', 'snow', 'mist'
    ];
    var weatherIcons = [ //Array for all the classes we add later on.
        'flaticon-sun', 'flaticon-clouds', 'flaticon-cloudy', 'flaticon-cloud', 'flaticon-rain-11', 'flaticon-storm-5', 'flaticon-snowflake-1', 'flaticon-tornado-1'
    ];
    var tempCel = callback.main.temp - kelvin; // Temp in Metric
    var conditions = callback.weather[0].description; // Scattered Clouds Etc
    var tempCond = (tempCel.toFixed(2)) + ('°C ') + conditions; //Adding Rounding.

		for (var i = 0; i <= 7; i++) {
			if (conditions === weatherCond[i]) {
			 $('.weather').addClass(weatherIcons[i]).text(tempCond);
		}
	}
}

/* Sidebar Navigation Functions */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
