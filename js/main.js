var login, home, registro, perfil, configP;
var cultural, social, comercial, deportivo, educativo, tecnologico, politico, cientifico;
var secciones = [];


window.onload = () => {
	crearReferencias();
	agregarEventos();
	setTimeout(()=>{irA(login)},0);	
	
}

function crearReferencias(){
	login = document.getElementById("form-login");
	home = document.getElementById("form-main");
	registro = document.getElementById("form-sign-up");
	perfil = document.getElementById("form-perfil");
	configP = document.getElementById("form-config");
	
	
	//Secciones Eventos
	cultural	= document.getElementById("viewCulturales");
	social		= document.getElementById("viewSociales");
	comercial	= document.getElementById("viewComerciales");
	deportivo	= document.getElementById("viewDeportivos");
	educativo	= document.getElementById("viewEducativos");
	tecnologico = document.getElementById("viewTecnologicos");
	politico	= document.getElementById("viewPoliticos");
	cientifico	= document.getElementById("viewCientificos");
	
	secciones = [login,home,registro,perfil,configP,cultural,social,comercial,deportivo,educativo,tecnologico,politico,cientifico];
	//Botones

	btn_ingresar 	= document.getElementById("btn_Ingresar");
	btn_registro 	= document.getElementById("btn_Registro");
	btn_registrarse = document.getElementById("btn_Registrarse");	
	btn_cambiarP	= document.getElementById("btn_CambiarContra");
	btn_atrasR		= document.getElementById("btn_AtrasR");
	btn_atrasH		= document.getElementById("btn_AtrasH");
	btn_atrasP		= document.getElementById("btn_AtrasP");
	btn_atrasC		= document.getElementById("btn_AtrasC");
	btn_config 		= document.getElementById("btn_Config");
	btn_perfil 		= document.getElementById("btn_Perfil");

	btn_cultural	= document.getElementById("btn_Cultural");
	btn_social		= document.getElementById("btn_Social");
	btn_comercial 	= document.getElementById("btn_Comercial");
	btn_deportivo	= document.getElementById("btn_Deportivo");
	btn_educativo	= document.getElementById("btn_Educativo");
	btn_tecnologico	= document.getElementById("btn_Tecnologico");
	btn_politico	= document.getElementById("btn_Politico");
	btn_cientifico	= document.getElementById("btn_Cientifico");

	btn_atrasVEC	= document.getElementById("btn_AtrasVEC");
	btn_atrasVES	= document.getElementById("btn_AtrasVES");
	btn_atrasVECo	= document.getElementById("btn_AtrasVECo");
	btn_atrasVED	= document.getElementById("btn_AtrasVED");
	btn_atrasVEE	= document.getElementById("btn_AtrasVEE");
	btn_atrasVET	= document.getElementById("btn_AtrasVET");
	btn_atrasVEP	= document.getElementById("btn_AtrasVEP");
	btn_atrasVECi	= document.getElementById("btn_AtrasVECi");




}

function agregarEventos(){
	btn_ingresar.addEventListener("click", () => {
        irA(home);});

	btn_registro.addEventListener("click", () => {
        irA(registro);});

	btn_registrarse.addEventListener("click", () => {
        irA(home);});

	btn_cambiarP.addEventListener("click", () => {
        irA(perfil);});

	btn_atrasR.addEventListener("click", () => {
        irA(login);});

	btn_atrasH.addEventListener("click", () => {
        irA(login);});

	btn_atrasP.addEventListener("click", () => {
        irA(home);});

	btn_atrasC.addEventListener("click", () => {
        irA(perfil);});

	btn_config.addEventListener("click", () => {
        irA(configP);});

	btn_perfil.addEventListener("click", () => {
        irA(perfil);});

	//--\\

	btn_cultural.addEventListener("click", () => {
        irA(cultural);});
	
	btn_social.addEventListener("click", () => {
        irA(social);});

	btn_comercial.addEventListener("click", () => {
        irA(comercial);});

	btn_deportivo.addEventListener("click", () => {
        irA(deportivo);});

	btn_educativo.addEventListener("click", () => {
        irA(educativo);});

	btn_tecnologico.addEventListener("click", () => {
        irA(tecnologico);});

	btn_politico.addEventListener("click", () => {
        irA(politico);});

	btn_cientifico.addEventListener("click", () => {
        irA(cientifico);});

	btn_atrasVEC.addEventListener("click", () => {
        irA(home);});

	btn_atrasVES.addEventListener("click", () => {
        irA(home);});

	btn_atrasVECo.addEventListener("click", () => {
        irA(home);});

	btn_atrasVED.addEventListener("click", () => {
        irA(home);});

	btn_atrasVEE.addEventListener("click", () => {
        irA(home);});

	btn_atrasVET.addEventListener("click", () => {
        irA(home);});

	btn_atrasVEP.addEventListener("click", () => {
        irA(home);});

	btn_atrasVECi.addEventListener("click", () => {
        irA(home);});


}

function ocultarSecciones(){
	for(i in secciones){
		secciones[i].style.display = 'none';
	}
}

function irA(seccion){
	ocultarSecciones();
	seccion.style.display = 'block';
}






