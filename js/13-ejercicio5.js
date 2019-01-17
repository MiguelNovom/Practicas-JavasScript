'use-strict'

/*
Mostrar todos los divisores introducido por pantalla
*/


var numero = parseInt(prompt("Escribe un numero"));
cont = 1;
for (var i = 0; i < numero; i++) {
	if (numero%i==0){
		document.write(i+"</br>")
	}
}