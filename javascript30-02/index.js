const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const degSec = 360 / 60 * seconds + 90;
    const degMin = 360 / 60 * minutes + ((seconds / 60) * 6) + 90;
    const degHour = 360 / 12 * hours + ((minutes / 60) * 6) + 90;

    secondHand.style.transform = `rotate(${degSec}deg)`;
    minsHand.style.transform = `rotate(${degMin}deg)`;
    hourHand.style.transform = `rotate(${degHour}deg)`;
}

setInterval(setDate, 1000);

setDate();
