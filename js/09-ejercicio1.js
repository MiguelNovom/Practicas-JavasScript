'use-strict'

/* 
Programa que nos pida dos numero y que nos diga cual es mayor cual es menor y si son iguales
PLUS: Si los numeros no son numero o son menores a 0
*/

var numero1 = parseInt(prompt("Escribe un numero"));
var numero2 = parseInt(prompt("Escribe otro numero"));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(prompt("Escribe un numero"));
	numero2 = parseInt(prompt("Escribe otro numero"));
}

if (numero1 > numero2){
	alert("El numero 1 es mayor")
}else if (numero1 < numero2){
	alert("El numero 2 es mayor")
}else {
	alert("El numero 1 y 2 son iguales")
}