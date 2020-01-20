document.querySelector("h2").onclick = () => {
    let elem = document.querySelector(".current");
    elem.innerHTML = "Chenge on Hello";

    elem.outerHTML = "<h1>" + elem.outerHTML + "</h2>";

    // elem.insertAdjacentHTML("beforebegin", '<strong>beforebegin</strong>'); //1 pozition
    // elem.insertAdjacentHTML("afterbegin", '<strong>afterbegin</strong>'); //1 pozition
    // elem.insertAdjacentHTML("beforeeend", '<strong>beforeend</strong>'); //1 pozition
    // elem.insertAdjacentHTML("afterend", '<strong>afterend</strong>'); //1 pozition

    let link = document.querySelector('a');
    
    //rewriting text in diff browsers
    function textContent(el, value) {
        let content = el.textContent;
        if(value === underfined) {
                if(content !== underfined) {
                    return content;
                } else {
                    return el.innerText; //EE
                }
        }else  {
            if(content !== underfined) {
                el.textContent = value;
            } else {
                el.innerText = value; //EE
            }
        }
    }

    let div = document.querySelector(".tyest");
    console.log(div.innerHTML);

    //traversal of all elements of the parent
    function textContent(el) {
        let child, type, s = "";

        for(child = el.firstChild; child != null; child = child.nextSibling) {
            type = child.nodeType;
            if (type == 3) { //text
                s += child.nodeValue;
            } else if (type == 1) { //element
                s += textContent(child);
            }
        }
        return s;
    }

    console.log(textContent(div));
}

let button = document.querySelector(".button");
button.onclick = () => {
    let newDiv = document.createElement("div"); //1 - teg name
    let newText = document.createTextNode("Some String");
    let newComm = document.createComment("Comment");
    let copyButton = button.cloneNode(); // only wrapper, if not - true
    console.log(copyButton);

    newDiv.appendChild(newText); //add textNode
    console.log(newDiv);

    let wrap = document.querySelector(".tyest");
    wrap.insertBefore(newDiv, null);

    let link = document.querySelector("a");
    // wrap.removeChild(link);
    wrap.replaceChild(newDiv, link);

    //fragment sort
    function r(el) {
        let fr = document.createDocumentFragment();
        while(el.lastChild) {
            fr.appendChild(el.lastChild)
        }
        el.appendChild(fr);
    }
    
    r(document.querySelector(".tyest"));
}

