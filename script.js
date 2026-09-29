const boton = document.getElementById("btn-tema");

function aplicarTema(tema) {
  if (tema === "claro") {
    document.body.classList.add("claro");
    boton.textContent = "🌙 Modo oscuro";
  } else {
    document.body.classList.remove("claro");
    boton.textContent = "☀️ Modo claro";
  }
}

// Al cargar la página, recuperar el tema guardado
aplicarTema(localStorage.getItem("tema") || "oscuro");

// Al tocar el botón, cambiar de tema y guardarlo
boton.addEventListener("click", function () {
  const nuevoTema = document.body.classList.contains("claro") ? "oscuro" : "claro";
  aplicarTema(nuevoTema);
  localStorage.setItem("tema", nuevoTema);
});