const API_KEY = "0bbff772d1b9dd8432a0364079d39176";

function onGeoOk(pos)
{
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `Today is ${data.weather[0].main} / ${parseInt(data.main.temp)}˚`;
        city.innerText = data.name;
    });
}

function onGeoEr()
{
    alert("위치 정보를 가져올 수 없습니다!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoEr); 