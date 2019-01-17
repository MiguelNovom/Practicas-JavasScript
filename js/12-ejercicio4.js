'use-strict'

/*
Mostrar todos los numero impares introducidos entre dos numeros introducidos por el usuario
*/


var numero1 = parseInt(prompt("Escribe un numero"));
var numero2 = parseInt(prompt("Escribe otro numero"));

if(numero1 < numero2){
	for (var i = numero1+1; i < numero2; i++) {
		if (i%2!=0){
			document.write(i+"</br>")
		}
	}
}else if (numero2 < numero1){
	for (var i = numero2+1; i < numero1; i++) {
		if (i%2!=0){
			document.write(i+"</br>")
		}
	}
}else{
	console.log("Los numero son iguales")
}
