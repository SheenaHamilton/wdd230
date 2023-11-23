
/* Current Weather Data*/
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#desc');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=54.36&lon=-110.09&appid=0f7998f8963ab9e0811de370afccb35a&units=metric";

async function apiFetch(url) {
    try {
        const response = await fetch(url);
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

apiFetch(url);

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = `Currently it feels like ${Math.round(data.main.feels_like)}°C,  there is ${data.weather[0].description} and the winds are ${Math.round(data.wind.speed)} km/h. Today, expect a low of ${Math.round(data.main.temp_min)}°C and a high of ${Math.round(data.main.temp_max)}°C.`;
    weatherIcon.setAttribute("src",iconsrc);
    weatherIcon.setAttribute("alt",`${data.weather[0].description}`);
    captionDesc.textContent = `${desc}`;
}


/* Forecast Weather Data*/
const forecastdata = document.querySelector('#weather-forecast');
const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?lat=54.36&lon=-110.09&appid=0f7998f8963ab9e0811de370afccb35a&units=metric";

async function apiFetchForecast(forecasturl) {
    try {
        const response = await fetch(forecasturl);
        if (response.ok) {
            const data = await response.json();
            displayForecastResults(data);
        } else {
            throw Error(await response.text());        
        }
    } catch (err) {
        console.error(err);
    }
}

apiFetchForecast(forecasturl);

function displayForecastResults(data) {

    const results = [];

    data.list.forEach(weatherevent => {
        let date = new Date(weatherevent.dt_txt);
        let today = new Date();
        const hours = [ 6, 12, 21];
        const weekday = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];

        //I want to start with the next day.
        if ((date.getDay() != today.getDay()) && (hours.includes(date.getHours()))) {
            const datarow = [];
            datarow.push(weekday[date.getDay()]);
            datarow.push(date.toLocaleString('en-US', { hour: 'numeric', hour12: true })); 
            datarow.push(`https://openweathermap.org/img/w/${weatherevent.weather[0].icon}.png`);
            datarow.push(`${weatherevent.weather[0].description}`);
            datarow.push(`${Math.round(weatherevent.main.temp_min)}°C`);
            datarow.push(`${Math.round(weatherevent.main.temp_max)}°C`);
            datarow.push(`${Math.round(weatherevent.wind.speed)} km/h`);
            results.push(datarow);
        }
    });
    //create results listing Days vertically

    //Create Header
    for(i = 0; i < 7; i++) {
        //"Day","Hour","Icon","Desc","Min","Max","Wind"]
        const header = ["","","","Desc","Min","Max","Wind"];
        let title = header[i];

        //Do not create a column for Desc or Hour, They are 
        //combined with other elements
        if ( i != 1 && i != 3) {
            const titlehead = document.createElement("p");
            titlehead.classList.add("title");
            titlehead.innerText = title;
            forecastdata.appendChild(titlehead);
        }
    }

    //Create Data Forecast
    for(n = 0; n < 9; n++) {
    //There are 3 weather events per day in the array, it starts on a new day
    //9 events will be 3 days worth
        const forecast = results[n];

        //For loop is required for control over a few of the combined columns
        // columns: "Day","Hour","Icon","Desc","Min","Max","Wind"
        for(d = 0; d < 7; d++) {
            let elementValue = forecast[d];

            //Day - Combine Day & time
            if (d == 0) {
                elementValue = `${elementValue} ${forecast[d + 1]}`
            }
            //Icon - combine icon and desc
            if (d == 2) {
                let imgdiv = document.createElement("div");
                let forecastElement = document.createElement("img");
                forecastElement.setAttribute("src",elementValue);
                forecastElement.setAttribute("alt",forecast[d+1]);
                forecastElement.setAttribute("width",50);
                forecastElement.setAttribute("height",50);
                imgdiv.appendChild(forecastElement)
                forecastdata.appendChild(imgdiv);
            }
            //Do not create results for the Hour
            else if ((d != 1) && (d != 3)) {
                let forecastElement = document.createElement("p");
                forecastElement.innerText = elementValue;
                forecastdata.appendChild(forecastElement);
            }

        }
    }
    
}
