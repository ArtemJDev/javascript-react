let buttons = document.querySelector('.buttons');


buttons.addEventListener('click', function (e) {
    let target = e.target;
    if (target.className = 'tablink') {
        let color = window.getComputedStyle(document.getElementById(target.value)).backgroundColor;
        openCity(target.getAttribute("value"), color,target);
    }
});

function openCity(id,color,element) {
    console.log(id);
    console.log(color);
    console.log(element);

    let tabContent = document.querySelectorAll('.tabcontent');
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(id).style.display = 'block';
    element.style.backgroundColor = color;

}
document.getElementById("defaultOpen").click();