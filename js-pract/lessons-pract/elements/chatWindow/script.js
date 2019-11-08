let open = document.querySelector(".open-button");
let close = document.querySelector(".cancel");
let form = document.querySelector(".chat-popup");

open.addEventListener('click',function() {
    form.style.display ="block";
})

close.addEventListener('click',function() {
    form.style.display ="none";
})