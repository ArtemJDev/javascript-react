let options = {
    width: 1366,
    height: 768,
    backgroun: 'red',
    font: {
        size: '16px',
        color: '#fff'
    }
};

console.log(JSON.stringify(options)); 
//{"width":1366,"height":768,"backgroun":"red","font":{"size":"16px","color":"#fff"}} все в двойных ковычках.

//обратная операция
//из JSON в parse
console.log(JSON.parse(JSON.stringify(options))); 
