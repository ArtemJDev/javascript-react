let arr = [];
let ask = 5;
let result = 0;

for(let  i =0; i<ask;i++) {
    arr[i] = [];
    for(let  j =0; j<ask;j++) {
        arr[i].push(j);
        result += j;
    }
}

console.log(arr);
console.log(result);
