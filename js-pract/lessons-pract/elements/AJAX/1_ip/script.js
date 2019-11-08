document.querySelector('#shop_ip').onclick = function() {
    ajax_get();
}

function ajax_get() {
    //создаем объект класса, умеет отправлять фоновые запросы на сервер
let request = new XMLHttpRequest();

//статус готовности запроса который мы отослали, подвешиваем собыстие на readyState
request.onreadystatechange = function() {
    //выводим статусы 
console.log(request.readyState);
//request.readyState // 0 - new
//request.readyState // 1 - open
//request.readyState // 2 - send
//request.readyState // 3 - частично пришел ответ
//request.readyState // 4 - ответ пришел полностью
    if(request.readyState == 4 && request.status == 200) {
        document.querySelector('#myip').innerHTML =  request.responseText;
    }
}

//открываем соединение ("Запрос", "файл, айпи и тд")
request.open('GET','ip.php');

//отправляем запрос на сервер
request.send(); 

//принять ответ от серваре, сервер должен нам отослать ответ


}