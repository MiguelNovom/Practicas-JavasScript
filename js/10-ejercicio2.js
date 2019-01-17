'use-strict'

/* 
Utilizando un bucle mostrar la media y la suma de los numeros introducidos por el usuario 
hasta que mentamos un numero negativo que se mostrara el resultado
*/

var suma = 0;
var cont = 1;
var media = 0;

do{
	var numero = parseInt(prompt("Escribe un numero"));
	if (isNaN(numero)){
		numero = 0
	}else{
		suma += numero;
		media = suma/cont;
		cont++;
	}
}while(numero >= 0)
	alert("La media es "+ media + " y la suma es "+suma)
