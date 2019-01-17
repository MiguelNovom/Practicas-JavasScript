'use-strict'

//dom - Document Object Mode

function cambiar_color(color){
	caja.style.background = color;
}

//CONSEGUIR UN ELEMENTO POR UN ID CONCRETO

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");//otra forma de seleccionar
caja.innerHTML = "TEXTO EN LA CAJA DESDE JS";//Cambiar el valor de un div
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "clase";

console.log(caja.innerHTML);//mostrar e contenido del div);

//CONSEGUIR UN ELEMENTO POR SI ETIQUETA

var todosLosDiv = document.getElementsByTagName('div');

var contenidoEnTexto = todosLosDiv[2];
contenidoEnTexto.innerHTML = "Otro texto para el div 2";
contenidoEnTexto.style.background="green";

var seccion = document.querySelector("#miseccion");

for (var i = 0; i < todosLosDiv.length; i++) {
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(todosLosDiv[i].textContent);
	parrafo.append(texto);
	seccion.append(parrafo);
}

var hr = document.createElement("hr");
seccion.append(hr);

//CONSEGUIR ELEMENTO POR SU ETIQUETA CSS

var divRojos = document.getElementsByClassName('rojo');
var divAmarillos = document.getElementsByClassName('amarillo');
divAmarillos[0].style.background ="green";
for (var i = 0; i < divRojos.length; i++) {
	divRojos[i].style.background = "pink";
}
