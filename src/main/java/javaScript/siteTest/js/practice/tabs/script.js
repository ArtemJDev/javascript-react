let tab ;
let tabContent;

window.onload =function() {
    tabContent = document.querySelectorAll('.tabContent');
    tab = document.querySelectorAll('.tab');

    hideTabsContent(1);
}
//скрываем все кроме оджного
function hideTabsContent(n) {
    for( let i = n; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
        

    }
}
//показывает все кроме одного
function showsTabContent(n) {
    console.log(tabContent[n]);

    if(tabContent[n].classList.contains('hide')) {
        hideTabsContent(0);
        tab[n].classList.add('whiteborder');
        tabContent[n].classList.remove('hide');
        tabContent[n].classList.add('show');
    }
}
//событие по клику
document.getElementById('tabs').onclick = function(e) {
    let target = e.target;
    if(target.className == 'tab') {
        for(let i = 0; i < tab.length; i ++) {
            if( target == tab[i]) {
  
                console.log(e.target);

                showsTabContent(i);
                break;
            }
        }
    }
}

