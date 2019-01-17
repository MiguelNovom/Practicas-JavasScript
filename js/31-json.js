'use-strict'

//JSON --  JavaScript Object Notation

window.addEventListener("load",()=>{
	var pelicula = {
		titulo: "Batman vs Superman",
		year: 2017,
		pais: "Estados Unidos"
	};

	var peliculas = [
		{titulo:"La verdad duele", year: 2016, pais: "Fracia"},
		pelicula
	];
	cajaPelicula = document.querySelector("#peliculas");
	for (let i in peliculas){
		var p = document.createElement("p");
		p.append(peliculas[i].titulo + " - "+ peliculas[i].year);
		cajaPelicula.append(p);
	}
});
