//найти элемент по id
//document.getElementById('btn'); //js
//$('#btn'); //jq
$(document).ready(function() {
$('.list-item:first').hover(function() {
    $(this).toggleClass('active');
});

$('.list-item:eq(2)').on('click', function() { //аналог addEventListener
    $('.image:even').fadeToggle('slow');
})
//ручная анимация
$('.list-item:eq(4)').on('click', function() {
    $('.image:odd').animate({
        opacity: 'toggle', 
        height: 'toggle'
    },3000);
});
});

/** 
 SPA - single page application - программа в браузере,  пример почта
framework - готовое решение, библиотека - собирая в единую целую создаем программу
angular - на typeScript Google, ,большие крупные проекты
1. nodejs > npm >
2. Type Script
3. Webpack - сборщик модулей
4. MVC 
5. Angular

React - библиотека - использует jsx,  HTML + JS
Facebook
Facebook, twitter, instagram
1. nodejs > npm
2. Babel
3. JSX препроцессор
4. React

Vue -  библиотека >  самвй легкий
1. nodejs > npm
2. Babel
3. Webpack - сборщик модулей
4. Vue