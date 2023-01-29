const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

const body = document.body;

function bodyColor() {
  const size = window.innerWidth;
  h1.style.color = "white";
  h2.textContent = size;
  if (size < 600) {
    document.body.style.backgroundColor = "tomato";
    /*tomato*/
  } else if (700 < size) {
    document.body.style.backgroundColor = "cornflowerblue";
    /*cornflowerblue*/
  } else {
    document.body.style.backgroundColor = "yellowgreen";
    /*yellowgreen*/
  }
}
window.addEventListener("resize", bodyColor);
