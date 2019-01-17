'use-strict'

window.addEventListener('load', function(){

	//Timers

	function intervalo(){
		var tiempo = setInterval(function(){ // setTimeout Solo hace la ejecucion una vez
		console.log("Set interval ejecutado");
			var encabezado = document.querySelector("h1")
			if (encabezado.style.fontSize == "60px") {
				encabezado.style.fontSize = "20px";
			}else{
				encabezado.style.fontSize = "60px";
			}
		}, 1000);
		return tiempo;
	}
	
	var tiempo = intervalo();
	var stop = document.querySelector("#stop");
	stop.addEventListener('click', function(){
		alert("Intervalo parado");
		clearInterval(tiempo);
	});

	var start = document.querySelector("#start");
	start.addEventListener('click', function(){
		alert("Intervalo iniciado");
		tiempo = intervalo();
	});


})