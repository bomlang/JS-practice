function getColor() {
  return "#" + Math.random().toString(16).slice(2, 8);
}

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

function setBackground() {
  let bgColor = getColor();
  document.body.style.backgroundColor = bgColor;
  color.textContent = getColor();
}

btn.addEventListener("click", setBackground);
