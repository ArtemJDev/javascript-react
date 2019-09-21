document.querySelector('.nav').onmouseover = function(event) {
    let target = event.target;
    if(target.className == 'menu-item') {
        let s = target.querySelector('.submenu');
        closeMenu();
        s.style.display ='block';
    }

}

document.onmouseover = function(event) {
    let target = event.target;
    if(target.className != 'menu-item' && target.className != 'submenu') {
        closeMenu();
    }
}


function closeMenu() {
    let menu = document.querySelector('.nav');
    let submenu = document.querySelectorAll('.submenu');
    for(let i = 0; i < submenu.length; i ++) {
        submenu[i].style.display ='none';
    }
}