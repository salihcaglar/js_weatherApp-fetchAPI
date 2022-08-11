// selectors 

const input = document.querySelector('.input')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const situation = document.querySelector('.situation')
const minmax = document.querySelector('.minmax')
const main = document.querySelector('.main')
const url = 'https://api.openweathermap.org/data/2.5/weather?q='
const key = '3f69eda0d69b63b9d3211dec094924e0';

/*   ----API CALL----
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}  */

//events

input.addEventListener('keypress', request)

// functions
function request(e) {
    if(e.keyCode == '13') {
        getResult(input.value);
        main.classList.add('active')
    }
}

function getResult(city) {
    let query = `${url}${city}&appid=${key}&units=metric&`;
    console.log(query);
    fetch(query)
    .then(function(weather){
        return weather.json()
    })
    .then(displayResult)
}

function displayResult(result){
    city.innerText = `${result.name}, ${result.sys.country}`;
    temp.innerText = Math.round(result.main.temp) + ' °C';
    situation.innerText = result.weather[0].description;
    minmax.innerText = Math.round(result.main.temp_min) + ' °C / ' + Math.round(result.main.temp_max) + ' °C';
}











