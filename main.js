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

function passwordValidation (e){
    
    var textOfPassword = e.target.value;

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

function password2Validation (e){
    
    var textOfPassword2 = e.target.value;
    
    if (textOfPassword2.indexOf(' ')!=0 ){
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





