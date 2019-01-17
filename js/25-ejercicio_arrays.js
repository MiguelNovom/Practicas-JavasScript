'use-strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array en el cuerpo de la pagina y en la consola
3. Ordenar la matriz y mostrarlo
4. Invertir su orden y mostralo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario que nos diga si lo encuentra y su indice.
*/

//1
var nombres = [];

for (var i = 0; i < 6; i++) {
	nombres.push(prompt("Introduce un nombre: "));
}
//2
nombres.forEach((nombre)=>{
	document.write(nombre + "</br>");
	console.log(nombre);
});
//3
nombres.sort();
console.log(nombres);
//4
nombres.reverse();
console.log(nombres);
//5
console.log(nombres.length);

//6
var palabra = prompt("Introduce la palabra que desea buscar: ");
var busqueda = nombres.find(nombre => nombre == palabra);
if (busqueda == palabra){
	busqueda = nombres.findIndex(nombre => nombre == palabra);
	alert("La palabra existe y su indice es : "+busqueda);
}else{
	alert("La palabra no existe");
}