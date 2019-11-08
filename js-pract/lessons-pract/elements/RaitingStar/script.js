let raiting = document.querySelector('.raiting');
let raitItem = document.querySelectorAll('.raiting-item');

raiting.addEventListener('click', function(e) {
    let target = e.target;
    if(target.classList.contains('raiting-item')) {
        removeClass(raitItem,'current-active')
        target.classList.add('active', 'current-active');
    }
});

raiting.addEventListener('mouseover', function(e) {
    let target = e.target;
    if(target.classList.contains('raiting-item')) {
        removeClass(raitItem,'active')
        target.classList.add('active');
        mouseOverActiveClass(raitItem);

    }
});

raiting.addEventListener('mouseout', function() {
    addClass(raitItem,'active');
    mouseOutActiveClass(raitItem);
})

function addClass(arr) {
    for(let i = 0, iLen = arr.length; i < iLen; i ++) {
        for(let j =1; j < arguments.length; j ++) {
            raitItem[i].classList.add(arguments[j]) ;
        }
    }
}

function removeClass(arr) {
    for(let i = 0, iLen = arr.length; i < iLen; i ++) {
        for(let j =1; j < arguments.length; j ++) {
            raitItem[i].classList.remove(arguments[j]) ;
        }
    }
}

function mouseOverActiveClass(arr){
    for(let i = 0, iLen = arr.length; i< iLen; i++ ) {
        if(arr[i].classList.contains('active')) {
            break;
        } else {
            arr[i].classList.add('active');
        }
    }
}

function mouseOutActiveClass(arr){
    for(let i = arr.length-1; i>= 1; i-- ) {
        if(arr[i].classList.contains('current-active')) {
            break;
        } else {
            arr[i].classList.remove('active');
        }
    }
}

//refactor
// (function(){
// 	var container = document.querySelector('.rating');
// 	var items = container.querySelectorAll('.rating-item')
// 	container.onclick = function(e) {
// 		if( ! e.target.classList.contains('active') ){
// 			items.forEach(function(item){
// 				item.classList.remove('active');
// 			});
// 			e.target.classList.add('active');
// 		}
// 	}
// })();