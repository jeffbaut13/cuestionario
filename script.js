let empezarEncuesta = function() {
	document.querySelector('#loader').style.display = 'none';
}


function mostrar(el, time,infi=false) {
	let p = document.querySelectorAll(el);
	let i = 0;
	// ejecutamos un intervalo de tiempo para los elementos
	let interval = setInterval(() => {
		// validamos que no sea el elemento 0 para aplicarle el none al anterior!
		if (i != 0)p[i - 1].style.display = "none";
		//validamos si es igual al lenght para finalizar el bucle
		if (i == p.length) {
				//retornamos i a 0
				i=0;
			// limpiamos el intervalor para que no se ejecute mas si no es infinito
				if(!infi) clearInterval(interval)
			// retornamos para finalizar la funcion
			return;
		}
		// aplicamos el display block
		p[i].style.display = "block";
		// aumentamos i en 1
		i++;
	}, time)
	
}


let displayNone = function(){
		document.querySelector('#correcto').style.display = 'none';
		document.querySelector('#error').style.display = 'none';
		document.querySelector('#showtwo').style.display = 'none';
		document.querySelector('#showthree').style.display = 'none';
		document.querySelector('#showfour').style.display = 'none';
		document.querySelector('#showfive').style.display = 'none';
		document.querySelector('#showsix').style.display = 'none';
		document.querySelector('#showseven').style.display = 'none';
		document.querySelector('#showeigth').style.display = 'none';
}
let siguientePRegunta = function() {
		document.querySelector('#none').style.display = 'none';
		displayNone();
}

let intetarDeNuevo = function() {
	location.reload();
} 
