filterSelection('all');

function filterSelection(c) {
    let x = document.getElementsByClassName('filterDiv');
    if(c == 'all') {
        c = '';
    }
    for(let i = 0; i <x.length; i++) {
        w3RemoveClass(x[i], 'show');
        if(x[i].className.indexOf(c) > -1) {
            w3AddClass(x[i], "show");
        }
    }

}

function w3AddClass(element , name) {
    let arr1 = element.className.split(' ');
    let arr2 = name.split(' ');
        if (arr1.indexOf(name) == -1) {
            element.className += " " + name;
          }
}

function w3RemoveClass(element, name) {
    let arr1 = element.className.split(" ");
      while (arr1.indexOf(name) > -1) {
        arr1.splice(arr1.indexOf(name), 1); 
      }
    element.className = arr1.join(" ");
  }


  let btnContainer = document.getElementById("myBtnContainer");
  let btns = btnContainer.getElementsByClassName("btn");

  for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
  }
