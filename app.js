const form = document.querySelector('form');
const alert = document.getElementById('alert');
const reset = document.getElementById('reset');

var empty = /^$/;
var cardformat = /^[\d]{12,16}$/;
var cvcformat = /^[\d]{3}$/;
var amountformat = /^[\d]+$/;
var fnameformat = /^[\D]+$/;
var lnameformat = /^[\D]+[\s]?$/;
var cityformat = /^[\D]+[\s]?$/;
var postcodeformat = /^[\d]{7,}$/;

var cardnum = document.getElementById("cardnum");
var cvcnum = document.getElementById("cvc");
var amount = document.getElementById("amount");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var city = document.getElementById("city");
var state = document.getElementById("stateselector");
var postcode = document.getElementById("postalcode");

//VALIDACION TEXTO VACIO

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors = [];
    
    if(empty.test(cardnum.value)){
        errors.push({item: 'cardnum', mensaje: 'Filling required', input: cardnum});
    }

    if(empty.test(cvcnum.value)){
        errors.push({item: 'cvc', mensaje: 'Filling required', input: cvcnum});
    }

    if(empty.test(amount.value)){
        errors.push({item: 'amount', mensaje: 'Filling required', input: amount});
    }

    if(empty.test(fname.value)){
        errors.push({item: 'fname', mensaje: 'Filling required', input: fname});
    }

    if(empty.test(lname.value)){
        errors.push({item: 'lname', mensaje: 'Filling required', input: lname});
    }

    if(empty.test(city.value)){
        errors.push({item: 'city', mensaje: 'Filling required', input: city});
    }

    if(state.value == 0){
        errors.push({item: 'stateselector', mensaje: 'Must pick a state', input: state});
    }

    if(empty.test(postcode.value)){
        errors.push({item: 'postalcode', mensaje: 'Filling required', input: postcode});
    }
    
    if(errors.length != 0){
        errors.forEach(({item, mensaje, input}) => {
            input.classList.add('is-invalid');
        });
        document.querySelector("#alert").classList.remove("d-none");
    }
    else{
        document.querySelector("#alert").classList.add("d-none");
        form.submit();
    }
});

//VALIDACION DE DATOS

cardnum.addEventListener("change", (e) => {
    if(!cardformat.test(cardnum.value)){
        cardnum.classList.add("is-invalid");
        window.alert("Invalid number!");
        cardnum.value = "";
    } else{
        cardnum.classList.remove("is-invalid");
    }
});

cvcnum.addEventListener("change", (e) => {
    if(!cvcformat.test(cvcnum.value)){
        cvcnum.value = "";
        cvcnum.classList.add("is-invalid");
        window.alert("Invalid number!");
    } else{
        cvcnum.classList.remove("is-invalid");
    }
});

amount.addEventListener("change", (e) => {
    if(!amountformat.test(amount.value)){
        amount.value = "";
        amount.classList.add("is-invalid");
        window.alert("Invalid number!");
    } else{
        amount.classList.remove("is-invalid");
    }
});

fname.addEventListener("change", (e) => {
    if(!fnameformat.test(fname.value)){
        fname.value = "";
        fname.classList.add("is-invalid");
        window.alert("Invalid entry! First name accepts letters only.");
    } else{
        fname.classList.remove("is-invalid");
    }
});

lname.addEventListener("change", (e) => {
    if(!lnameformat.test(lname.value)){
        lname.value = "";
        lname.classList.add("is-invalid");
        window.alert("Invalid entry! Last name accepts letters only.");
    } else{
        lname.classList.remove("is-invalid");
    }
});
city.addEventListener("change", (e) => {
    if(!cityformat.test(city.value)){
        city.value = "";
        city.classList.add("is-invalid");
        window.alert("Invalid city!");
    } else{
        city.classList.remove("is-invalid");
    }
});

state.addEventListener("change", (e) => {
    if(state.value != 0){
        state.classList.remove("is-invalid");
    } else{
        state.classList.add("is-invalid");
    }
});
postcode.addEventListener("change", (e) => {
    if(!postcodeformat.test(postcode.value)){
        postcode.value = "";
        postcode.classList.add("is-invalid");
        window.alert("Invalid number!");
    } else{
        postcode.classList.remove("is-invalid");
    }
});

//QUITAR ALERTA AL RESET
reset.addEventListener('click', (e) => {
    document.querySelector("#alert").classList.add("d-none");
});