// btn.addEventListener('click', function() {
//     alert('Что то произошло');
// });

// let func1 = function(param, func2) {
//     func2(function(param,func3) {
//         func3(function(param,func4){

//         }
//     )});
// };

let drink = 1;


function shoot(arrow, headshot, fail) {
    console.log('Вы сделали выстрел...');

    setTimeout(function() {
        Math.random() > .5 ? headshot({}) : fail("Вы промохнулись");
    }, 3000)
}

function win() {
    console.log("Вы победили");
    (drink == 1) ? byBeer() : byMoney();

}

function byBeer() {
    console.log('Вам купили писо');
}
function byMoney() {
    console.log('Вам дали денег');
}

function loose() {
    console.log("Вы проиграли");
}


shoot({},function(mark) {
    console.log("Вы попали в цель");
    win(mark, byBeer , byMoney);
}, function(miss) {
    console.error(miss);
    loose();
})