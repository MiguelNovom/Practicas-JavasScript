'use-strict'

//Arrays multidimensionales, operaciones con arrays y ordenar arrays

var categorias = ["accion", "terror", "comedia"];
var peliculas = ["El señor de los anillos", "El sequito", "American pie"];

peliculas.sort();//ordenar
peliculas.reverse();//darle la vuelta
console.log(peliculas);
var cine = [categorias, peliculas];
/*
console.log(cine[0][1]);
console.log(cine[1][1]);
*/

var array = [];
array.push("Loco");//añadir elemento
array.push("tu");
array.push("Holaaa");
array.pop();//elimina e ultimo el elemento
//console.log(array);

//eliminar elemento concreto

var indice = categorias.indexOf("terror");
if (indice > -1){
	categorias.splice(indice, 1); //le pasamos el numero que hay que borrar y cuantas posiciones adelante quiere borrar
}
//console.log(categorias);
//console.log(peliculas.join());//transformas array a string
