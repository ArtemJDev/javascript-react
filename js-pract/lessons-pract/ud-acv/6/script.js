let btn = document.getElementsByTagName('button');
let overlay = document.querySelector('.overlay');
let link = document.getElementsByTagName('a');

//отмена стандартного поведения браузера
link[0].addEventListener('click', function(e) {
    e.preventDefault();
    console.log("Произошло событие - " + event.type +" на элементе" + event.target);

})

//простой способ назначать события //можнго назначить только одну функцию
btn[0].onclick = function() {
    alert('Hey');
}


//назначение дополнительного события
btn[0].addEventListener('click',function(event) {
    console.log("Произошло событие - " + event.type +" на элементе" + event.target);
})


//наведение мыши
btn[1].addEventListener('mouseenter',function(event) {
    console.log("Произошло событие - " + event.type +" на элементе" + event.target);

})
//убрал мышь с элемента
btn[2].addEventListener('mouseleave',function() {
    alert("mouseleave");
})

//всплытие событи //сначало работает событие на которе кликнули, потом оно поднимается по иерархии
//обработчик срабатывает на вложенном, потом на родители, и по цепочке выше и выше
overlay.addEventListener('click',function(event) {
    console.log("Произошло событие - " + event.type +" на элементе" + event.target);
})