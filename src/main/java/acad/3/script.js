
function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Hello world");
//declaration
function calc(a,b) {
    return a + b;
}
console.log(calc(4,5));
console.log(calc(12,1));

//function expression
let a = function(a) {
    return a;
}

//es6
let calc2 = (a,b) => a+b;
console.log(calc2(4,5));

let string = "text";
console.log(string.length);
console.log(string.toUpperCase());

let str = "12.2";
console.log(Math.round(str));
console.log(parseFloat(str));

//CallBAck функиця которая должна быть выполенна после того ккак другая завершила свою работу
function first() {
    setTimeout(function() {
        console.log(1);
    },500);
}
function second() {
    console.log(2);
}
first();
second();

function learnJS(lang, callback) {
    console.log('I learn' + lang);
    callback();
}

 learnJS(' English', function() {
    console.log('I finish third lesson')
});

 learnJS(' English', done);

function done() {
    console.log('I finish third lesson');

}