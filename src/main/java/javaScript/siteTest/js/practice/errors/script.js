//Для каждого случая можем написать свою ощшибку
let json = '{"id" : 2}';

try {
    let user = JSON.parse(json);
    console.log(user);
    if(!user.name) {
        //создание ошибки
        throw new Error("Данные не пришли")
    }
} catch(e) {
    console.log(e);
} finally { //по анологии java
    console.log('Normal');

}

try {
    console.log('Normal');
    console.log(a);
    console.log('After Normal');

} catch(e) {
    console.log('Error');
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
    console.log(`Мы поулчили ошибку ${e.name} `);

}

console.log('После блока ошибки');
