const minutesElement = document.getElementById('mins');
const secondsElement = document.getElementById('secs');
const millisecondsElement = document.getElementById('mils');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let intervalId;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startTimer() {
    intervalId = setInterval(() => {
        milliseconds++;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
        }
        updateTimerDisplay();
    }, 10);
}

function stopTimer() {
    clearInterval(intervalId);
}

function resetTimer() {
    clearInterval(intervalId);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
    millisecondsElement.textContent = formatTime(milliseconds);
}

function formatTime(time) {
    return time.toString().padStart(2, '0');
}

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
   