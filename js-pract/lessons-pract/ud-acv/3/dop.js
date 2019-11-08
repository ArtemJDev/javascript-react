let str = 'урок 3-был слишком легким';

str = str.slice(0,1).toUpperCase() + str.slice(1);
str = str.replace('-',' ');
str = str.slice(0, str.search('легким'));
str = str.replace(/.{2}$/, "o")

console.log(str);

let arr = [20, 33, 1 , "Human" , 2 , 3];

let result = 0;
arr.forEach(function(elem) {
    if((typeof(elem)) === 'string') {
        return;
    } else {
        result = result + Math.pow(elem, 2);
    }
    return result;
})
console.log(result);