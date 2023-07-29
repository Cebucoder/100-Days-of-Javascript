
function getWeather() {

    var locationInput = document.getElementById("locationInput");
    var location = locationInput.value;
  
    // Make an API request to retrieve weather data
    var apiKey = '622d7cc11488287587a31daa7de5c509';
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    locationInput.value = '';

    if(location === ''){
        console.log('No inputed Location');
    }else{

       loading = document.getElementById('loading').style.display = 'flex';
    fetch(apiUrl)
    

  .then(function(response) {
   
    return response.json();
    
  })
  .then(function(data) {
 
    console.log(data); // Check the response data in the console
    loading = document.getElementById('loading').style.display = 'none';


    // Extract relevant weather information from the data
    var location = data.name;
    var temperature = data.main.temp;
    var humidity = data.main.humidity;
    var wind = data.wind.speed;
    var weatherIcon = data.weather[0].icon;
    var weatherDescription = data.weather[0].description;

    // Map weather icon codes to custom image URLs or paths
    var weatherImage;
    if (weatherIcon === '01d' || weatherIcon === '01n') {
        weatherImage = './background/clear.png';
        document.getElementById('location').style.color = '#DD672D';
        document.getElementById('status').style.color = '#DD672D';

    }else if(weatherIcon === '02d' || weatherIcon === '02n'){
        weatherImage = './background/cloud.png';
        document.getElementById('location').style.color = '#727272';
        document.getElementById('status').style.color = '#727272';

    }else if(weatherIcon === '03d' || weatherIcon === '03n'){
        weatherImage = './background/cloud.png';
        document.getElementById('location').style.color = '#727272';
        document.getElementById('status').style.color = '#727272';

    }else if(weatherIcon === '04d' || weatherIcon === '04n'){
        weatherImage = './background/cloud.png';
        document.getElementById('location').style.color = '#727272';
        document.getElementById('status').style.color = '#727272';

    }else if(weatherIcon === '09d' || weatherIcon === '09n'){
        weatherImage = './background/rain.png';
        document.getElementById('location').style.color = '#727272';
        document.getElementById('status').style.color = '#727272';

    }else if(weatherIcon === '10d' || weatherIcon === '10n'){
        weatherImage = './background/rain.png';
        document.getElementById('location').style.color = '#727272';
        document.getElementById('status').style.color = '#727272';

    }else if(weatherIcon === '11d' || weatherIcon === '11n'){
        weatherImage = './background/thunder.png';
        document.getElementById('location').style.color = '#727272';
        document.getElementById('status').style.color = '#727272';

    }else if(weatherIcon === '13d' || weatherIcon === '13n'){
        weatherImage = './background/rain.png';
        document.getElementById('location').style.color = '#727272';
        document.getElementById('status').style.color = '#727272';

    }else if(weatherIcon === '50d' || weatherIcon === '50n'){
        weatherImage = './background/mist.png';
        document.getElementById('location').style.color = '#727272';
        document.getElementById('status').style.color = '#727272';

    }
     else {
        weatherImage = './background/clear.png';
        document.getElementById('location').style.color = '#DD672D';
        document.getElementById('status').style.color = '#DD672D';
    
    }

    var temperature = Math.round(data.main.temp);
    var windSpeedKmph = (wind * 3.6).toFixed(2);

    // Update the HTML elements with the retrieved weather information
    document.getElementById("location").innerHTML = location;
    document.getElementById("temperature").innerHTML = temperature + '°C';
    document.getElementById("humidity").innerHTML = + humidity + '%';
    document.getElementById("wind").innerHTML = windSpeedKmph + ' km/h';
    document.getElementById("weatherBackground").src = weatherImage;
    document.getElementById('weather-label').innerHTML = weatherDescription;

    
  })
  .catch(function(error) {

    console.log('Error:', error);

    
    var weatherDescription = document.getElementById('weather-label');
    document.getElementById("location").innerText = "Oops, Location not found.";

    // clearing result to deafult
    document.getElementById("temperature").innerHTML = '0 °C';
    document.getElementById("humidity").innerHTML = '0 %';
    document.getElementById("wind").innerHTML = '0 km/h';
    weatherDescription.innerHTML = 'status';

    document.getElementById('location').style.color = '#DD672D';
    document.getElementById('status').style.color = '#DD672D';

    // change background to 404
    document.getElementById("weatherBackground").src = './background/404.png';
  });
    }

}
  