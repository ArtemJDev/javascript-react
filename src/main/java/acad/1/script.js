let money,
    shopName,
    time,
    price

function start() {
     money  = +prompt("Ваш бюджет", "");
     while(isNaN(money) || money =='' || money == null) {
        money  = +prompt("Ваш бюджет", "");
     }
     shopName = prompt("Название вашего магазина","").toLocaleUpperCase();
     time = 19;
}


start();

mainList = {
    budget: money,
    shopName: shopName,
    shopGoods: [],
    empoyees : {},
    open: true,
    discount: false,
    shopItems: [],
    chooceGoods: function chooceGoods() {
                for(let i = 0; i<5; i++) {
                    let a = prompt("какой товар будет продовать","");
                
                    if((typeof(a)) === 'string' && (typeof(a)) != null && a!= ''){
                        console.log("Все верно");
                        mainList.shopGoods[i] = a;
                    } else {
                        i = i -1;
                    }
                }
            },
    workTime: function workTime(time) {
                if(time < 0) {
                    console.log("Такого ен может быть");
                } else if(time > 8 && time < 20){
                    console.log("Время работать");
                    mainList.open = true;
                } else if(time < 24) {
                    console.log("Уже слишком похдно");
                }
            },
    employers: function employers() {
                for(let i = 0; i < 3; i++) {
                    let name = prompt("ВВедите имя сотрудника","");
                    if(name === 'string' && name != '' && (typeof(name)) != null) {
                        mainList.empoyees[i] = name;
                    }  else {
                        i--;
                    }
                }
            },
    dayBudget:function dayBudget() {
                console.log( mainList.mainList / 30);
            },
    makeDiscount: function makeDiscount() {
                if(mainList.discount == true) {
                    price = (price/100) * 80;
                }
            } ,
    chooseItem: function chooseItem() {
        let items = prompt("Перечислите через заптуую ваши товары", "");
        if((typeof(items))==='string' && items != '' && (typeof(items)) != null) {
            mainList.shopItems = items.split(",");
            mainList.shopItems.push(prompt("Может еще что- то?", ""));
            mainList.shopItems.sort();
        }
        
    }

}
