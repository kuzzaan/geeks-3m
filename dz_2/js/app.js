var timerElement = document.getElementById("timer");
var messageElement = document.createElement("div");
messageElement.className = "message";

var minutes = 5;
var seconds = 0;

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function updateTimer() {
  seconds--;

  if (minutes === 0 && seconds === 0) {
    clearInterval(timerInterval);

    messageElement.textContent = "Время вышло!";
    document.body.appendChild(messageElement);
    return;
  }

  if (seconds < 0) {
    minutes--;
    seconds = 59;
  }

  timerElement.textContent = formatTime(minutes) + ":" + formatTime(seconds);
}

var timerInterval = setInterval(updateTimer, 1000);
