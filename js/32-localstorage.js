'use strict'

//LocalStorage

window.addEventListener("load", ()=>{

	//Comprobar si el storage esta disponible

	if(typeof(Storage) !== ''){
		console.log("Storage disponible");
	}else{
		console.log("Storage no disponible")
	}

	//Guardar datos en el localStorage
	localStorage.setItem("titulo", "Curso de Symphony");

	//Recuperar elemento 
	document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo"); //lo metemos en un div

	//Guardar Objeto
	var usuario = { //Creamos objeto JSON
		nombre:"Miguel Novo",
		email:"miguel.novom@gmail.com",
		web: "miguelnovo.com",
	};

	localStorage.setItem("usuario", JSON.stringify(usuario));//Mandamos el objeto como JSON String

	//Recuperar Objeto

	var userJS = JSON.parse(localStorage.getItem("usuario")); //Recuperamos el objeto y JSON y lo volvemos a transformar
	console.log(userJS);

	document.querySelector("#datos").append(userJS.web + " - " + userJS.nombre);

	//Borrar un elemento del localStorage
	localStorage.removeItem("usuario");
	//todos
	localStorage.clear();


});