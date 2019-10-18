    let i = 0;
    let string = "Test string for test";
    let element = document.querySelector(".demoWrite");
    let btnStart = document.querySelector(".startWrite");

    btnStart.addEventListener("click", function () {
        writer();
    });

    function writer() {
        if (i < string.length) {
            element.innerHTML += string.charAt(i);
            i++;
            setTimeout(writer, 100);
        } 
    }