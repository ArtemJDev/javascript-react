let rtl = document.getElementById('rtl');
let rtr = document.getElementById('rtr');
let rbr = document.getElementById('rbr');
let rbl = document.getElementById('rbl');
let ttl = document.getElementById('ttl');
let ttr = document.getElementById('ttr');
let tbr = document.getElementById('tbr');
let tbl = document.getElementById('tbl');
let block = document.getElementById('block');


rtl.addEventListener('input', function() {
    ttl.value = rtl.value;
    block.style.borderRadius = rtl.value+'px '+ rtr.value+'px ' + rbr.value+'px ' + rbl.value+'px ';

});
rtr.addEventListener('input', function() {
    ttr.value = rtr.value;
    block.style.borderRadius = rtl.value+'px '+ rtr.value+'px ' + rbr.value+'px ' + rbl.value+'px ';

});
rbr.addEventListener('input', function() {
    tbr.value = rbr.value;
    block.style.borderRadius = rtl.value+'px '+ rtr.value+'px ' + rbr.value+'px ' + rbl.value+'px ';

});
rbl.addEventListener('input', function() {
    tbl.value = rbl.value;
    block.style.borderRadius = rtl.value+'px '+ rtr.value+'px ' + rbr.value+'px ' + rbl.value+'px ';

});



