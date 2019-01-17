'use-strict'

//BOM- Browser Object Model

console.log(window.innerHeight);
console.log(window.innerWidth);
console.log("*********************");
console.log(screen.height);
console.log(screen.width);
console.log("*********************");
console.log(window.location);

function redirect(url){
	window.location.href = url;
}

function abrirVentana(url){
	window.open(url); //le puedo pasar como tercer parametro propiedades como width y height 
}