let money  = +prompt("Ваш бюджет", "");
let shopName = prompt("Название вашего магазина");
let time = 19;

mainList = {
    budget: money,
    shopName: shopName,
    shopGoods: [],
    empoyees : {},
    open: true
}



if(time < 0) {
    console.log("Такого ен может быть");
} else if(time > 8 && time < 20){
    console.log("Время работать");
} else if(time < 24) {
    console.log("Уже слишком похдно");
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


