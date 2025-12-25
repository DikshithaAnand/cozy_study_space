let initialTime = 25 * 60;
let time = initialTime;
let timer = null;
let rainOn = false;

const timeEl = document.getElementById("time");
const msgEl = document.getElementById("message");
const goalInput = document.getElementById("goal");
const rain = document.getElementById("rain");

goalInput.value = localStorage.getItem("goal") || "";
goalInput.oninput = () => localStorage.setItem("goal", goalInput.value);

function updateDisplay() {
  const m = Math.floor(time / 60);
  const s = time % 60;
  timeEl.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
}

function startTimer() {
  if (timer) return;
  msgEl.textContent = "Stay gentle and focused ✨";
  timer = setInterval(() => {
    time--;
    updateDisplay();
    if (time <= 0) {
      pauseTimer();
      msgEl.textContent = "Session complete 🌱 Be proud of yourself.";
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  pauseTimer();
  time = initialTime;
  updateDisplay();
  msgEl.textContent = "You are doing enough 🌱";
}

function setFocus(min) {
  resetTimer();
  initialTime = min * 60;
  time = initialTime;
  updateDisplay();
}

function toggleTheme() {
  document.body.classList.toggle("night");
  document.body.classList.toggle("day");
}

function toggleSound() {
  rainOn ? rain.pause() : rain.play();
  rainOn = !rainOn;
}

updateDisplay();
