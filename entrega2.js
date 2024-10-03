// el user ingresa su eleccion de jugada
// en caso de no escribir una opcion valida, el prompt se va a repetir hasta que el imput sea valido
let eleccionJugador;
const VALIDOS = ["piedra", "papel", "tijeras"];

// objeto para almacenar puntajes
const puntajes = {
    jugador: 0,
    computadora: 0
};

// función para obtener imput valido del jugador
function obtenerEleccionJugador() {
    let eleccion;
    do {
        eleccion = prompt("Por favor, escribi tu elección de jugada (piedra, papel o tijeras)").toLowerCase();
    } while (!VALIDOS.includes(eleccion));
    return eleccion;
}

// la pc elige un numero azar de 0 a 2
function obtenerEleccionComputadora() {
    const opciones = {
        0: "piedra",
        1: "papel",
        2: "tijeras"
    };
    return opciones[Math.floor(Math.random() * 3)];
}

// comparacion de elecciones 
function determinarGanador(eleccionJugador, eleccionComputadora) {
    if (eleccionJugador === eleccionComputadora) {
        return "empate";
    } 
    if (
        (eleccionComputadora === "piedra" && eleccionJugador === "tijeras") ||
        (eleccionComputadora === "papel" && eleccionJugador === "piedra") ||
        (eleccionComputadora === "tijeras" && eleccionJugador === "papel")
    ) {
        puntajes.computadora++;
        return "computadora";
    } else {
        puntajes.jugador++;
        return "jugador";
    }
}

// loop de 5 rondas de juego
for (let i = 0; i < 5; i++) {
    eleccionJugador = obtenerEleccionJugador();
    console.log("Elegiste: " + eleccionJugador);

    const eleccionComputadora = obtenerEleccionComputadora();
    console.log("La computadora eligió: " + eleccionComputadora);

    const ganador = determinarGanador(eleccionJugador, eleccionComputadora);

    if (ganador === "empate") {
        alert("¡Empate!");
    } else if (ganador === "jugador") {
        alert("¡Punto para el jugador!");
    } else {
        alert("¡Punto para la computadora!");
    }
}

// verificar ganador
function mostrarResultadoFinal() {
    if (puntajes.jugador > puntajes.computadora) {
        alert("El jugador gana la partida!");
    } else if (puntajes.jugador < puntajes.computadora) {
        alert("La computadora gana la partida!");
    } else {
        alert("Es un empate!");
    }
}

mostrarResultadoFinal();
