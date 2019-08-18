//to string
//1)
console.log(typeof(String(4)));
//2
console.log('www' + "trr"); //конкатенация
console.log(typeof('' + 5)); //ссумирование со строкой
console.log('https://vk.com/catalog' + 5);//преобразхование в использовании

//to number
//1
console.log(typeof(Number('5'))); // преобразование
//2
console.log(typeof(5 + +'5')); //+ перед строкой - число
//3
console.log(typeof(parseInt('15px',10)));

let answer = +prompt("Hello",'0 or 1'); //в использовании
console.log(typeof(answer));

//boolean
// 0,'', null, underfined, Nan - false (пробел это уже true)
let switcher = null;
if(switcher) {
    console.log("Yes");
} 

switcher = 1; //стало true
if(switcher) {
    console.log("1");
} 

//2
console.log(typeof(Boolean('5')));
//3
console.log(typeof(!!'5'));
