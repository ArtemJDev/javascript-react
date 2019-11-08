let tab = document.querySelector('.tab');

tab.addEventListener('click', function(e) {
    let target = e.target;

    if(target.tagName == 'BUTTON') {
        target.onclick = openCity(target.value);
    }
})

function openCity(cityName) {
    let tabcontent = document.querySelectorAll('.tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    let tablinks = document.querySelectorAll('.tablinks');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(cityName).style.display = "block";
    target.className += " active";

}