const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const pumpkin = 'Jul 16, 2022 15:35:00';

function counter() {
    const pumpkinArrival = new Date(pumpkin);
    const currentDate = new Date().getTime();

    const secondsLeft = (pumpkinArrival - currentDate) / 1000;

    const days = Math.floor(secondsLeft / 3600 / 24);
    const hours = Math.floor(secondsLeft / 3600) % 24;
    const minutes = Math.floor(secondsLeft / 60) % 60;
    const seconds = Math.floor(secondsLeft) % 60;
    

    daysEl.innerHTML = days;
    hoursEl.innerHTML = zeroesInFront(hours);
    minutesEl.innerHTML = zeroesInFront(minutes);
    secondsEl.innerHTML = zeroesInFront(seconds);

    if (pumpkinArrival - currentDate < 0) {
        clearInterval(x);
        document.getElementById("heading").innerHTML = "EXPIRED";
      }
}

function zeroesInFront(time) {
  return time < 10 ? (`0${time}`) : time;
}

counter();
setInterval(counter, 1000);