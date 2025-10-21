let countdown;
let timerRunning = false;
let totalSeconds = 24 * 3600;

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

const tickSound = new Audio("mixkit-wall-clock-tick-tock-1060.wav");

function updateTimerDisplay() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    hoursEl.textContent = hours.toString().padStart(2,'0');
    minutesEl.textContent = minutes.toString().padStart(2,'0');
    secondsEl.textContent = seconds.toString().padStart(2,'0');
}

function startCountdown() {
    if(timerRunning) return;
    timerRunning = true;

    countdown = setInterval(() => {
        if(totalSeconds <= 0){
            clearInterval(countdown);
            timerRunning = false;
            alert("Time's up!");
        } else {
            totalSeconds--;
            updateTimerDisplay();
            tickSound.currentTime = 0;
            tickSound.play();
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(countdown);
    timerRunning = false;
    tickSound.pause();
    tickSound.currentTime = 0;
}

function resetCountdown() {
    clearInterval(countdown);
    timerRunning = false;
    totalSeconds = 24 * 3600;
    updateTimerDisplay();
    tickSound.pause();
    tickSound.currentTime = 0;
}

startBtn.addEventListener("click", startCountdown);
stopBtn.addEventListener("click", stopCountdown);
resetBtn.addEventListener("click", resetCountdown);

updateTimerDisplay();
