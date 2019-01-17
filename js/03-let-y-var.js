'use strict'

//LET Y VAR

//prueba con var
var numero = 40
console.log(numero);
if (true){
	var numero = 50;
	console.log(numero); //valor 50
}

console.log(numero);

//Prueba con let
var texto = "Curso Js "
console.log(texto);

if (true){
	let texto = "Curso Laravel 5"
	console.log(texto); //valor 50
}

console.log(texto);