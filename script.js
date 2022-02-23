const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    if (seconds === 59) {
        secondHand.style.transition = `none`;
    }

    const min = now.getMinutes();
    const minDegrees = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    if (min === 59) {
        minHand.style.transition = `none`;
    }

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    console.log(hour);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    if (hour === 11) {
        hourHand.style.transition = `none`;
    }
}

setInterval(setDate, 1000);