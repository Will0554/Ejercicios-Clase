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

// 1) Obtener una lista con los nombres de los productos mas baratos, en el entendido que se considera barato un producto que no supera los 5 dólares.
// 3)Calcular el costo total del inventario.

const precioDeProductos = []
function productosBaratos(precio) {
    for ( let i = 0; i < products.length; i++) {
        const producto = products [i]
        if (producto.precio <= 5) { 
            precioDeProductos.push(producto.nombre)
        }
    }
    console.log(precioDeProductos)
}
productosBaratos()

