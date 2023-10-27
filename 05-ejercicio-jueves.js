// Calcular Entero a partir de un Binario de 4 dígitos.
// Dada una matriz de unos y ceros, convierta el valor binario equivalente a un número entero.

function binarioAEntero(binario) {
let entero = 0;
let potencia = 1; // Inicializa la potencia en 2^0

for (let i = binario.length - 1; i >= 0; i--) {
    entero += binario[i] * potencia;
    potencia *= 2; 
}

return entero;
}

// Ejemplos:
const entrada1 = [0, 0, 0, 1];
const entrada2 = [0, 0, 1, 0];
const entrada3 = [0, 1, 0, 1];
const entrada4 = [1, 0, 0, 1];

console.log(binarioAEntero(entrada1)); // 1
console.log(binarioAEntero(entrada2)); // 2
console.log(binarioAEntero(entrada3)); // 5
console.log(binarioAEntero(entrada4)); // 9
