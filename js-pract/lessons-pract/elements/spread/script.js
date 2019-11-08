
let video = ['toytube','vimeo','rutube'];
let blogs = ['worpress','lifejournal','boger'];
let internet =[video,blogs,'vk','facebook'];

console.log(internet);

let spreadStat =[...video,...blogs,'vk','facebook']; //оператор разворота
console.log(spreadStat);

function log(a,b,c ) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(c+b+c);

}

let numbers = [2,5,7];

log(numbers); // так не получится
log(...numbers); // так подставятся все
