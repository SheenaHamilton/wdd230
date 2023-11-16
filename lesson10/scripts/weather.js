const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather";

let query = "?lat=49.75&lon=6.64&appid=0f7998f8963ab9e0811de370afccb35a&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(url+query);
        if (response.ok) {
            const data = await response.json();
            //console.table(data); 
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
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src",iconsrc);
    weatherIcon.setAttribute("alt",`https://openweathermap.org/img/w/${data.weather[0].description}.png`);
    captionDesc.textContent = `${desc}`;
}
