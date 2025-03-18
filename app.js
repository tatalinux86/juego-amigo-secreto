
//creamos el array que contendra la lista de amigos//
let amigos = [];

// Función para agregar amigos al array
function AgregarAmigos() {
    let inputAmigo = document.getElementById("amigo"); 
    let nombreAmigo = inputAmigo.value;

    if (nombreAmigo === "") {
        alert("Debe ingresar un nombre");
        return;
    }

     // Validar si el nombre ya está en la lista
     if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya fue ingresado.");
        return;
     }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    RenderizarAmigos();
}

// Función para mostrar la lista de amigos
function RenderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

// Función para sortear un amigo aleatorio
function SortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe agregar al menos un amigo para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.textContent = "El amigo sorteado es: " + amigoSorteado;
    resultado.style.color = "green";
}




