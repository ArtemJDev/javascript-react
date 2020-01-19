//selectors
//input[name="email"]
//.class[name="email"]
// p div h1 #id .class
//#id .class
//#id, .class

document.querySelectorAll("#header"); // 1 selector - [] NodeList
let elemSel = document.querySelector("p"); //  1st element // Element
let elemSelInner = document.querySelector("p").querySelector("span"); //  1st element in p

document.querySelector('p').onclick = function() {
    let myLi = document.querySelector('.karkas');
    console.log(myLi.parentNode);
    // console.log(myLi.childNodes);
    console.log(myLi.parentNode.firstChild.style.border = "1px solid red");

    console.log(myLi.nextSibling.style.border = "1px solid green");

    console.log(myLi.nextSibling.previousSibling.style.border = "1px solid green");
}

//access to text
console.log(myLi.nextSibling.firstChild.firstChild.nodeValue = 'hello'); // TextNode and change

console.log(myLi.nodeType); //1
console.log(myLi.nodeName); //DIV

//ignor text- comments
console.log(myLi.children); // access to tegs ignor textNode

console.log(myLi.firstElementChild); //lastElement

console.log(myLi.nextElementSibling); //newxt sibling element

console.log(myLi.childElementCount); //count - number

//change attr
myLi.id = 'hello';
//select form links and change attr
console.log(document.forms[0].action = 'http://ya.ru');
console.log(document.links[0].action = 'http://ya.ru');
//for attr "for" - htmlFor

//className
element.className = 'hello';//select  and change class
//atrr events - functions

//style,  getAttr
document.images[0].setAttribute('width', 100);
document.images[0].getAttribute('width');
if(document.images[0].hasAttribute('for')){} // true false
