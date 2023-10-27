const frutas = [
    { nombre: 'Mangostino', precio: 34 },       
    { nombre: 'Mora', precio: 17 },      
    { nombre: 'Banano', precio: 11 },        
    { nombre: 'Papaya', precio: 13 },      
    { nombre: 'Lulo', precio: 8 }      
];

const frutasEntre10y20Dolares = [];

for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    if (fruta.precio >= 10 && fruta.precio <= 20) {
        frutasEntre10y20Dolares.push(fruta.nombre);
    }
}

console.log(frutasEntre10y20Dolares);
