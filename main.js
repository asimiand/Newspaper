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

var submitButton = document.getElementById('submitButton');


//ONBLUR - NAME VALIDATION

fullName.addEventListener('blur', nameValidation);

var textOfName = '';

function nameValidation (e){
    
    textOfName = e.target.value;

    if (textOfName.length<6 || textOfName.indexOf(' ')<0 ){
        var errorText = document.getElementById('nameError');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{

        var errorText = document.getElementById('nameError');
        errorText.innerHTML = '<p>✔</p>';
    }

    return textOfName;
}

//FOCUS - NAME VALIDATION

fullName.addEventListener('focus', nameFValidation);

function nameFValidation (e){
    
    var textOfNameF = e.target.value;

    if (textOfNameF.length<6 || textOfNameF.indexOf(' ')<0 ){
        var errorText = document.getElementById('nameError');
        errorText.innerHTML = '<p>  </p>';
    }
    else{

        var errorText = document.getElementById('nameError');
        errorText.innerHTML = '<p> </p>';
    }

}

//ONBLUR - EMAIL VALIDATION

email.addEventListener('blur', emailValidation);

var textOfEmail = '';

function emailValidation (e){
    
    textOfEmail = e.target.value;

    if (textOfEmail.indexOf(' ')>0 || textOfEmail.indexOf('@')<0 || textOfEmail.indexOf('.')<0 || textOfEmail.indexOf('.') == (textOfEmail.length-1) ){
        var errorText = document.getElementById('emailError');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{
        var errorText = document.getElementById('emailError');
        errorText.innerHTML = '<p>✔</p>';
    }
}

//FOCUS - EMAIL VALIDATION

email.addEventListener('focus', emailValidationF);

function emailValidationF (e){
    
    var textOfEmail = e.target.value;

    if (textOfEmail.indexOf(' ')>0 || textOfEmail.indexOf('@')<0 || textOfEmail.indexOf('.')<0 || textOfEmail.indexOf('.') == (textOfEmail.length-1) ){
        var errorText = document.getElementById('emailError');
        errorText.innerHTML = '<p> </p>';

    }
    else{
        var errorText = document.getElementById('emailError');
        errorText.innerHTML = '<p> </p>';
    }

}

//ONBLUR - PASSWORD VALIDATION

password.addEventListener('blur', passwordValidation);

var textOfPassword = '';

function passwordValidation (e){
    
    textOfPassword = e.target.value;

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
        var errorText = document.getElementById('passwordError');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{
        var errorText = document.getElementById('passwordError');
        errorText.innerHTML = '<p>✔</p>';
    }
}

//FOCUS - PASSWORD VALIDATION

password.addEventListener('focus', passwordValidationF);

var textOfPassword = '';

function passwordValidationF (e){
    
    textOfPassword = e.target.value;

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
        var errorText = document.getElementById('passwordError');
        errorText.innerHTML = '<p>  </p>';

    }
    else{
        var errorText = document.getElementById('passwordError');
        errorText.innerHTML = '<p> </p>';
    }

}
//ONBLUR - REPEATE PASSWORD VALIDATION

password2.addEventListener('blur', password2Validation);

var textOfPassword2 = '';

function password2Validation (e){
    
    textOfPassword2 = e.target.value;
    
    if (textOfPassword2 != textOfPassword ){
        var errorText = document.getElementById('password2Error');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{
        var errorText = document.getElementById('password2Error');
        errorText.innerHTML = '<p>✔</p>';
    }
}

//FOCUS - REPEATE PASSWORD VALIDATION

password2.addEventListener('focus', password2ValidationF);

var textOfPassword2 = '';

function password2ValidationF (e){
    
    textOfPassword2 = e.target.value;
    
    if (textOfPassword2 != textOfPassword ){
        var errorText = document.getElementById('password2Error');
        errorText.innerHTML = '<p>  </p>';

    }
    else{
        var errorText = document.getElementById('password2Error');
        errorText.innerHTML = '<p> </p>';
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

//FOCUS - AGE VALIDATION

age.addEventListener('focus', ageValidationF);

function ageValidationF (e){
    
    var textOfAge = e.target.value;

    if (textOfAge<18 ){
        console.log(textOfAge);
        var errorText = document.getElementById('ageError');
        errorText.innerHTML = '<p> </p>';

    }
    else{

        var errorText = document.getElementById('ageError');
        errorText.innerHTML = '<p> </p>';
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

//FOCUS - PHONE VALIDATION

phone.addEventListener('focus', phoneValidationF);

function phoneValidationF (e){
    
    var textOfPhone = e.target.value;

    if (textOfPhone.length<7 || textOfPassword.indexOf(' ')>=0  || textOfPassword.indexOf('-')>=0|| textOfPassword.indexOf(')')>=0 || textOfPassword.indexOf('(')>=0){
        console.log(textOfPhone);
        var errorText = document.getElementById('phoneError');
        errorText.innerHTML = '<p> </p>';

    }
    else{

        var errorText = document.getElementById('phoneError');
        errorText.innerHTML = '<p> </p>';
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
        var errorText = document.getElementById('adressError');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{
        var errorText = document.getElementById('adressError');
        errorText.innerHTML = '<p>✔</p>';
    }
}

//FOCUS - ADRESS VALIDATION

adress.addEventListener('focus', adressValidationF);

var textOfAdress = '';

function adressValidationF (e){
    
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
        var errorText = document.getElementById('adressError');
        errorText.innerHTML = '<p> </p>';

    }
    else{
        var errorText = document.getElementById('adressError');
        errorText.innerHTML = '<p> </p>';
    }
}
//ONBLUR - CITY VALIDATION

city.addEventListener('blur', cityValidation);

function cityValidation (e){
    
    var textOfCity = e.target.value;

    if (textOfCity.length<3 ){
        var errorText = document.getElementById('cityError');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{

        var errorText = document.getElementById('cityError');
        errorText.innerHTML = '<p>✔</p>';
    }
}

//FOCUS - CITY VALIDATION

city.addEventListener('focus', cityValidationF);

function cityValidationF (e){
    
    var textOfCity = e.target.value;

    if (textOfCity.length<3 ){
        var errorText = document.getElementById('cityError');
        errorText.innerHTML = '<p> </p>';

    }
    else{

        var errorText = document.getElementById('cityError');
        errorText.innerHTML = '<p> </p>';
    }
}
//ONBLUR - POSTALCODE VALIDATION

postalCode.addEventListener('blur', postalCodeValidation);

function postalCodeValidation (e){
    
    var textOfPostalCode = e.target.value;

    if (textOfPostalCode.length<3 ){
        var errorText = document.getElementById('postalCodeError');
        errorText.innerHTML = '<p> *Error </p>';

    }
    else{

        var errorText = document.getElementById('postalCodeError');
        errorText.innerHTML = '<p>✔</p>';
    }
}
//FOCUS - POSTALCODE VALIDATION

postalCode.addEventListener('focus', postalCodeValidationF);

function postalCodeValidationF (e){
    
    var textOfPostalCode = e.target.value;

    if (textOfPostalCode.length<3 ){
        var errorText = document.getElementById('postalCodeError');
        errorText.innerHTML = '<p> </p>';

    }
    else{

        var errorText = document.getElementById('postalCodeError');
        errorText.innerHTML = '<p> </p>';
    }
}

//ONBLUR - DNI VALIDATION

dni.addEventListener('blur', dniValidation);

function dniValidation (e){
    
    var textOfDni = e.target.value;

    if (textOfDni.length==8 || textOfDni.length==7 ){
        var errorText = document.getElementById('dniError');
        errorText.innerHTML = '<p>✔</p>';

    }
    else{

        var errorText = document.getElementById('dniError');
        errorText.innerHTML = '<p>*Error</p>';
    }
}

//FOCUS - DNI VALIDATION

dni.addEventListener('focus', dniValidationF);

function dniValidationF (e){
    
    var textOfDni = e.target.value;

    if (textOfDni.length==8 || textOfDni.length==7 ){
        var errorText = document.getElementById('dniError');
        errorText.innerHTML = '<p> </p>';

    }
    else{

        var errorText = document.getElementById('dniError');
        errorText.innerHTML = '<p> </p>';
    }
}


//FORM SUBMIT EVENT

submitButton.addEventListener('click', showInfo);

function showInfo (e){
    e.preventDefault();

    //get input value
    var fullName2 = document.getElementById('name').value;
    var email2 = document.getElementById('email').value;
    var age2 = document.getElementById('age').value;
    var phone2 = document.getElementById('phone').value;
    var adress2 = document.getElementById('adress').value;
    var city2 = document.getElementById('city').value;
    var postalCode2 = document.getElementById('postalCode').value;
    var dni2 = document.getElementById('dni').value;
    

    var info = 'Full Name: ' + fullName2 + '\n' +
                'Email: ' + email2 + '\n' +
                'Password: OK' + '\n' +
                'Age: ' + age2 + '\n' +
                'Phone Number: ' + phone2 + '\n' +
                'Adress: ' + adress2 + '\n' +
                'City: '+ city2 + '\n' +
                'Postal Code: ' + postalCode2 + '\n' +
                'DNI: ' + dni2 + '\n' 

    var info2 = 'CORRECT PERSONAL DATA';

    //get errors
    var errorText1 = document.getElementById('nameError');
    var errorText2 = document.getElementById('emailError');
    var errorText3 = document.getElementById('ageError');
    var errorText4 = document.getElementById('phoneError');
    var errorText5 = document.getElementById('adressError');
    var errorText6 = document.getElementById('cityError');
    var errorText7 = document.getElementById('postalCodeError');
    var errorText8 = document.getElementById('dniError');
    var errorText9 = document.getElementById('passwordError');
    var errorText10 = document.getElementById('password2Error');

    //Show message if all the errors show the tic
    if( errorText1.innerHTML == '<p>✔</p>' &&
        errorText2.innerHTML == '<p>✔</p>' &&
        errorText3.innerHTML == '<p>✔</p>' &&
        errorText4.innerHTML == '<p>✔</p>' &&
        errorText5.innerHTML == '<p>✔</p>' &&
        errorText6.innerHTML == '<p>✔</p>' &&
        errorText7.innerHTML == '<p>✔</p>' &&
        errorText8.innerHTML == '<p>✔</p>' &&
        errorText9.innerHTML == '<p>✔</p>' &&
        errorText10.innerHTML == '<p>✔</p>'
        )
     
    {
        alert(info);
    }

    else{
        alert(info2);
    }
    
}






