window.onload = function() {
let inp_email = document.querySelector('input[name=email]');
let inp_name = document.querySelector('input[name=name]');
let inp_phone = document.querySelector('input[name=phone]');

alert(inp_email.value);

document.querySelector('#send').onclick = function() {
    var params = 'email=' + inp_email.value + '&' + "name=" + inp_name +'&' + 'phone=' + inp_phone;
    ajaxPost(params);
}

function ajaxPost(params) {
let request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
        document.querySelector('#result').innerHTML =  request.responseText;
    
    }
}

request.open('POST',app.php);//меняем метод
request/setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
request.send(params);  //параметры передаются в send



}
}