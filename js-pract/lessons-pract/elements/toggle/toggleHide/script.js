let btn = document.getElementsByTagName("button")[0];

btn.addEventListener('click', function() {
    let x = document.getElementsByClassName("myDiv")[0];
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
})