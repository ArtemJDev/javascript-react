localStorage.setItem("number", 1);//если ключ существует, значение перезапишется
localStorage.setItem("number2", 2);
console.log(localStorage.getItem("number2")); //получение ключа
localStorage.removeItem("number2");
console.log(localStorage.getItem("number2")); //null

localStorage.clear(); //очистка всего localStorage

window.addEventListener('DOMContentLoaded', function() {
//получаем данные чекбокса
    let checkBox = document.getElementById('rememberMe');
    let change = document.getElementById("change");
    let form = document.getElementsByTagName("form")[0];

if(localStorage.getItem("isChecked") === "true") {
    checkBox.checked = true; //стиль на чекбокс, постоянно отмечен если ранее отмечали
}
if(localStorage.getItem("bg") === "changed") {
    form.style.backgroundColor = "#FF4766";
}


    checkBox.addEventListener('click', function() {
        localStorage.setItem('isChecked', true);
    });

change.addEventListener('click', function() {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = "#FF4766";

});
//запись объекта в localStorage
let person = {
    name: "Alex",
    age: 25,
    tech: ["mobile", "notebook"]
}
// преобразуем объект в JSON для localStorage
let serializablePerson = JSON.stringify(person);
localStorage.setItem("Alex", serializablePerson);

console.log(JSON.parse(localStorage.getItem("Alex")));
//можно сохранять объекты не использхуя базы данных

});

