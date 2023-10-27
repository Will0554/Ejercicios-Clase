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

// 2) Calcular el costo promedio de todos productos de la lista cuyo precio y 
// cantidad disponible es mayor a cero

function calcularCostoPromedio(products) {
    let costoTotal = 0;
    let cantidadTotal = 0;

    for (const product of products) {
        if (product.precio > 0 && product.cantidad > 0) {
            costoTotal += product.precio * product.cantidad;
            cantidadTotal++;
        }
    }

    if (cantidadTotal === 0) {
        return 0;
    }

    const costoPromedio = costoTotal / cantidadTotal;
    return costoPromedio;
}

const costoPromedio = calcularCostoPromedio(products);
console.log("El costo promedio de los productos es: " + costoPromedio);

