//id - uniq
let elId = document.getElementById("nameId");


//many elements by different id
function getElements() {
    let elem = {};
    //arguments
    for(let i = 0; i < arguments.length; i++) {
        let id = arguments[i];
        let element = document.getElementById(id);
        if(element == null) {
            continue;
        }

        elem[id] = element;
    }
    return elem;
}
let result = getElements("nameId1","nameId2","nameId3");


//select by name attr - name use when form, frame, img , not uniq
let elName = document.getElementsByName("email"); // result = nodeList - []
let elName2 = document.getElementsByName("email")[0].style.border = "1px solid red";//change style


//select by type
let elType = document.getElementsByTagName("p"); //all html by type - NodeList []

let elIdType = document.getElementById("outer");
elIdType.getElementsByTagName("div");


//select all img, links, forms
let arrImg = document.images; //img collection []
document.links; //links collection []
document.forms; //forms collection []
arrImg[0].style.border = "1px solid black";


//select by class
let elClass = document.getElementById("stuck").className; //print class by id
let elClass2 = document.getElementsByClassName("class class2"); // [] NodeList