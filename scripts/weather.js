const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#desc');

const url = "https://api.openweathermap.org/data/2.5/weather";

let query = "?lat=54.36&lon=-110.09&appid=0f7998f8963ab9e0811de370afccb35a&units=metric";

async function apiFetch() {
    try {
        const response = await fetch(url+query);
        if (response.ok) {
            const data = await response.json();

            displayResults(data);
        } else {
            throw Error(await response.text());        
        }
    } catch (err) {
        console.error(err);
    }
    
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = `Currently it feels like ${data.main.feels_like}°C,  there is ${data.weather[0].description} and the winds are ${data.wind.speed} km/h. Expect a low of ${data.main.temp_min}°C and a high of ${data.main.temp_max}°C.`;
    weatherIcon.setAttribute("src",iconsrc);
    weatherIcon.setAttribute("alt",`https://openweathermap.org/img/w/${data.weather[0].description}.png`);
    captionDesc.textContent = `${desc}`;
}
