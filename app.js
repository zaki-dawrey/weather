let temperatureDescription = document.querySelector('.temperature-description');
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');
const ApiKey = '2517ef28eea83ce02abe46112fc619a9';

getWeatherData()
function getWeatherData (){
    navigator.geolocation.getCurrentPosition((success) => {

        let {latitude, longitude} = success.coords;
        
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${ApiKey}`).then(res => res.json()).then(data => {
        const {temp} = data.current;

        //Set DOM Elements from the API
        temperatureDegree.textContent = temp;
        temperatureDescription.textContent = data.current.weather[0].description;
        locationTimezone.textContent = data.timezone;

        });
    });
};