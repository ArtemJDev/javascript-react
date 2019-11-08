class Man {
    constructor(height, weight, age, sex, name, passport, eye) {
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.sex = sex;
        this.name = name;
        this.passport = passport;
        this.eye = eye;
    }

}

let artem = new Man(172, 65 , 28, "M",'Artem', true, "blue");
console.log(artem);

class Car {
    constructor( brand, name, price, fuel_type, color, img){
        this.brand = brand;
        this.name = name;
        this.price = price;
        this.fuel_type = fuel_type;
        this.color = color;
        this.img = img;
    }
    render(x) {
        let out ='';
        out += `<h1 class="package-name">${this.brand}</h1><hr>`;
        out += `<p class="price">${this.price}</p>`;
        out += `<h2 class="disclaimer">Модель : ${this.name}</h2><hr>`;
        out += `<ul class="features"> <li>Тип топлива = ${this.fuel_type}</li>`;
        out += `<li>Цвет машины = ${this.color}</li>`;
        out += `<li>Фото машины</li>`;
        out += `<img src="${this.img}" alt=""></br>`;
        out += `<button class="button-primary">Купить</button>`;
        document.getElementById(x).innerHTML = out;
    }
}

let imgCar = "https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/car-512.png"; 
let lada = new Car("Lada", "210011", "2000$", 92 , "red", imgCar);
lada.render("pointIn");

class Header {
    constructor(h1, h2, text, img, arr) {
        this.h1 = h1;
        this.h2 = h2;
        this.text = text;
        this.img = img;
        this.contact = arr;
    }
    render(x) {
        //x - куда будет отрисовывать заголовок
        let out = '';
        out +=  `<h1>${this.h1}</h1>`;
        out += ` <h2>${this.h2}</h2>`;
        out += ` <p>${this.text}</p>`;
        out +=  ` <img src="${this.img}" alt="">`;
        out += `Контакты: ${this.contact}`
        out +=  ` <button class="button-primary">Позвонить нам</button>`;
        document.getElementById(x).innerHTML = out;
    }
}

let headerImg ='https://cdn0.iconfinder.com/data/icons/basic-ui-elements-round/700/08_thumbs_up-256.png';
let header = new Header("header 1", "header 2", "Вперед навстречу будущему",headerImg, ["12-34","44-28"] ); 
header.render('pointIn2');

let arrCar = [new Car("Lada", "210011", "2500$", 92 , "red", imgCar), 
                new Car("Lada2", "210011", "2200$", 92 , "black", imgCar)];

for(let i = 0; i < arrCar.length; i++) {
    arrCar[i].render("pointInCar" + i);
}

                