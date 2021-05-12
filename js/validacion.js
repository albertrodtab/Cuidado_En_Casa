window.onload=iniciar;

//Guiándome por un video de internet en conseguido realizar esta forma de validar un formulario
//y de configurar el mensaje que quiero lanzar al usuario de la web para que me rellene bien los campos
function iniciar (){
    document.getElementById("enviar").addEventListener('click', validar, false);
}

//funciones para validar los distintos campos que tiene nuestro formulario.
function validaNombre(){
    var elemento = document.getElementById("nombre")
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento,"Debe introducir un Nombre")
        }
        if(elemento.validity.patternMismatch){
            error2(elemento,"El nombre debe tener entre 2 y 30 caracteres.")
        }
        return false;
    }
    return true;
}

function validaApellidos(){
    var elemento = document.getElementById("apellidos")
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento,"Debe introducir un Apellido")
        }
        if(elemento.validity.patternMismatch){
            error2(elemento,"El apellido debe tener entre 2 y 60 caracteres.")
        }
        return false;
    }
    return true;
}

function validaTelefono(){
    var elemento = document.getElementById("telefono")
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento,"Debe introducir un Teléfono")
        }
        if(elemento.validity.patternMismatch){
            error2(elemento,"El télenono debe comenzar por 6., 7, 8 o 9 y debe tener un máximo de 9 dígitos.")
        }
        return false;
    }
    return true;
}

function validaEmail(){
    var elemento = document.getElementById("email")
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento,"Debe introducir un email")
        }
        if(elemento.validity.patternMismatch){
            error2(elemento,"El email debe tener un formato similar a este email@dominio.com")
        }
        return false;
    }
    return true;
}

function validaAsunto(){
    var elemento = document.getElementById("asunto")
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento,"Debe introducir un Asunto")
        }
        if(elemento.validity.patternMismatch){
            error2(elemento,"El Asunto debe tener entre 2 y 60 caracteres")
        }
        return false;
    }
    return true;
}

function validaMensaje(){
    var elemento = document.getElementById("mensaje")
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento,"Debe introducir un Mensaje")
        }
        return false;
    }
    return true;
}

//le pasamos un evento como parametro para que si no se cumplen las condiciones no envíe el formulario, ejecute el preventDefault
//con el confirm lanzamos un Alert para que el usuario confirme que quiere enviar el formulario.
function validar(e){
    borrarError();
    if (validaNombre() && validaApellidos() && validaTelefono() && validaEmail() && validaAsunto() && validaMensaje() && confirm("Pulsa aceptar si deseas enviar el formulario")){
        return true;
    }else {
        e.preventDefault();
        return false;
    }
}
//recibe como parametro el elemento y el mensaje y escribe el mensaje de error que le hemos configurado.
function error2(elemento, mensaje){
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}
//quita todas la clases error de todas las funciones para que borre todos los errores cuando pulsamos enviar y vuelva a buscar errores.
function borrarError(){
    var formulario = document.forms[0];
    for(var i=0; i<formulario.elements.length;i++){
        formulario.elements[i].className = "";
    }
}