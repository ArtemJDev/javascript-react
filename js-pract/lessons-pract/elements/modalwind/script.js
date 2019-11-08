let modal = document.querySelector('#mymodal');
let btn = document.querySelector('#btn');
let span = document.querySelector('.close');

btn.addEventListener('click', function() {
    modal.style.display ='block';
});

span.addEventListener('click', function() {
    modal.style.display ='none';
});

//если кликает не только по кнопки , если хочет закрыть
window.addEventListener('click', function(e) {
    if(e.target == modal) {
    modal.style.display ='none';
    }
})

console.log(modal);
