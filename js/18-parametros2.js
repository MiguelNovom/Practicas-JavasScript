'use-strict'

//Parametros rest y spreed

function listado_frutas(fruta1, fruta2, ...resto_de_frutas){
	console.log("fruta 1 : "+fruta1);
	console.log("fruta 2 : "+fruta2);
	console.log(resto_de_frutas);
}

listado_frutas("naranja","manzana", "sandia", "pera", "platano");

var frutas = ["naranja","manzana"]
listado_frutas(...frutas, "sandia", "pera", "platano");