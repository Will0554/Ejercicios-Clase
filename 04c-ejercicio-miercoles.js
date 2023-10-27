// A partir de la siguiente lista

let products = [
    { nombre: "Pan", precio: 3, cantidad: 20 },
    { nombre: "Tomate", precio: 8, cantidad: 7 },
    { nombre: "Leche", precio: 0, cantidad: 4 },
    { nombre: "Huevos", precio: 9, cantidad: 0 },
    { nombre: "Arroz", precio: 5, cantidad: 5 },
    { nombre: "Cebolla", precio: 0, cantidad: 10 },
    { nombre: "Naranjas", precio: 12, cantidad: 10 },
];

// 3)Calcular el costo total del inventario.

function calcularCostoTotal(products) {
    let costoTotal = 0;

    for (const product of products) {
        if (product.precio > 0 && product.cantidad > 0) {
            costoTotal += product.precio * product.cantidad;
        }
    }

    return costoTotal;
}

const costoTotal = calcularCostoTotal(products);
console.log("El costo total del inventario es: " + costoTotal);