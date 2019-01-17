'use-strict'
/*
 Tabla de multiplicar de un numero introducido
*/

var numero = parseInt(prompt("Escribe un numero"));

while(numero <= 0 || isNaN(numero)){
	numero = parseInt(prompt("Escribe un numero"));
}

for (var i = 1; i <=10 ; i++) {
	document.write(i+"x"+numero +"="+i*numero+"</br>")
}