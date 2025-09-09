// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables
// Arreglo que guardará los nombres
let amigos = [];

function agregarAmigo() {
  // Capturar el valor del campo de entrada
  let input = document.getElementById("amigo");

  // Validar si el campo está vacío
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
    let ami = document.createElement("ami");
    ami.textContent = amigo;
    lista.appendChild(ami);
  });
}

function sortearAmigo() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // limpiar resultados anteriores

  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  // Seleccionar un índice aleatorio
  let indice = Math.floor(Math.random() * amigos.length);
  let amigoSecreto = amigos[indice];

  // Mostrar el resultado
  let ami = document.createElement("ami");
  ami.textContent = ` El amigo secreto es: ${amigoSecreto}`;
  resultado.appendChild(ami);
}
