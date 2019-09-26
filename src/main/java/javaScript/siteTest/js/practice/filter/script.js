let inputText = document.querySelector('#elastic'); 

inputText.addEventListener('input', function() {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.elastic li');
    if(val != ' ') {
        elasticItems.forEach(function(elem) {
                if(elem.innerHTML.search(val) == -1) {
                    elem.classList.add('hide');
                    elem.innerHTML = elem.innerText;
                } else {
                    elem.classList.remove('hide');
                    let str = elem.innerText;
                    elem.innerHTML = insertMark(str,elem.innerHTML.search(val),val.length );
                }
        });
    } else {
        elasticItems.forEach(function(elem) {
            elem.classList.add('hide');
            elem.innerHTML = elem.innerText;

    })

    }
})

function insertMark(string, pos, len) {
    //подстветка mark
    return string.slice(0,pos)+'<mark>' + string.slice(pos, pos+len)+'</mark>' + string.slice(pos+len);
}


