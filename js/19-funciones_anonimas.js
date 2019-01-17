'use-strict'

//funciones anonimas, funciones de callback y funciones de flecha

function sumame(numero1, numero2, suma_y_muestra, sumax2){
	var sumar = numero1 + numero2;

	suma_y_muestra(sumar);//funcion de callback
	sumax2(sumar);

	return sumar;
}

sumame(4,5, dato =>{ //funcion de flecha, forma de definir funcion de callback mas limpia
	console.log("La suma es: "+dato);
},
function(dato){ //funcion anonima
	console.log("La suma por dos es: "+(dato*2));
});