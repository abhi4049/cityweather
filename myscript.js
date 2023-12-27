const apiKey = "5db26393bc565fd54a61105e5d43ea5a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const sky = document.querySelector("#sky");
city="Mumbai";
async function checkWeather(city) {
  const response = await fetch(apiUrl + `${city}` + `&appid=${apiKey}`);
  if(response.status == 404){
    document.querySelector(".city").innerHTML = "No such city exists!"
    sky.src = "images/warning.png";
    document.querySelector(".temp").innerHTML = "--";
  document.querySelector(".feel").innerHTML = "--";
  document.querySelector(".humidity").innerHTML = "--";
  document.querySelector(".wind").innerHTML = "--";
  }
  else{
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + " °C";
    document.querySelector(".feel").innerHTML =
      Math.round(data.main.feels_like) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    if(data.weather[0].main == "Clouds"){
      sky.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
      sky.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
      sky.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Mist"){
      sky.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Drizzle"){
      sky.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Snow"){
      sky.src = "images/snow.png";
    }
  }

}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})
checkWeather("Mumbai");
