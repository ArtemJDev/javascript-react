let clock = document.getElementById('clock');
let color = document.getElementById('color');

function hexoClock() {
    let time = new Date();
    let hour = (time.getHours() % 12).toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();

    if(hour.length < 2) {
        hour = '0' + h;
    }
    if(minutes.length < 2) {
        minutes = '0' + minutes;
    }
    if(seconds.length < 2) {
        seconds = '0' + seconds;
    }

    let clockString = `${hour} : ${minutes} : ${seconds}`;
    let colorString = `#${hour}${minutes}${seconds}`

    clock.textContent = clockString;
    color.textContent = colorString;
    document.body.style.backgroundColor = colorString;
}
hexoClock();
setInterval(hexoClock,1000);