const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop');
const body = document.querySelector('body');

startBtn.addEventListener('click', onStartSwitcher);
stopBtn.addEventListener('click', onStopSwitcher);

let intervalId = 0;
const COLOR_TIMER = 1000;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorSwitcher() {
  body.style.backgroundColor = getRandomHexColor();
}

function onStartSwitcher() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    intervalId = setInterval(colorSwitcher, COLOR_TIMER);
}

function onStopSwitcher() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(intervalId);
}
