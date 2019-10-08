//шаблон
class Header {
    constructor(h1, h2) {
        this.h1 = h1;
        this.h2 = h2;
    }
    render(x) {
        let out ='';
        out += `<h1>${this.h1}</h1>`;
        out += `<h2>${this.h2}</h2>`
        document.getElementById(x).innerHTML = out;
    }
    static hello(a) {
        console.log("work static method " + a)
    }
}
//static method
Header.hello("test");

const header = new Header("Our new Header", " Our new H2");
console.log(header.render("input"));



//Наследование - расширение шаблона
class Header2 extends Header {
    constructor(h1,h2, hero) {
        super(h1,h2);
        this._hero = hero;
    }
    get hero() {
        return this._hero;
    }
    set hero(c) {
        this._hero = c;
    }
}
const header2 = new Header2("header2 Our new Header" , "Header2 Our new H2", "Go-Go-go: our motto");

header2.render("input");

//Getter and Setter
//bad
header2.h2 = 3.23;
header2._hero = .1465;

header2.hero ="Google"//setter
console.log(header2.hero); // getter
