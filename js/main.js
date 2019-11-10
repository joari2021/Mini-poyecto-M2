(function (){
	//VARIABLES
	let lista = document.getElementById('lista'),
		tareaInput = document.getElementById('tareaInput'),
		btnNuevatarea = document.getElementById('btn-agregar'),
		enlaces = document.getElementsByTagName('a');

	//EVENTOS ################################################

	//  << agregar tarea >>
	let agregarTarea = function () {
		//validar si la tarea es la misma
		let nuevaTarea = tareaInput.value,
			detector = 0,
			elemento = document.createElement("li"),
			enlace = document.createElement("a");
			

		//comprobar que haya al menos 1 caracter en el valor del input
		for (let i = 0; i < nuevaTarea.length; i++){

			if (nuevaTarea[i] != ' '){
				detector = 1;
			}
		}
		
		//Comprobacion de validez de la tarea
		if (detector === 0){
			tareaInput.value = '';
			tareaInput.setAttribute("placeholder","Agrega una tarea válida");
			tareaInput.className = "error";
			return false;

		}else if (detector != 0) { 
			for (let i = 0; i < lista.children.length; i++){
				contEnlace = enlaces[i].innerHTML.toUpperCase();
				if (contEnlace === tareaInput.value.toUpperCase()){
					tareaInput.value = '';
					tareaInput.setAttribute("placeholder","Agrega una tarea válida");
					tareaInput.className = "error";
					alert("Ya existe una tarea igual, agrega una diferente");
					return false;
				}
			}
		}
		//Aplicar Capitalize al string
		function MaysPrimera(string){
			 for (let i = 0; i < string.length; i++){
			 	if (string.charAt(i) != ' '){
			 		return string.charAt(i).toUpperCase() + string.slice(i+1);
			 		
			 	}
			 }
		}
		nuevaTarea = MaysPrimera(nuevaTarea);

		//Añadir la tarea a la lista
		let contenido = document.createTextNode(nuevaTarea);
		enlace.appendChild(contenido);
		enlace.setAttribute("href","#");
		elemento.appendChild(enlace);
		lista.appendChild(elemento);

		tareaInput.value = '';

		//Aplicar evento de eliminacion
		eventoEliminar();

	}

	//  << comprobar input >>
	let comprobarInput = function () {

		tareaInput.className = "";
		tareaInput.setAttribute("placeholder","Agrega una nueva tarea");
	}

	//  << eliminar tarea >>
	let eliminarTarea = function () {
		this.parentNode.removeChild(this);
	}
	//FUNCIONES ##############################################

	//  << agregar tarea >>
	btnNuevatarea.addEventListener('click', agregarTarea);

	//  << comprobar input >>
	tareaInput.addEventListener('click', comprobarInput);

	//  << agregar evento de eliminacion >>
	const eventoEliminar = function (){

		for (let i = 0; i < lista.children.length; i++){
			lista.children[i].addEventListener('click', eliminarTarea);
		}
	}
	eventoEliminar();

}())

























/*(function (){
	var lista = document.getElementById('lista'),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevatarea = document.getElementById("btn-agregar");

	//Funciones
	var agregarTarea = function () {
		var nuevaTarea = tareaInput.value,
			elemento = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(nuevaTarea);

		if (nuevaTarea == "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";

			return false;
		}

		//Agregar el contenido al enlace
		enlace.appendChild(contenido);
		enlace.setAttribute("href","#");

		//Agregar el enlace (a) al elemento (li)
		elemento.appendChild(enlace);

		//Agregar el elemento (li) a la lista
		lista.appendChild(elemento);

		//borrar el valor del input
		tareaInput.value = "";

		//Agregar evento Eliminar al elemento (li)
		eventoEliminar(); 
	}

	var comprobarInput = function () {
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	}

	var eliminarElemento = function () {
		this.parentNode.removeChild(this);
	}

	//Eventos

	//Agregar Tarea
	btnNuevatarea.addEventListener("click",agregarTarea);

	//Comprobar Input
	tareaInput.addEventListener("click",comprobarInput);

	//Eliminar elementos de la lista
	
	var eventoEliminar = function (){
		for (var i = 0; i < lista.children.length; i++) {

			lista.children[i].addEventListener("click",eliminarElemento);
		}
	}
	eventoEliminar();
}())*/