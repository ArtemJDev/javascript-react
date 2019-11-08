let btn = document.getElementsByTagName("button")[0];

btn.addEventListener('click', function() {
    let x = document.querySelector('.myDiv');
    if(x.innerHTML === "Hello") {
        x.innerHTML = "SwappedText";
    } else {
        x.innerHTML = "Hello";
    }
})