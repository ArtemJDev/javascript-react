let a = 5;
let b = 10;

let obj = {
    prop1 : 30,
    prop2 : 50,
    one: 'Hello',
    two : 'World',
    'some string' : a +  b,
    three : {
        a:1,
        b:2,
        c: {
            'str1' : 10,
            'str2' : 15,
        }
    },
    // five: underfined
};

//проверка наналичие свойства--------------------

if(obj.one) {
    console.log(obj.one)
}
if('one' in obj) {
    console.log("Hello ffrom for in")
}
//проверка только у объектов свобственных, не наследуемых
if(obj.hasOwnProperty('one')) {
    console.log("hasOwnProperty")
}

//истина если собственное свойство и аттрибут истина
if(obj.propertyIsEnumerable('one')) {
    console.log("propertyIsУnumerable")
}

if(obj.one !== undefined) {
    console.log('Not underfined')
}
//обход только собственныхз свойств
function iteration(o) {
    for (let i in o) {

        if(!o.hasOwnProperty(i)) {
            continue;
        }

        if( typeof o[i] === 'function') {
            continue;
        }

      if (typeof o[i] == "object") {
        iteration(o[i]);
      } else {
        console.log(i);
      }
    }
  }



//методы----------------------------
let obj3 = {
    prop1 : 30,
    prop2 : 50,
    func : function() {
        console.log(this.prop1 + this.prop2);
    }
}
//определдение метода за пределами объекта
obj3.func2 = function() {;
    console.log("fun2")
}

function foo() {
    console.log("fun3");
}
obj3.func();
obj3.func3 = foo;

obj3.func2();
obj3.func3();



///свойства  сметодоами доступа-------------
let obj4 = {
    prop1 : 10,
    prop2 : 20,
    func : function() {
        console.log(this.prop1 + this.prop2);
    },
    //метод получения
    get summ() {
        return this.prop1 + this.prop2;
    },
    //метод записи
    set summ(value) {
        this.prop1 += value;
    }
}
obj4.summ = 5;
console.log(obj4.summ);

///свойства  аттрибюуты (имя, значение,  признак доступностьи для записи,  для перечисления для настройки)-------------
let obj6 = {
    prop1 : 10,
    prop2 : 20,
    func : function() {
        console.log(this.prop1 + this.prop2);
    },
    //метод получения
    get summ() {
        return this.prop1 + this.prop2;
    },
    //метод записи
    set summ(value) {
        this.prop1 += value;
    }
}

Object.defineProperty(obj6, 'prop3', {
    value:100,
    writable: true, //доступность для записи можетм ли изменить
    enumerable : true, // доступность для перечиления циклом
    configurable: true // доступность свва для насройки
});
Object.defineProperty(obj6, 'prop3', {
    
    value: 50,
    configurable: true // доступность свва для насройки
});

iteration(obj6);


//создание собств функций констуркторов---------------
// let o2 = new function(a,b,c);

function People(name, age) {
    this.name = name;
    this.age = age;

    this.summ = function() {
        return this.name + " - " + this.age;
    }
}
// People.prototype = obj1; указание прототипа для people
let Ben = new People('Ben', 18);
console.log(Ben.name);
console.log(Ben.summ());