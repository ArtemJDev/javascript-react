document.querySelector('#shop_ip').onclick = function() {
    ajax_get('ip.php',function(data) {
        console.log(data);
    });
    ajax_get('ip.php',function(data) {
        document.querySelector('#myip').innerHTML = data;
    });
}

function ajax_get(url, callback) {
let f = callback || function(data) {};
let request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
        f(request.responseText);
    }
}

request.open('GET',url);
request.send(); 



}