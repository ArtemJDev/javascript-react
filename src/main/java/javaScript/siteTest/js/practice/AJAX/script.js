let inputRub = document.getElementById('rub');
let inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    //решаем идти на сервер
    let reques = new XMLHttpRequest();
    //reques.open(method, url, async, login, pass);
    //настраивает запрос на сервер
    reques.open('GET','current.json');
    //что мы хотим получить
    reques.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    //запуцскает запрос и он идет за ответом в сервер
    reques.send();


    /** status hhtp код ответа сервера, в каком состоянии находится сервер
    * statusText текстовый ответ
    * responseText текст ответа сервера, то что Бэк хочет послать со своего окружения
    * readyState возвразщает текущее состояние объекта XmlHTTP 0 1 2 3 4 
    * есть события реагирущие на эти стостояния readystatechange
    **/

    reques.addEventListener('readystatechange',function() { //можно использовать load, отвечает все ОК
        if(reques.readyState === 4 && reques.status == 200) {
                let data = JSON.parse(reques.response);

                inputUsd.value =  inputRub.value/ data.usd;
        } else {
            inputUsd.value = "что-то пошло не так!"
        }
    });
});