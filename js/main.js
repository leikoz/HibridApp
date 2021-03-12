var login, home, registro, perfil, configP;
var secciones = [];

window.onload = () => {
	crearReferencias();
}

function crearReferencias(){
	login = document.getElementById("form-login");
	home = document.getElementById("form-main");
	registro = document.getElementById("form-sign-up");
	perfil = document.getElementById("form-perfil");
	configP = document.getElementById("form-config");
}


function Validar(){
	var usuario = document.getElementById("usuario").value;
	var contraseña = document.getElementById("contraseña").value;

	if(usuario=="sam" && contraseña == "123"){
		Flog();
	}
	else{
		alert("Verifique sus datos");
	}
}


function InicioApp(){
	document.getElementById("form-sign-up").classList.add("ocultar");

}