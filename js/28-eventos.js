'use-strict'

//Eventos del raton

window.addEventListener('load', ()=>{
	
	function cambiarColor(){
		var bg = boton.style.background;
		if(bg == "green"){
			boton.style.background = "red";
		}else{
			boton.style.background = "green";
		}
		boton.style.padding = "10px";
		boton.style.border = "1px solid #ccc"
	}

	var boton = document.querySelector("#boton");

	//Evento click- dblclick
	boton.addEventListener('click', function(){ //forma mejor de ejecutar los evetos.
		cambiarColor();
		this.style.border = "10px solid black"; // Con this accedemos al objeto que estamos ejecutando el evento.
	});

	//Mouse Over

	boton.addEventListener('mouseover', function(){ //forma mejor de ejecutar los evetos.
		boton.style.background = "yellow";
	});

	//Mouse Out

	boton.addEventListener('mouseout', function(){ //forma mejor de ejecutar los evetos.
		boton.style.background = "#ccc";
	});

	//Focus
	var campo = document.querySelector("#campo_nombre");
	campo.addEventListener('focus', function(){ //forma mejor de ejecutar los evetos.
		console.log("[focus]Estas dentro del input");
	});

	//Blur
	campo.addEventListener('blur', function(){ //forma mejor de ejecutar los evetos.
		console.log("[blur]Estas fuera del input");
	});

	//Keydown
	campo.addEventListener('keydown', function(event){ //forma mejor de ejecutar los evetos.
		console.log("[keydown] Pulsando", String.fromCharCode(event.keyCode));
	});

	//Keypress
	campo.addEventListener('keypress', function(event){ //forma mejor de ejecutar los evetos.
		console.log("[keypress]Presionada", String.fromCharCode(event.keyCode));
	});
	//Keyup
	campo.addEventListener('keyup', function(event){ //forma mejor de ejecutar los evetos.
		console.log("[keyup]Soltada", String.fromCharCode(event.keyCode));
	});
});