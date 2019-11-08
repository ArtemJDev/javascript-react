function plus() {
    let num1,
        num2,
        result;

        num1 = document.querySelector('#n1').value;
        num1 = parseInt(num1);
        num2 = document.querySelector('#n2').value;
        num2 = parseInt(num2);

        result = num1 + num2;
        document.querySelector('#out').innerHTML = result;
}

function minus() {
    let num1,
        num2,
        result;

        num1 = document.querySelector('#n1').value;
        num1 = parseInt(num1);
        num2 = document.querySelector('#n2').value;
        num2 = parseInt(num2);

        result = num1 - num2;
        document.querySelector('#out').innerHTML = result;
}

function div() {
    let num1,
        num2,
        result;

        num1 = document.querySelector('#n1').value;
        num1 = parseInt(num1);
        num2 = document.querySelector('#n2').value;
        num2 = parseInt(num2);

        result = num1 / num2;
        document.querySelector('#out').innerHTML = result;
}

function mult() {
    let num1,
        num2,
        result;

        num1 = document.querySelector('#n1').value;
        num1 = parseInt(num1);
        num2 = document.querySelector('#n2').value;
        num2 = parseInt(num2);

        result = num1 * num2;
        document.querySelector('#out').innerHTML = result;
}