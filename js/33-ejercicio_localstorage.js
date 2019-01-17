'use-strict'

window.addEventListener("load",()=>{
	var formulario = document.querySelector("#formPeliculas");
	formulario.addEventListener("submit", ()=>{
		var titulo = document.querySelector("#addPelicula").value.trim();
		if(titulo.length >= 1){
			localStorage.setItem(titulo, titulo);
		}
	});

	var formularioBorrar = document.querySelector("#formBorrarPeliculas");
	formularioBorrar.addEventListener("submit", ()=>{
		var titulo = document.querySelector("#deletePelicula").value.trim();
		localStorage.removeItem(titulo);
		
	});

	var ul = document.querySelector("#ulPeliculas");
	for (let i in localStorage){
		if (typeof localStorage[i] == "string"){
			var li = document.createElement("li");
			ul.append(li);
			li.append(localStorage[i]);
		}
	};
});