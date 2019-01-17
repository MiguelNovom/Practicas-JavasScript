'use-strict'

//Arrays, arreglos o matrices - recorrer arrays - busquedas

var nombres= ["Juan", "Carlos", "Lucia"];// variable
var lenguajes = new Array("PHP", "Java", "Python"); //objeto

console.log(lenguajes.length);//para sacar nombres[0]

//recorrer un array
for (var i = 0; i < nombres.length; i++) {
	//alert(nombres[i]);
}
//recorrer array mejorado
nombres.forEach((elemento, indice, array)=>{
	//alert(elemento+ " "+ indice);
	console.log(array);//array enter
});
//recorrer array for in
for (let lenguaje in lenguajes){
	//alert(lenguajes[lenguaje]);
}
var precios = [10,20,30,40,50]
var busqueda = lenguajes.findIndex(lenguaje=>lenguaje=="Java");//con find solo busca en el elemento sino el Index
	busqueda = precios.some(precio =>precio >=30);//comprobar con comparaciones
alert(busqueda);