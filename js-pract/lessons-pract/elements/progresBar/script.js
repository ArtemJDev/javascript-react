function move() {
    let elem = document.querySelector('#myBar');
    let width = 10;
    let id = setInterval(frame,100);
    function frame() {
        if(width>=100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width +'%';
            document.querySelector('#label').textContent = width + '%';
        }

    }
}

let btn = document.querySelector('.progress_btn');
btn.addEventListener('click', ()=> {
    move();
});