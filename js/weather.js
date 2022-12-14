const API_KEY = "d6f0bd3f1e5c0925e679503733041701";
/// This is fake API_KEY. No wonder it doesn't work. /// 

function geoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function geoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(geoSuccess, geoError);