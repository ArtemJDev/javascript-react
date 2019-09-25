//посчитать произведение цифр числа

for(let i = 0; i < 5; i ++) {
    let a = prompt("Какой тип товаров будете продавать");
    if((typeof(a)) === 'string' &&  (typeof(a)) === null && a != '' && a.length < 50){
        console.log("Все верно");
        mainList.shopGoods[i] = a;
     } else {
         console.log("Неверные данные")
         i--;
     }
}