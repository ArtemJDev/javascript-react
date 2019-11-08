let container = document.querySelector('.container');

let btns = document.querySelectorAll('.btn');

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let current = document.querySelector('.active');
        current.className = current.className.replace(" active", "");
        this.className += " active";
    })
}