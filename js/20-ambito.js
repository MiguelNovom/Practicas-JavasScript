'use-strict'

//Ambito de las funciones

var texto= "Hola soy una variable global";
var numero = 3;

function hola_mundo(texto){
	var hola_mundo = "texto dentro de la funcion";
	
	console.log(texto);
	console.log(numero);
	console.log(hola_mundo);
}

hola_mundo(texto)