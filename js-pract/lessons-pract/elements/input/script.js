
let checkx = document.getElementById('one');

function checkBox() {
    if(checkx.checked) {
        alert('выбран');
    } else {
        alert('не выбран');
    }
};

checkx.addEventListener('click', function() {
    checkBox();
});

//радио
let  radio = document.querySelectorAll('.rad');
let radWrapper = document.querySelector('.radioWrapper');
function radioFun() {
    for (let i = 0; i < radio.length; i++) {
        if(radio[i].checked ) {
            alert('выбран радио ' + i);
        }
    }
};

radWrapper.addEventListener('click',function() {
    radioFun();
});

