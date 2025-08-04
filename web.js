
var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 90;

countdownNumberEl.textContent = countdown;

setInterval(function() {
  countdown = --countdown <= 0 ? 90 : countdown;

  countdownNumberEl.textContent = countdown;
}, 1000);