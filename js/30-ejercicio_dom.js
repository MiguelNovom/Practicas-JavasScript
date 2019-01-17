'use-strict'

window.addEventListener('load', ()=>{

	var formulario = document.querySelector("#formulario");
	var box_dashed = document.querySelector(".dashed");
	box_dashed.style.display = "none";
	
	formulario.addEventListener('submit', ()=>{

		var nombre = document.querySelector("#campo_nombre").value;
		var apellidos = document.querySelector("#campo_apellidos").value;
		var edad = document.querySelector("#campo_edad").value;

		if (nombre.trim() == null || nombre.trim().length == 0){
			alert("El campo nombre no es valido");
			return false;
		}

		if (apellidos.trim() == null || apellidos.trim().length == 0){//la funcion trim elimina espacios sobrantes por delante y detras
			alert("El campo apellidos no es valido");
			return false;
		}

		if (edad.trim() == null || edad.trim().length == 0 || isNaN(edad)){
			alert("El campo edad no es valido");
			return false;
		}

		box_dashed.style.display = "block";

		datos_usuario = [nombre,apellidos, edad];
		for (let i in datos_usuario){
			var parrafo = document.createElement("p");
			box_dashed.append(parrafo);
			parrafo.append(datos_usuario[i]);
		}
	})
});
