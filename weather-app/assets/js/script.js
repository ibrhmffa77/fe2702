const apiKey = "4d8fb5b93d4af21d66a2948710284366";

async function getWeather() {
    const inputVal = document.querySelector('#cityInput').value
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    try {
        const result = await fetch(URL);
        if (!result.ok) throw new Error('The Weather for city is not valid..')
        const data = await result.json();
        console.log(data)
        document.querySelector('#weather-city').innerText = `${data.name}, ${data.sys.country}`
        document.querySelector('#weather-info').innerText = `${data.weather[0].description}`
        const weatherTempElement = document.querySelector('#temp');
        weatherTempElement.innerText = `Temp: ${data.main.temp} °C`;
        weatherTempElement.style.fontWeight = 'bold';
        const weatherHumidElement = document.querySelector('#humidity');
        weatherHumidElement.innerText = `Humidty: ${data.main.humidity} %`;
        weatherHumidElement.style.fontWeight = 'bold';
    }
    catch (error) {
        alert(error)
    }

}
const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener('click', () =>
    getWeather())
