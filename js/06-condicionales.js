'use-strict'

//condicionales

var edad = 18;
var nombre = "David";

if (edad < 18){
	console.log(nombre + " tiene " + edad + " años, es menor de edad")
	if (edad <= 33){
		console.log("Todavia eres milenial");
	}else if (edad >= 70){
		console.log("Eres anciano");
	}else{
		console.log("No eres milenial");
	}
}else{
	console.log(nombre + " tiene " + edad + " años, es mayor de edad");
}

//switch case

switch(edad){
	case 18:
		console.log("tienes 18");
	break;
	default:
		console.log("no tienes 18");
	break;
}
