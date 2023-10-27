
// A partir de la lista anterior 
// determinar:
// 1. Cantidad de hombres y mujeres.
// 2. Promedio de edades de hombres y mujeres.
// 3. Cuántas personas se llaman igual.

const values = [
    { name: 'Juan', age: 45, gender: 'male' },
    { name: 'Sofia', age: 13, gender: 'female' },
    { name: 'Sofia', age: 67, gender: 'female' },
    { name: 'Carlos', age: 32, gender: 'female'},
    { name: 'Ana Maria', age: 27, gender: 'female' },
    { name: 'Luisa', age: 5, gender: 'female' },
    { name: 'Elisa', age: 17, gender: 'female' }
];

let hombres = 0
let mujeres = 0
let promedioEdad= 0 
let nombres = []

function primerPunto() {
    for (let value of values) {
        value.gender == 'male'
        ? hombres++
        : mujeres++
        promedioEdad += value.age        
    }
    console.log (`Hay ${mujeres} mujeres`)
    console.log (`Hay ${hombres} hombres`)
    console.log (`El promedio seria ${promedioEdad/values.length}`)
}
primerPunto()

