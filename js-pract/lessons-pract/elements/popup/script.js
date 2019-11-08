 function popup() {
     let pop = document.querySelector('#mypopup');
     pop.classList.toggle('show');
 }

document.querySelector('.popup').addEventListener('click',popup);