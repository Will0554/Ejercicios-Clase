// amplia la funcionalidad e la funcio 
// suma ()

// La siguiente funcion es capaz de sumar dos numero. que cambios deben hacerse a la misma para que sea capaz de sumar
// 2 o mas numero 

// Va a sobrevivir?
// un heroe se dirige al castillo para completar su mision. Sin embargo, le ha dicho que el castillo esta rodeado por un par
// de poderosos dragones. cada dragon necesira 2 balas para ser derrotado, nuestro heroe no tiene idea de cuantas balas debe cargar.
// Responda a la pregunta y devuelva true si es asi, de lo contrario false

function suma() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(suma(3, 6));       // 9
console.log(suma(3, 6, 10));   // 19
console.log(suma(1, 2, 3, 4)); // 10


function puedeDerrotarDragones(balas) {
    // Cada dragón necesita 2 balas para ser derrotado
    if (balas >= 2) {
        console.log("El héroe puede derrotar a los dragones.");
    } else {
        console.log("El héroe no puede derrotar a los dragones.");
    }
}

puedeDerrotarDragones(4); // "El héroe puede derrotar a los dragones."
puedeDerrotarDragones(3); // "El héroe no puede derrotar a los dragones."

