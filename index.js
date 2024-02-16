const apiKey = "708e83a3c752680780cc4de41cd6061b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather img")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else {
        var data = await response.json();


        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temp").innerHTML = data.main.temp + "<span>&#176;</span>C";
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("wind").innerHTML = data.wind.speed + " Km/h";
    
        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png";
        }else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "mist.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "rain.png";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "snow.png";
        }
       
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})