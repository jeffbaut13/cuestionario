let INDEX_PREGUNTA = 0;
let puntaje = 0;

cargarPregunta(INDEX_PREGUNTA);

function cargarPregunta(index) {
  objetoPregunta = baseDePreguntas[index];

  opciones = [...objetoPregunta.distractores];
  opciones.push(objetoPregunta.respuesta);
  
  opciones.sort(() => Math.random() - 0.5);
  
  document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;

    document.getElementById("opcion-1").innerHTML = opciones[0];
    document.getElementById("opcion-2").innerHTML = opciones[1];
    document.getElementById("opcion-3").innerHTML = opciones[2];
    document.getElementById("opcion-4").innerHTML = opciones[3];
  
}
/* Pregunta Correcta */
let cargaCorrecta = function() {
  mostrar('#correcto', 1500);
	document.querySelector('.correcto').style.display = 'block';
}
/* Pregunta Erronea */
let cargaError = function() {
	mostrar('#error', 1500);
	document.querySelector('.error').style.display = 'block';
}


function seleccionarOpción(index) {
  
if (objetoPregunta === baseDePreguntas[0] ) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  if (validezRespuesta) {
    cargaCorrecta();
    puntaje++;
  } else {
    cargaError();
  }
}
else if (objetoPregunta === baseDePreguntas[1] ) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  document.querySelector('#showtwo').style.display = 'block';
  if (validezRespuesta) {
    cargaCorrecta();
    puntaje++;
  } else {
    cargaError();
  }
}
else if (objetoPregunta === baseDePreguntas[2]) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  document.querySelector('#showthree').style.display = 'block';
  if (validezRespuesta) {
    cargaCorrecta();
    puntaje++;
  } else {
    cargaError();
  }
}
else if (objetoPregunta === baseDePreguntas[3]) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  document.querySelector('#showfour').style.display = 'block';
  if (validezRespuesta) {
    cargaCorrecta();
    puntaje++;
  } else {
    cargaError();
  }
}
else if (objetoPregunta === baseDePreguntas[4]) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  document.querySelector('#showfive').style.display = 'block';
  document.querySelector('#tablero-de-juego').style.backgroundImage = "url('../img/Fondo-verde.gif')";
  if (validezRespuesta) {
    cargaCorrecta();
    puntaje++;
  } else {
    cargaError();
  }
}
else if (objetoPregunta === baseDePreguntas[5]) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  document.querySelector('#showsix').style.display = 'block';
  if (validezRespuesta) {
    cargaCorrecta();
    puntaje++;
  } else {
    cargaError();
  }
}
else if (objetoPregunta === baseDePreguntas[6]) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  document.querySelector('#showseven').style.display = 'block';
  if (validezRespuesta) {
    cargaCorrecta();
    puntaje++;
  } else {
    cargaError();
  }
}
else if (objetoPregunta === baseDePreguntas[7]) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  document.querySelector('#showeigth').style.display = 'block';
  if (validezRespuesta) {
    cargaCorrecta();
    puntaje++;
  } else {
    cargaError();
  }
}
  INDEX_PREGUNTA++;
  if (INDEX_PREGUNTA >= baseDePreguntas.length) {
    document.querySelector('#resultado').style.display = 'block'; 
    let resultado = document.querySelector('#resultado-boton')
    resultado.innerHTML +=     
    
    `<p><strong>EL RECICLAJE ES EL CAMINO</strong></p>
    <p>Tu puntaje fue de: ${puntaje}/${baseDePreguntas.length}</p>
    <button id="resultado-boton" onclick="intetarDeNuevo()">Intentar de nuevo</button>`
    
    INDEX_PREGUNTA = 0;
    puntaje = 0;
  }
  cargarPregunta(INDEX_PREGUNTA);
}
