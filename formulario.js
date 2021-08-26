
function dato(){
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("Su nombre es: "+nombre+"Su apellido es: "+apellido+"Su telefono es: "+telefono+"Su correo es: "+email+"Su clave es: "+password);

}
const nombre = document.getElementById("name")
const apellido = document.getElementById("apellido")
const telefono = document.getElementById("telefono")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const mensaje = document.getElementById("warnings")

console.log(nombre+" "+apellido);

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    mensaje.innerHTML = ""
    if (nombre.value.length < 6) {
        warnings += ' Ingresa Nombre <br> '
        entrar = true
    }
    if (apellido.value.length < 6  ) {
        warnings += ' Ingresa Apellido <br> '
        entrar = true
    }
    if (telefono.value.length < 8) {
        warnings += ' Ingresa Telefono <br> '
        entrar = true
    }
    if (!regexEmail.test(email.value)) {
        warnings += ' Ingresa Correo <br> '
        entrar = true

    }
    if (password.value.length < 8) {
        warnings += ' Ingresa Contraseña <br> '
        entrar = true
    }
    if (entrar) {
        mensaje.innerHTML = warnings
    }else{
        mensaje.innerHTML = "Registrado"
    }


})

function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
}
function soloNumeros(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      Numeros = " 0123456789",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (Numeros.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
}

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    mensaje.innerHTML = ""
    if (nombre.value.length < 6) {
        warnings += ' Ingresa Nombre <br> '
        entrar = true
    }
    if (apellido.value.length < 6  ) {
        warnings += ' Ingresa Apellido <br> '
        entrar = true
    }
    if (telefono.value.length < 8) {
        warnings += ' Ingresa Telefono <br> '
        entrar = true
    }
    if (!regexEmail.test(email.value)) {
        warnings += ' Ingresa Correo <br> '
        entrar = true

    }
    if (password.value.length < 8) {
        warnings += ' Ingresa Contraseña <br> '
        entrar = true
    }
    if (entrar) {
        mensaje.innerHTML = warnings
    }else{
        mensaje.innerHTML = "Registrado"
    }


})

