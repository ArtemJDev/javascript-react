//events
window.onload = () => {
//props event register onload...onclick..onchange

//click
let button = document.querySelector(".btn-default");
button.onclick = () => {
    document.forms[0].submit(); //send form
}

//addEventListener(1,2,3)
button.addEventListener("click", function() {}, false );//1 - type event 2 - func() or nameFunc, 3 - true/false
//we can add mult events, can register many listeners, call in order

//deleteEvent
button.removeEventListener

//url
let query = location.search;
console.log(query)
if(query != ''){ //empty string in 
    button.removeEventListener(click, func, false);
}

//for EE attachEvent - detachEvent

//registe on different browser
if(button.addEventListener) {
    button.addEventListener("click", function func() {console.log(1);}, false)
} else if(button.attachEvent) {
    button.attachEvent("onclick",function func() {console.log(1);})
}

//check email password - yes - send to server
function funcSend() {
    let form = document.forms.myForm;
    let empty = false;

    for(let i = 0; i < form.length; i++) {
        if(form.elements[i].type =="text" || form.elements[i].type =="password") {
            if(form.elements[i].value =="") {
                form.elements[i].style.borderColor = "red";
                empty = true;
            }
        }
    }
    if(empty) {
        alert("Заполните поля")
    } else {
    form.submit();
    }
}
funcSend();


}