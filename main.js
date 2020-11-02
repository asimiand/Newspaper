//VARIABLES

var aform = document.getElementsByClassName('form');
var formLeft = document.getElementsByClassName('form-left');
var formRight = document.getElementsByClassName('form-right');

var fullName = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');
var age = document.getElementById('age');
var phone = document.getElementById('phone');
var adress = document.getElementById('adress');
var city = document.getElementById('city');
var postalCode = document.getElementById('postalCode');
var dni = document.getElementById('dni');


//ONBLUR - NAME VALIDATION

fullName.addEventListener('blur', nameValidation);

function nameValidation (e){
    
    var textOfName = e.target.value;

    if (textOfName.length<6 || textOfName.indexOf(' ')<0 ){
        //console.log('lenght: '+textOfName.length),
        //console.log('index del espacio:' + textOfName.indexOf(' '));
        var errorText = document.getElementById('nameError');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{

        var errorText = document.getElementById('nameError');
        errorText.innerHTML = '<p>✔</p>';
    }
}

//ONBLUR - EMAIL VALIDATION

email.addEventListener('blur', emailValidation);

function emailValidation (e){
    
    var textOfEmail = e.target.value;

    if (textOfEmail.indexOf(' ')>0 || textOfEmail.indexOf('@')<0 || textOfEmail.indexOf('.')<0 || textOfEmail.indexOf('.') == (textOfEmail.length-1) ){
        //console.log('index del arroba:' + textOfEmail.indexOf('@')),
        //console.log('index del espacio:' + textOfEmail.indexOf(' ')),
        //console.log('index del punto:' + textOfEmail.indexOf('.')),
        //console.log('error');
        var errorText = document.getElementById('emailError');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{
        var errorText = document.getElementById('emailError');
        errorText.innerHTML = '<p>✔</p>';
    }
}

//ONBLUR - PASSWORD VALIDATION

password.addEventListener('blur', passwordValidation);

var textOfPassword = '';

function passwordValidation (e){
    
    textOfPassword = e.target.value;

    console.log(textOfPassword);

    var letras="abcdefghyjklmnñopqrstuvwxyz";

    function tiene_letras(textOfPassword){
        textOfPassword = textOfPassword.toLowerCase();
        for(i=0; i<textOfPassword.length; i++){
            if (letras.indexOf(textOfPassword.charAt(i),0)!=-1){
                return 1;
            }
        }
        return 0;
    }
    
    var numeros="1234567890";

    function tiene_numeros(textOfPassword){
        textOfPassword = textOfPassword.toLowerCase();
        for(i=0; i<textOfPassword.length; i++){
            if (numeros.indexOf(textOfPassword.charAt(i),0)!=-1){
                return 1;
            }
        }
        return 0;
    }
    if (textOfPassword.length<8 || textOfPassword.indexOf(' ')>0 || tiene_letras(textOfPassword)==0 || tiene_numeros(textOfPassword)==0 ){
        //console.log('texto que se forma' + textOfPassword),
        //console.log('index del espacio:' + textOfPassword.indexOf(' ')),
        //console.log('index del punto:' + textOfPassword.indexOf('.')),
        //console.log(tiene_numeros(textOfPassword));
        var errorText = document.getElementById('passwordError');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{
        var errorText = document.getElementById('passwordError');
        errorText.innerHTML = '<p>✔</p>';
    }
}

//ONBLUR - REPEATE PASSWORD VALIDATION

password2.addEventListener('blur', password2Validation);

var textOfPassword2 = '';

function password2Validation (e){
    
    textOfPassword2 = e.target.value;
    
    if (textOfPassword2 != textOfPassword ){
        //console.log('index del arroba:' + textOfEmail.indexOf('@')),
        //console.log('index del espacio:' + textOfEmail.indexOf(' ')),
        //console.log('index del punto:' + textOfEmail.indexOf('.')),
        //console.log('error');
        var errorText = document.getElementById('password2Error');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{
        var errorText = document.getElementById('password2Error');
        errorText.innerHTML = '<p>✔</p>';
    }
}

//ONBLUR - AGE VALIDATION

age.addEventListener('blur', ageValidation);

function ageValidation (e){
    
    var textOfAge = e.target.value;

    if (textOfAge<18 ){
        console.log(textOfAge);
        var errorText = document.getElementById('ageError');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{

        var errorText = document.getElementById('ageError');
        errorText.innerHTML = '<p>✔</p>';
    }
}

//ONBLUR - PHONE VALIDATION

phone.addEventListener('blur', phoneValidation);

function phoneValidation (e){
    
    var textOfPhone = e.target.value;

    if (textOfPhone.length<7 || textOfPassword.indexOf(' ')>=0  || textOfPassword.indexOf('-')>=0|| textOfPassword.indexOf(')')>=0 || textOfPassword.indexOf('(')>=0){
        console.log(textOfPhone);
        var errorText = document.getElementById('phoneError');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{

        var errorText = document.getElementById('phoneError');
        errorText.innerHTML = '<p>✔</p>';
    }
}

//ONBLUR - ADRESS VALIDATION

adress.addEventListener('blur', adressValidation);

var textOfAdress = '';

function adressValidation (e){
    
    textOfAdress = e.target.value;

    var letras="abcdefghyjklmnñopqrstuvwxyz";

    function tiene_letras(textOfAdress){
        textOfAdress = textOfAdress.toLowerCase();
        for(i=0; i<textOfAdress.length; i++){
            if (letras.indexOf(textOfAdress.charAt(i),0)!=-1){
                return 1;
            }
        }
        return 0;
    }
    
    var numeros="1234567890";

    function tiene_numeros(textOfAdress){
        textOfAdress = textOfAdress.toLowerCase();
        for(i=0; i<textOfAdress.length; i++){
            if (numeros.indexOf(textOfAdress.charAt(i),0)!=-1){
                return 1;
            }
        }
        return 0;
    }
    if (textOfAdress.length<5 || textOfAdress.indexOf(' ')<0 || tiene_letras(textOfAdress)==0 || tiene_numeros(textOfAdress)==0 ){
        console.log('texto que se forma' + textOfAdress),
        console.log('index del espacio:' + textOfAdress.indexOf(' ')),
        console.log('Tiene letras '+tiene_letras(textOfAdress));
        console.log('Tiene numeros '+tiene_numeros(textOfAdress));
        var errorText = document.getElementById('adressError');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{
        var errorText = document.getElementById('adressError');
        errorText.innerHTML = '<p>✔</p>';
    }
}

//ONBLUR - CITY VALIDATION

city.addEventListener('blur', cityValidation);

function cityValidation (e){
    
    var textOfCity = e.target.value;

    if (textOfCity.length<3 ){
        //console.log('lenght: '+textOfName.length),
        //console.log('index del espacio:' + textOfName.indexOf(' '));
        var errorText = document.getElementById('cityError');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{

        var errorText = document.getElementById('cityError');
        errorText.innerHTML = '<p>✔</p>';
    }
}

//ONBLUR - POSTALCODE VALIDATION

postalCode.addEventListener('blur', postalCodeValidation);

function postalCodeValidation (e){
    
    var textOfPostalCode = e.target.value;

    if (textOfPostalCode.length<3 ){
        //console.log('lenght: '+textOfPostalCode.length),
        //console.log('index del espacio:' + textOfPostalCode.indexOf(' '));
        var errorText = document.getElementById('postalCodeError');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{

        var errorText = document.getElementById('postalCodeError');
        errorText.innerHTML = '<p>✔</p>';
    }
}

//ONBLUR - DNI VALIDATION

dni.addEventListener('blur', dniValidation);

function dniValidation (e){
    
    var textOfDni = e.target.value;

    if (textOfDni.length==8 || textOfDni.length==7 ){
        //console.log('lenght: '+textOfDni.length),
        //console.log('index del espacio:' + textOfDni.indexOf(' '));
        var errorText = document.getElementById('dniError');
        errorText.innerHTML = '<p> ✔ </p>';

    }
    else{

        var errorText = document.getElementById('dniError');
        errorText.innerHTML = '<p>*Error</p>';
    }
}


/*----------------------------------*/

//FOCUS - NAME VALIDATION

fullName.addEventListener('focus', nameValidation);

function nameValidation (e){
    
    var textOfName = e.target.value;
    console.log('lenght: '+textOfName.length);
/*
    if (textOfName.length<6 || textOfName.indexOf(' ')<0 ){
        console.log('lenght: '+textOfName.length),
        console.log('index del espacio:' + textOfName.indexOf(' '));
        var errorText = document.getElementById('nameError');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{

        var errorText = document.getElementById('nameError');
        errorText.innerHTML = '<p>✔</p>';
    }
*/
}
