document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '26d3742927cf42afaa203724241504'; // this is my api key

    // API endpoints for London and New York
    const apiUrlLondon = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&aqi=no`;
    const apiUrlNewYork = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=New York&aqi=no`;


    function fetchWeather(apiUrl, locationName) {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);

                const weatherInfoElement = document.getElementById('weather-info');
                const weatherCard = document.createElement('div');
                weatherCard.classList.add('weather-card');

                const weatherData = `
                    <p><strong>Location:</strong> ${locationName}</p>
                    <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
                    <p><strong>Condition:</strong> ${data.current.condition.text}</p>
                `;

                weatherCard.innerHTML = weatherData;

                weatherInfoElement.appendChild(weatherCard);
            })
            .catch(error => {
                console.error(`Error fetching weather data for ${locationName}:`, error);
            });
    }

    fetchWeather(apiUrlLondon, 'London');

    fetchWeather(apiUrlNewYork, 'New York');
});
