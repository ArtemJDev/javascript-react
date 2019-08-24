let buttons = document.getElementsByTagName('button');

for(let i = 0 , len = buttons.length; i<len; i++) {
buttons[i].onclick = function() {
    if(this.id === 'day') {
        document.body.className = 'day';
    } else if(this.id === 'night') {
    document.body.className = 'night';
    };
};
};
