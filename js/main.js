
const showHours = document.getElementById('hours');
const showMinutes = document.getElementById('minutes');
const showSeconds = document.getElementById('seconds');

setInterval(() => {
    const getTime = new Date();

    const hours = getTime.getHours();
    const minutes = getTime.getMinutes();
    const seconds = getTime.getSeconds();

    if (hours < 10) {
        showHours.textContent = `0${hours}`;
    } else {
        showHours.textContent = `${hours}`;
    }

    if (minutes < 10) {
        showMinutes.textContent = `0${minutes}`;
    } else {
        showMinutes.textContent = `${minutes}`;
    }

    if (seconds < 10) {
        showSeconds.textContent = `0${seconds}`;
    } else {
        showSeconds.textContent = `${seconds}`;
    }

}, 0);