document.getElementById("btn iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn registrarse").addEventListener("click", registre);
window.addEventListener("resize", anchoPagina);

// declarando variables 
var contenedor_login_registre = document.querySelector(".contenedor__login-registre")
var formulario_login = document.querySelector(".formulario__login");
var formulario_registro = document.querySelector(".formulario__registro");
var caja_trasera_login = document.querySelector(".caja_trasera_login");
var caja_trasera_registro = document.querySelector(".caja_trasera_registro");


function anchoPagina() {
    if(window.innerWidth > 850) {
        caja_trasera_login.style.display = "block";
        caja_trasera_registro.style.display = "block";
    }else {
        caja_trasera_registro.style.display = "block";
        caja_trasera_registro.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_registro.style.display = "none";
        contenedor_login_registre.style.left = "0px";

    }
}

anchoPagina();

function registre() {
    if(window.innerWidth > 850) {
        formulario_registro.style.display = "block";
        contenedor_login_registre.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_registro.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_registro.style.display = "block";
        contenedor_login_registre.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_registro.style.display = "none";
        caja_trasera_login.style.opacity = "1";
        caja_trasera_login.style.display = "block";
    }
}

function iniciarSesion() {
    if(window.innerWidth > 850) {
        formulario_registro.style.display = "none";
        contenedor_login_registre.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_registro.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else {
        formulario_registro.style.display = "none";
        contenedor_login_registre.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_registro.style.display = "block";
        caja_trasera_login.style.display = "none";
    } 

}





