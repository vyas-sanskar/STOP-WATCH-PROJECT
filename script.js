
let hrs = document.querySelector("#hrs");
let mins = document.querySelector("#mins");
let second = document.querySelector("#seconds"); 
let ms = document.querySelector("#milliseconds");

let Startbtn = document.querySelector("#Startbtn");
let Stopbtn = document.querySelector("#Stopbtn");
let Restartbtn = document.querySelector("#Restartbtn");

let hoursTime = 0;
let minutesTime = 0;
let secondsTime = 0;
let millisecondsTime = 0;

let interval;

Startbtn.addEventListener("click", () => {
  interval = setInterval(() => {
    millisecondsTime += 10;

    if (millisecondsTime === 1000) {
      millisecondsTime = 0;
      secondsTime++;

      if (secondsTime === 60) {
        secondsTime = 0;
        minutesTime++;

        if (minutesTime === 60) {
          minutesTime = 0;
          hoursTime++;

          if (hoursTime === 12) {
            hoursTime = 0;
          }
          hrs.textContent = hoursTime < 10 ? "0" + hoursTime : hoursTime;
        }
        mins.textContent = minutesTime < 10 ? "0" + minutesTime : minutesTime;
      }
      
      second.textContent = secondsTime < 10 ? "0" + secondsTime : secondsTime;
    }

    
    let displayMs = millisecondsTime / 10;
    ms.textContent = displayMs < 10 ? "0" + displayMs : displayMs;
  }, 10); 

  Startbtn.disabled = true;
});

Stopbtn.addEventListener("click", () => {
  clearInterval(interval);
  Startbtn.disabled = false;
});

Restartbtn.addEventListener("click", () => {
  clearInterval(interval); 
  Startbtn.disabled = false;

  hoursTime = 0;
  minutesTime = 0;
  secondsTime = 0;
  millisecondsTime = 0;

  hrs.textContent = "00";
  mins.textContent = "00";
  second.textContent = "00"; 
  ms.textContent = "00";
});