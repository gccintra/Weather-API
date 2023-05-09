const apiKey = '189cfdf78dda210b080299dc010f65cc'


const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")
const weatherContainer = document.querySelector("#weather-data")



// FUNCOES

const getWeatherData = async (city) => {
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherUrl)

    const data = await res.json()

    console.log(data)

    return data;
}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city)

    cityElement.innerText = data.name
    tempElement.innerText = parseInt(data.main.temp)
    descElement.innerText = data.weather[0].description
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`)
    humidityElement.innerText = `${data.main.humidity}%`
    windElement.innerText =`${data.wind.speed}km/h`

    weatherContainer.classList.remove("hide")
    
}


// EVENTOS
 
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value

    showWeatherData(city)

    console.log('click')
})

cityInput.addEventListener("keyup", (e) => {
    if(e.code === 'Enter'){
        const city = e.target.value

        showWeatherData(city)
    }
})