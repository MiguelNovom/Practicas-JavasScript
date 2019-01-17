'use-strict'

//Transformacion de texto, busqueda en texto y funciones de remplazo

var numero = 444;
var texto1 = "  Bienvenido al curso  ";
var texto2 = "Es buen curso";

var dato = numero.toString();
console.log(typeof dato);

//Calcular Mayusculas y minusculas
var dato1 = texto1.toUpperCase();
	dato1 = texto2.toLowerCase();
console.log(dato1);

//Calcular Longitud
console.log(dato1.length);

//Concactenar variables
//var textototal = texto1 + texto2
var textototal = texto1.concat(texto2);
console.log(textototal);

var busqueda = texto1.indexOf("curso");//con lastindex of buscas la ultima busqueda
	busqueda = texto1.match("curso");// devuelve array con mas informacion
	busqueda = texto1.substr(14,5);//busqueda de posiciones
	busqueda = texto1.includes("al");//busqueda de palabras

console.log(busqueda);

var remplazo = texto1.replace("curso", "nuevo"); //remplazar palabras
	remplazo = texto1.slice(5,10); //recortar string
	remplazo = texto1.split(" ");//meter en un array con el separador pasado
	remplazo = texto1.trim(); //quita los espacios sobrantes de delante y de detras
console.log(remplazo);