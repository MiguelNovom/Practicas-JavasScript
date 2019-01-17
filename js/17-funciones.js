'use-strict'

//FUNCIONES 

function porConsola(numero1, numero2){
	console.log("Suma : "+(numero1+numero2));
	console.log("Resta : "+(numero1-numero2));
	console.log("Multiplicacion : "+(numero1*numero2));
	console.log("Division : "+(numero1/numero2));
	console.log("*************************");
}

function calculadora(numero1, numero2, mostrar = false){
	if (mostrar==false){
		porConsola(numero1,numero2);
	}else{
		document.write("Se esta mostrando el parametro")
	}	
}
/*
for (var i = 0; i <= 10; i++) {
	calculadora(i,8);
}
*/
calculadora(1,2)