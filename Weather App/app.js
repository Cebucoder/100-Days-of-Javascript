function getWeather() {
    var locationInput = document.getElementById("locationInput");
    var location = locationInput.value;
  
    // Make an API request to retrieve weather data
    var apiKey = '622d7cc11488287587a31daa7de5c509';
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    locationInput.value = '';
  
   

fetch(apiUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data); // Check the response data in the console

    // Extract relevant weather information from the data
    var location = data.name;
    var temperature = data.main.temp;
    var humidity = data.main.humidity;
    var wind = data.wind.speed;
    var weatherIcon = data.weather[0].icon;

    // Map weather icon codes to custom image URLs or paths
    var weatherImage;
    if (weatherIcon === '01d') {
        weatherImage = '../background/clear.png';
        document.getElementById('location').style.color = '#DD672D';
        document.getElementById('status').style.color = '#DD672D';
        document.getElementById('hum-icon').style.fill = '#DD672D';
        document.getElementById('wind-icon').style.fill = '#DD672D';
        document.getElementById('weather-label').textContent = 'Clear-sky';
    }else if(weatherIcon === '02d'){
        weatherImage = '../background/cloud.png';
        document.getElementById('location').style.color = '#727272';
        document.getElementById('status').style.color = '#727272';
        document.getElementById('hum-icon').style.fill = '#727272';
        document.getElementById('wind-icon').style.fill = '#727272';
        document.getElementById('weather-label').textContent = 'Few-clouds';

    }else if(weatherIcon === '03d'){
        weatherImage = '../background/cloud.png';
        document.getElementById('location').style.color = '#727272';
        document.getElementById('status').style.color = '#727272';
        document.getElementById('hum-icon').style.fill = '#727272';
        document.getElementById('wind-icon').style.fill = '#727272';
        document.getElementById('weather-label').textContent = 'Scattered-clouds';
    }else if(weatherIcon === '04d'){
        weatherImage = '../background/cloud.png';
        document.getElementById('location').style.color = '#727272';
        document.getElementById('status').style.color = '#727272';
        document.getElementById('hum-icon').style.fill = '#727272';
        document.getElementById('wind-icon').style.fill = '#727272';
        document.getElementById('weather-label').textContent = 'Broken-clouds';
    }else if(weatherIcon === '09d'){
        weatherImage = '../background/rain.png';
        document.getElementById('location').style.color = '#727272';
        document.getElementById('status').style.color = '#727272';
        document.getElementById('hum-icon').style.fill = '#727272';
        document.getElementById('wind-icon').style.fill = '#727272';
        document.getElementById('weather-label').textContent = 'Shower-rain';
    }else if(weatherIcon === '10d'){
        weatherImage = '../background/rain.png';
        document.getElementById('location').style.color = '#727272';
        document.getElementById('status').style.color = '#727272';
        document.getElementById('hum-icon').style.fill = '#727272';
        document.getElementById('wind-icon').style.fill = '#727272';
        document.getElementById('weather-label').textContent = 'Rain';
    }else if(weatherIcon === '11d'){
        weatherImage = '../background/thunder.png';
        document.getElementById('location').style.color = '#727272';
        document.getElementById('status').style.color = '#727272';
        document.getElementById('hum-icon').style.fill = '#727272';
        document.getElementById('wind-icon').style.fill = '#727272';
        document.getElementById('weather-label').textContent = 'Thuderstorm';
    }else if(weatherIcon === '13d'){
        weatherImage = '../background/rain.png';
        document.getElementById('location').style.color = '#727272';
        document.getElementById('status').style.color = '#727272';
        document.getElementById('hum-icon').style.fill = '#727272';
        document.getElementById('wind-icon').style.fill = '#727272';
        document.getElementById('weather-label').textContent = 'Snow';

    }else if(weatherIcon === '50d'){
        weatherImage = '../background/mist.png';
        document.getElementById('location').style.color = '#727272';
        document.getElementById('status').style.color = '#727272';
        document.getElementById('hum-icon').style.fill = '#727272';
        document.getElementById('wind-icon').style.fill = '#727272';
        document.getElementById('weather-label').textContent = 'Mist';

    }
     else {
        weatherImage = '../background/clear.png';
        document.getElementById('location').style.color = '#DD672D';
        document.getElementById('status').style.color = '#DD672D';
        document.getElementById('hum-icon').style.fill = '#DD672D';
        document.getElementById('wind-icon').style.fill = '#DD672D';
        document.getElementById('weather-label').textContent = 'Few-clouds';

    }

    var temperature = Math.round(data.main.temp);

    // Update the HTML elements with the retrieved weather information
    document.getElementById("location").innerText = location;
    document.getElementById("temperature").innerText = temperature + '°C';
    document.getElementById("humidity").innerText = + humidity + '%';
    document.getElementById("wind").innerText = wind + ' m/s';
    document.getElementById("weatherBackground").src = weatherImage;
  })
  .catch(function(error) {
    console.log('Error:', error);
  });
}
  