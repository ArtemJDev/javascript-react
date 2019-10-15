function displayTime() {
    let now = new Date();
    let result = document.getElementById("clock");
    result.innerHTML = now.toLocaleTimeString();

    setTimeout(displayTime, 1000); //делаем рекурсию
}

window.onload = displayTime();
window.addEventListener("load", displayTimeReverse);

function displayTimeReverse() {
    let now = new Date();
    let result = document.getElementById("reverse");
    //date in future
    let sDate = new Date(2019,11,31);
    let timer = sDate.getTime() - now.getTime();

    let days = parseInt(timer/(24*60*60*1000));
    let hours = parseInt(timer/(60*60*1000))%24;
    let min = parseInt(timer/(60*1000))%60;
    let sec = parseInt(timer/1000)%60;

    result.innerHTML = "До нового года осталось: " +  days + " дней, " + hours + " часов, " + min + " минут, " + sec + " секунд.";

    setTimeout(displayTimeReverse, 1000); //делаем рекурсию
}