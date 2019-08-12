//любой объект соджержит ключ-значение
let optional = {
width: 1024,
height: 1024,
name: 'Test'
};

//свойства получаются через точки или через квадратные скобки
    console.log(optional.name);
// запись новой пары
optional.bool = false;
//добавлене объекста в объект
optional.colors = {
border: 'black',
bg: 'red'
};
//удаление для последующего удаления
optional.fordel = 'fordeleting';
//удаление
delete optional.fordel;


//вывод объекта в консоль
console.log(optional)

//аналог foreach
for (let key in optional) {
console.log('Свойство ' + key + " имеет значение: " + optional[key]);
}

//количество свойств в объекте
console.log(Object.keys(optional).length);