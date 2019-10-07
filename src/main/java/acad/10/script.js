let name = " Ivan";
let age = 30;
let mail = "test@mail.ru";

//интерполяция
 document.write(`User  ${name} , age   ${age}, mail ${mail}`);


 //при каждой итерации создается своя копия переменной var - общая
 function mareArray() {
     let items = [];
     for(let i = 0 ; i < 10; i++) {
         let item = function() {
             console.log(i);
         }
         items.push(item);
     }
     return items;
 };

 let arr = mareArray();

 arr[1]();
 arr[2]();
 arr[3]();


//стрелочная функция без контекста вызова
 let fun = () => console.log(this);
 fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this); //получаем наш объект в контексте
        }
        say();
    }
} 

obj.sayNumber();

//стрелочная функция в обработчике событий
let push = document.querySelector(".push");
push.addEventListener("click", function() {
    let show = () => {
        console.log(this); // конеткст авыполнения кнопка на которой событие
    }
    show();
});


//параметры по умолчанию
function calcOrDouble(number , basis = 4){
    // basis = basis || 2; //раньше делали
     console.log(number * basis);
} 

calcOrDouble(2);


//class
class Rectangle {
    constructor( height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return  this.height * this.width;
    }
}

let square = new Rectangle(5,5);
console.log(square.calcArea());


class Option {
    constructor(height, width, bg, fontSize, textAlign,text) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.text = text;
    }
    create() {
        let div = document.createElement("div");
        div.style.height = this.height +"px";
        div.style.width = this.width +"px";
        div.style.background = this.bg;
        div.style.fontSize = this.fontSize +"px";
        div.style.textAlign = this.textAlign ;
        div.innerHTML = this.text;
        document.querySelector('.input').appendChild(div);

    }
}

let object1 = new Option(70,70,"red",20,"center","Text");
object1.create();