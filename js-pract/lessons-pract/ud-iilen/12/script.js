//window - окно веб браузера , его свва и методы глобальны, на вершгине цепочки областей видимости

// window.location = 'http://ya.ru'; //загрухка в url адреса

// window.alert();

// window.document.getElementById("id");


//вызывается фнция через один или определенные интервалы, методы window
//через определенное время
// setTimeout();
//через определенное интервал
// setInterval();

window.onload = function () {
    let wrap = document.getElementById('popup_overlay');
    let btn = document.getElementById('popupIn');

    btn.onclick = popup;

    let tIn, tOut;


    

    function popup() {
        wrap.style.display = "block";
        wrap.style.opacity = "1";
        popupin(1);
    }

    function popupin(x) {
        let op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;

        if(op < x) {
            clearInterval();
            op += 0.05;
            wrap.style.opacity = op;
            // setTimeout(popupin, 50, x);
            tIn = setTimeout(function() {
                popupin(x);
            }, 50);
        }
    }


    setTimeout(popup, 5000);

    let stop = setInterval(changeColor, 1000);

    let h1 = document.getElementById('header');

    h1.onclick = function() {

        clearTimeout(stop);
    }
     function changeColor() {
        if(h1.style.color === 'black') {
            h1.style.color = 'white';
        } else {
            h1.style.color = 'black';
        }
     }

     do {
            let str = this.prompt("Enter msg");
            let result = confirm("You entered " + str + " press OK or cansel")
     }
     while(!result)
}