var timer = 60  ;

var score = 0;

var rn = 0;

function makeBubble() {
  var clutter = "";

  for (i = 1; i <= 160; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
x 
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerIntr = setInterval(function () {
    if (timer > 0) {
      timer--;

      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerIntr);
      document.querySelector("#pbtm").innerHTML = "Game over";
    }
  }, 1000);
}

function newHit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = rn;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNumber = Number(details.target.textContent);

  if (clickedNumber == rn) {
    increaseScore();
    makeBubble();
    newHit();
  }
});

runTimer();
newHit();
makeBubble();
