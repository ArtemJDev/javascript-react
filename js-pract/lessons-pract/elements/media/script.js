//ширина окна пользователя
let screenW = window.innerWidth;
console.log(screenW);
//высота окна пользователя
let screenH = window.innerHeight;
console.log(screenH);


//второй способ - размер документа
let screenW2 = document.body.clientWidth;
console.log(screenW2);

//третий вариант
let screenW3 = document.documentElement.clientWidth;
console.log(screenW3);


let screen4 = window.matchMedia("(max-width:768px)");
if(screen4.matches) {
    console.log("<768");
} else {
    console.log(">768");
}

//обработчик событий
if(matchMedia) {
    let screen5 = window.matchMedia("(max-width:768px)");
    screen5.addListener(changes);
    changes(screen5);
}

function changes(screen) {
    if(screen.matches) {
        console.log("<768");
    } else {
        console.log(">768");

    }
}


//практ использование
if(matchMedia) {
    let screen6 = window.matchMedia("(max-width:768px)");
    screen6.addListener(changes2);
    changes2(screen6);
}
function changes2(screen) {
    let message = (screen.matches ? "less" : "more") + " than 768px";
    let now = document.getElementById("now");
    now.innerHTML = message;
    console.log(now);
}