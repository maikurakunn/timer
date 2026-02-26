let timer;
let seconds = 0;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

function updateTimerDisplay() {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(Math.floor(seconds % 60)).padStart(2, "0");
  const millis = String(Math.floor((seconds % 1) * 100)).padStart(2, "0");
  timerDisplay.textContent = `${mins}:${secs}.${millis}`;
}

startBtn.addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(() => {
      seconds += 0.2; // 小数点以下の管理
      updateTimerDisplay();
    }, 100); // 更新間隔を100msに設定
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  updateTimerDisplay();
});

