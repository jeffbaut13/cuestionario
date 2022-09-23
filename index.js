let INDEX_PREGUNTA = 0;
let puntaje = 0;

cargarPregunta(INDEX_PREGUNTA);

function cargarPregunta(index) {
  objetoPregunta = baseDePreguntas[index];

  opciones = [...objetoPregunta.distractores];
  opciones.push(objetoPregunta.respuesta);
  for (let i = 0; i < length; i++) {
    opciones.sort(() => Math.random() - 0.5);
  }

  document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;

    document.getElementById("opcion-1").innerHTML = opciones[0];
    document.getElementById("opcion-2").innerHTML = opciones[1];
    document.getElementById("opcion-3").innerHTML = opciones[2];
    document.getElementById("opcion-4").innerHTML = opciones[3];
  
}
let resultadoError = function() {
  document.querySelector('#error').style.display = 'block';;
}
let preguntaUno = function() {
	document.querySelector('.uno').style.display = 'block';
}
let preguntaDos = function() {
	document.querySelector('.dos').style.display = 'block';
}
let preguntaTres = function() {
	document.querySelector('.tres').style.display = 'block';
}
async function seleccionarOpción(index) {

  if (objetoPregunta === baseDePreguntas[0] ) {
    let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
    if (validezRespuesta) {
      await cargaUno();
      preguntaUno();
      puntaje++;
    } else {
      await resultadoError();
    }
}
  else if (objetoPregunta === baseDePreguntas[1]) {
    let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
    if (validezRespuesta) {
      await preguntaDos();
      cargaDos();
      puntaje++;
    } else {
      await resultadoError();
    }
}
else if (objetoPregunta === baseDePreguntas[2]) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  /* document.querySelector('#tablero-de-juego').style.backgroundImage = "url('/img/Fondo-azul.gif')"; */
  if (validezRespuesta) {
    await preguntaTres();
    cargaTres();
    
  } else {
    await resultadoError();;
  }
}
else if (objetoPregunta === baseDePreguntas[3]) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  document.querySelector('#tablero-de-juego').style.backgroundImage = "url('./img/Fondo-verde.gif')";
  if (validezRespuesta) {
    await preguntaTres();
    cargaTres();
    
  } else {
    await resultadoError();;
  }
}
  INDEX_PREGUNTA++;
  if (INDEX_PREGUNTA >= baseDePreguntas.length) {
    await Swal.fire({
      title: "Juego términado",
      text: `Tu puntaje fue de: ${puntaje}/${baseDePreguntas.length}`,
    });
    INDEX_PREGUNTA = 0;
    puntaje = 0;
  }
  cargarPregunta(INDEX_PREGUNTA);

  

  
}

