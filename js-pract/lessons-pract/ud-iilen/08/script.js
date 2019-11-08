function stringWork() {
    let str = document.querySelector('.title').innerHTML;

    String() //функция преобразования в строковое значения
    new String() //  функция конструктор - возвращает объект

    let result = new String(str);

    let result1 = str.charAt(0); // обращаемся по индексу к строке

    result1 = str.charCodeAt(0); // возвращает кожд символа юникод

    result1 = str.concat(123); // объединение + в конец

    result1 = String.fromCharCode(str.charCodeAt(0)); // преобразовани из кода

    result1 = str.indexOf("J",2); //возвращает первое вхождение , если не найдена -1  , 2-арг - с какого символа искать

    result1 = str.lastIndexOf("J"); //возвращает первое вхождение c конца, 2 - позиция поиска

    result1 = str.length; //длина

    result1 = str.localeCompare("A"); //результат сравнения, если строка меньше целевой -, если исходная больше то +, если == 0

    result1 = str.match(/\d+/g); //сответствие рег выражению

    result1 = str.replace(/\d+/, "RRR"); //сответствие рег выражению g - глобально

    result1 = str.search(/\d+/); // возвращает позицию, начало подстроки

    result1 = str.slice(1,3); // извлекает подстроку , начало - конечнй индекс(без второго до конца)

    result1 = str.split(" "); //  возвращает массив разделенный, втрой аргумент лимит массива

    result1 = str.substr(1.4); //  подстрока, позиция начала, количество в возвращаемой строке

    result1 = str.substring(1.4); //  подстрока, позиция начала, до какого индекса, не работает с отр числами

    result1 = str.toLocaleLowerCase(); //   в нижний регистр
    result1 = str.toLocaleUpperCase(); //   в верзний регистр
    result1 = str.toUpperCase(); //   в верзний регистр~~




    document.querySelector(".subtitle").innerHTML = result1;
}

window.onload = function() {
    stringWork();
}