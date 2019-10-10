let a = {
    a1 : 'Object a',
    _a3 : 5,
    a2: function() {
        console.log(this.a1);
    },
    set _a3(x) {
        this.a3 = x;
    },
    get _a3() {
        return this._a3;
    }
}

let b = {
    a1 : 'Object b',
    b1 : 'Object b',
    a2: function() {
        console.log('this is b2 method b'); // перезапишет метод a объекта a
    }
}
console.log(a);
console.log(a.a2());

console.log(b);

//прототипное наследование
// b.__proto__ = a; //прототип для b
Object.setPrototypeOf(b,a); // аналог
console.log(b.b1);
console.log(b.a1);
console.log(b.a2());
console.log("-----------")
a._a3 == 77;

//обращение к св-ву родителя
console.log(b.__proto__.a1);
