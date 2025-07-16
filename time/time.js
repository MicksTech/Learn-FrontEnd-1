const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    updateElement(hoursEl, hours);
    updateElement(minutesEl, minutes);
    updateElement(secondsEl, seconds);
}

function updateElement(el, newValue) {
    if (el.textContent != newValue) {
        el.textContent = newValue;
        el.classList.add('animate');
        setTimeout(() => el.classList.remove('animate'), 300);
    }
}

updateClock();
setInterval(updateClock, 1000);