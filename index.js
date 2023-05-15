const botonComprobar = document.getElementById("comprobar");


botonComprobar.addEventListener("click", () => {
  let puntuacion = 0;

  // Verificar si todas las respuestas son correctas
  respuestas.forEach((respuesta) => {
    if (respuesta.classList.contains("correcto")) {
      puntuacion++;
    }
  });

  // Mostrar la puntuación en el modal
  const modal = document.getElementById("modal");
  const spanCerrar = document.getElementsByClassName("cerrar")[0];
  const spanPuntuacion = document.getElementById("puntuacion");

  spanPuntuacion.innerHTML = puntuacion;

  modal.style.display = "block";

  spanCerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });
});


