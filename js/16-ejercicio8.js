'use-strict'

/*
Calculadora:
-Pida dos numeros
-En el cuerpo de la pagina nos muestre suma resta division y multiplicacion
*/

var numero1 = parseInt(prompt("Escribe un numero"));
var numero2 = parseInt(prompt("Escribe otro numero"));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(prompt("Escribe un numero"));
	numero2 = parseInt(prompt("Escribe otro numero"));
}

document.write("suma :"+ (numero1+numero2) +"<br/>");
document.write("resta :"+ (numero1-numero2) +"<br/>");
document.write("division :"+ (numero1*numero2) +"<br/>");
document.write("multiplicacion :"+ (numero1/numero2) +"<br/>");