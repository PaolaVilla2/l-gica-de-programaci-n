// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables
let amigos = [];

function agregarAmigo() {
  // Capturar el valor del campo de entrada
  let input = document.getElementById("amigo");

  // Validar que el campo no este vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar al array
  amigos.push(nombre);

  // Mostrar en la lista de amigos
  mostrarAmigos();

  // Limpiar el campo de entrada
  input.value = "";
}

function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar lista antes de actualizar

  amigos.forEach(function(amigo) {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}
