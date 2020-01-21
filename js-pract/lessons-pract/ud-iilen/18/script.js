window.onload = () => {
    let email1 = document.getElementById('exampleInputEmail');
    let field = document.querySelectorAll('#firstForm input[type="checkbox"]');//collection checkbox
    for(let i = 0; i< field.length; i++) {
        console.log(field[i].type);
    }

    console.log(window.myForm); //select by name
    console.log(document.firstForm); //select by id
    console.log(document.forms[0]); //select  in []
    console.log(document.forms.myForm); //select by id

    console.log(document.forms.myForm.option); //select all option
    console.log(document.forms.myForm.elements); //elements in form
    console.log(document.forms.myForm.elements[0]); //elements in form by []
    console.log(document.forms.myForm.elements.option); //elements in form by id
    console.log(document.forms.myForm.elements.length); //length elements in form

    //check checkBox - access
    let option = document.forms.myForm.elements.option;
    for(let i = 0; i < option.length; i++) {
            if(option[i].checked) {
                console.log(option[i].value);
                option[i].defaultChecked; // in default checked (true/false)
            }
    }

    //form props
    let f = document.forms.firstForm;
    console.log(f.action);
    console.log(f.method);
    console.log(f.encoding);
    console.log(f.target);
    //method
    // f.submit();
    // f.reset();

    //field email
    let email = document.forms.myForm.elements.email;
    console.log(email.type); //text only for reading
    console.log(email.form); //ref to parent form
    console.log(email.name); //atr nane
    console.log(email.value); //value in email - for reading and writing

    //text - value// listneer - onChange attr - placeHolder
    //option.placeholder
    //password
    //option.password.value ='hello'
    //option.password.value  - cat get without cript

    //select
    // multiple=true - false - one prop / size - row count
    let select = document.forms.firstForm.elements.myselect;
    select.type; // select muptiply or select-one
    //select.options - [] all option select
    //select.selectIndex // selected element in options[]

    let optionsSel = document.forms.firstForm.elements.myselect.options;
    for(let i = 0; i < optionsSel.length; i++) {
        if(optionsSel.selected) {
            console.log(optionsSel[i].value);
            console.log(optionsSel[i].text); // can change
        }
}
//can add elements in select
let addInSel = document.forms.firstForm.elements.myselect;
addInSel.length; //can change remove or add
//remove
if(optionsSel.selected) {
    optionsSel[i] = null;
}

//create
let newSelected = document.forms.firstForm.elements.myselect;
let newOption = new Option(
    'Option new',//text
    10,//value
    false, //default select
    false//selected
);
newSelected[newSelected.length] = newOption;
newSelected[0] = newOption;

}