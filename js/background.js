const images = ["car.jpg", "weather.jpg", "weather.jpg", "house.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.className = "mainBg";
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
