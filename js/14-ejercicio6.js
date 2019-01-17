'use-strict'

/*
Programa que nos diga si un numero es par o impar
*/

var numero1 = parseInt(prompt("Escribe un numero"));

while(numero1 <= 0 || isNaN(numero1)){
	numero1 = parseInt(prompt("Escribe un numero"));
}

if (numero1%2==0){
	alert("Es par")
}else{
	alert("Es impar")
}