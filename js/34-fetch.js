'use-strict'

//fetch(ajax) y peticiones a servicios / apis rest

var divUsuarios = document.querySelector("#usuario");
var divJanet = document.querySelector("#janet");
var divProfesor = document.querySelector("#profesor");

getUsuarios()
		.then(data => data.json())//esta funcion de flecha es como una funcion de callback con el return
		.then(users =>{
			listadoUsuarios(users.data);
			return getInfo();
		})
		.then(data => {
			divProfesor.innerHTML = data;
			return getJanet();
		})
		.then(data=>data.json())
		.then(janet=>{
			mostrarJanet(janet.data)
		});
		

function getUsuarios(){
	return fetch("https://reqres.in/api/users");
};

function getJanet(){
	return fetch("https://reqres.in/api/users/2");
};

function getInfo(){
	var profesor = {
		nombre : "miguel",
		apellidos : "novo",
		email: "miguel.novom@gmail.com"
	};
	return new Promise((resolve, reject)=>{ //Creacion de una promesa
		var profesor_str = "";
		setTimeout(()=>{
			profesor_str = JSON.stringify(profesor);
			if (typeof profesor_str != "string" || profesor_str == "") return reject("Error");
			return resolve(profesor_str);
		},3000);
	})
}
function listadoUsuarios (usuarios){
	usuarios.map((user, i) => { // el map es como un bucle dentro de fetch
		let nombre = document.createElement("h2");
		nombre.innerHTML = i + " - " + user.first_name + " " + user.last_name;
		divUsuarios.append(nombre);
	});
	document.querySelector(".loading").style.display= "none";
};


function mostrarJanet (usuario){
	let nombre = document.createElement("h4");
	let avatar = document.createElement("img");

	nombre.innerHTML = usuario.first_name + " " + usuario.last_name;
	avatar.src = usuario.avatar;
	avatar.width = "100";

	divJanet.append(nombre);
	divJanet.append(avatar);
	document.querySelector("#janet .loading").style.display= "none";
};


