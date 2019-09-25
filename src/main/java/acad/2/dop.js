let week = ['понедельник', 'вторник', 'среда','четверг','пятница','суббота','воскресение'];

for(let i of week) {
    if(i == 'суббота' || i == 'воскресение'){
    console.log("Выходной день " + i);

    } else {
        console.log(i);
    }
    
}

let nums = ['123','312','456','654','789','987','1589'];


nums.forEach(function(item) {
    if(item.startsWith('3') || item.startsWith('7') ) {
        console.log(item);
    }
})