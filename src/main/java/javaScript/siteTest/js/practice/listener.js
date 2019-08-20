let btn = document.querySelectorAll('button');
let wrap = document.querySelector(".wrapper");
let link = document.querySelector("a");
// btn[0].onclick = function() {
//     alert('Вы нажали на кнопку');
// };

//первым агнументом то событие которое должнО произойти
btn[0].addEventListener('click', function() {
    alert('Вы нажали на кнопку');
    alert('Вы нажали 2 на кнопку');

});

//наведение на кнопку
// btn[0].addEventListener('mouseenter', function() {
//  alert("Наведение");
// });
//при наведении на элемент
btn[0].addEventListener('mouseenter', function(e) {
    console.log(e);
    let target = e.target;
   // target.style.display='none';
      console.log('Произошло событие : ' +   e.type + ' на элементе' + e.target );
     });

wrap.addEventListener('click', function(e) {
    console.log('Произошло событие : ' +   e.type + ' на элементе' + e.target );
});

//отмена события 
link.addEventListener('click', function(e) {
   e.preventDefault(); 
    console.log('Произошло событие : ' +   e.type + ' на элементе' + e.target );
});

//события на каждую кнопку при ухода с него
btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('Покинула');
    })
});