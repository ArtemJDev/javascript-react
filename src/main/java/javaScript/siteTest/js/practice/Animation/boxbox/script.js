let btn = document.querySelector('#btn');

function myMove() {
    let elem = document.querySelector('#myAnimation');
    let position = 0;
    let id = setInterval(frame,10);
    function frame() {
        if( position == 350) {
            clearInterval(id);
        } else {
            position++;
            elem.style.top = position + 'px';
            elem.style.left = position + 'px';

        }
    }
}

btn.addEventListener('click', function() {
    myMove();
});