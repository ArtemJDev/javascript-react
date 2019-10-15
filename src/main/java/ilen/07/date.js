//объект Date отвечает за Дату //1970 в мл, хранится в числе
let date = new Date("04 15 2025 12:33:53 GMT+0300"); //можно передовать аргументы для формирования даты от 2 до 7
let date3 = new Date(2019,03,15); 
let date2 = Date(); //не можем передовать переменные
console.log(date);
console.log(date2);
console.log(date3);

//UTC - работа с уникальным временем, не локальным


let now = new Date(); 
console.log(now.getHours());
console.log(now.setMonth()); //c 0 до 11
console.log(now.getMinutes());
console.log(now.getUTCFullYear());
console.log(now.getDay()); //возвращает с 0 (вс) до 6

var days = ["Вс", "Пон"];
console.log(days[now.getDay()]); //возвращает названия дня недели
console.log(now.getTime()); //возвращает время в миллисекундах


let newDate = new Date(); 
newDate.setDate(10); // месяц
console.log(newDate);
newDate.setFullYear(2017,7,21); // полный год
newDate.setHours(22,43,10,50); // часы, минуты, секунды, милисекунды
newDate.setMinutes(22); //минуты
newDate.setMonth(10,3); //месяц, день
newDate.setTime(121212); //количество милисеунд


//Преобразование
let dateStr = new Date(); 
console.log(dateStr.toString());
console.log(dateStr.toTimeString()); //только время и смещение относительно гринвича
console.log(dateStr.toJSON());
console.log(dateStr.toLocaleDateString()); //строковое представление даты применимое к лок настройкам
console.log(dateStr.toLocaleString()); 

console.log(Date.now()); //время эпохи с 1970


console.log(dateStr.toString());
console.log(Date.parse(dateStr.toString())); //парсинг из строкового представления













