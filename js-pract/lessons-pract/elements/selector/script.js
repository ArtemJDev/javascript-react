//options
let spec = document.querySelector('#mySelect');

function funOption() {
    let sel = document.getElementById('mySelect').selectedIndex;
    let opt = document.getElementById('mySelect').options;
    console.log("Выбрана опция - " + opt[sel].text);
} 


spec.addEventListener('change', function() {
    funOption();
});

//inputRange
let range = document.getElementById('r1');
let pInput = document.getElementById('one');
let pInput2 = document.getElementById('two');
let elemDiv = document.querySelector('.widthDiv');
console.log(elemDiv);


function funRange() {
      pInput.innerHTML = range.value;
      pInput2.value = range.value;
      let num = elemDiv.style.clientWidth;
      elemDiv.style.width = range.value  + 'px';

};

range.addEventListener('input', function() {
    funRange();
});

//div

