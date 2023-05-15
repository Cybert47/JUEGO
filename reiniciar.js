const botonReiniciar = document.getElementById("reiniciar");

botonReiniciar.addEventListener("click", () => {
  const columnas = document.querySelectorAll(".contenedor > div");
  columnas.forEach((columna) => {
    const cajas = columna.querySelectorAll(".caja");
    const cajasArray = Array.from(cajas);
    cajasArray.sort(() => Math.random() - 0.5); // Orden aleatorio
    cajasArray.forEach((caja) => columna.appendChild(caja)); // Agregar cajas ordenadas a la columna
  });
});


botonReiniciar.addEventListener("click", () => {
  // Limpiar la selección y las respuestas
  palabras.forEach((palabra) => {
    palabra.classList.remove("seleccionado", "incorrecto", "correcto");
  });

  respuestas.forEach((respuesta) => {
    respuesta.classList.remove("seleccionado", "incorrecto", "correcto");
  });
});