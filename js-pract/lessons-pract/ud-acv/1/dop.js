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

let num = 33721;
let sum = 1;
while(num > 0) {
    sum = sum * num%10;
    num = Math.floor(33721/10);
}
console.log(sum);
let result = sun**3;
console.log(result);