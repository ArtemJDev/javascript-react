
let num = 50;

if(4*2 == 8*1) { //1 всегда true
console.log('True');
} else if(num < 50) {
console.log('False');
}

 switch(num) {
     case 49:
         console.log("true");
         break;
    case 50:
        console.log("false");
        break;
        default:
            console.log("не в этот раз");
            break;
 }

 while(num < 55) {
    console.log("true");
     num++;
 }