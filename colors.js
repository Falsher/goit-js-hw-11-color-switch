const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector("body");
let startColorId;
start.addEventListener("click", startColor);
stop.addEventListener("click", stopAddColor);
function startColor() {
  startColorId = setInterval(() => {
    body.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    start.setAttribute("disabled", true);
  }, 1000);
}

function stopAddColor() {
  clearInterval(startColorId);
  start.removeAttribute("disabled", false);
}
