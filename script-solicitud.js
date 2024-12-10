function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var dni = document.getElementById('dni').value;
    var correo = document.getElementById('correo').value;
    var comentario = document.getElementById('comentario').value;
    var calificacion = document.getElementById('calificacion').value;
    const cc = document.getElementById('captcha').value;

    // variables de confirmación
    var ConfirmacionNombre = false;
    var ConfirmacionDNI = false;
    var ConfirmacionCorreo = false;
    var ConfirmacionComentario = false;
    var ConfirmacionCalificacion = false;
    var ConfirmacionCC = false;

    if (nombre === '') {
        alert('Por favor, ingrese su nombre.');
        return false;
    } else {
        ConfirmacionNombre = true;
    }

    if (dni === '') {
        alert('Por favor, ingrese su DNI.');
        return false;
    } else if (dni.length !== 9 || isNaN(dni.slice(0, 8)) || !(/[a-zA-Z]/.test(dni.charAt(8)))) {
        alert('DNI no válido. Debe contener 8 números seguidos de 1 letra.');
        return false;
    } else {
        ConfirmacionDNI = true;
    }

    if (correo === '') {
        alert('Por favor, ingrese su correo electrónico.');
        return false;
    } else {
        ConfirmacionCorreo = true;
    }

    if (comentario === '') {
        alert("No escribiste nada en el cuadro de sugerencias... ¿No quieres decir nada?");
        return false;
    } else {
        ConfirmacionComentario = true;
    }

    if (calificacion < 0 || calificacion > 5) {
        alert('Por favor, ingresa una calificación válida (0-5).');
        return false;
    } else {
        ConfirmacionCalificacion = true;
    }

    if (cc.toLowerCase() !== 'cuarenta'){
        alert('Acaso eres un robot? Captcha incorrecto');
        return false;
    } else {
        ConfirmacionCC = true;
    }

    if (ConfirmacionNombre && ConfirmacionDNI && ConfirmacionCorreo &&
        ConfirmacionComentario && ConfirmacionCalificacion && ConfirmacionCC) {
        alert("Formulario enviado correctamente :)");
       //window.location.href = "/ev3/proyecto/index.html";
        return true;
    } else {
        return false;
    }
}
