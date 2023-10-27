const values = [
    { name: 'Juan', age: 45, gender: 'male' },
    { name: 'Sofia', age: 13, gender: 'female' },
    { name: 'Sofia', age: 67, gender: 'female' },
    { name: 'Carlos', age: 32, gender: 'female'},
    { name: 'Ana Maria', age: 27, gender: 'female' },
    { name: 'Luisa', age: 5, gender: 'female' },
    { name: 'Elisa', age: 17, gender: 'female' }
];

const conteoNombres = {};

values.forEach(person => {
    const name = person.name;
    conteoNombres[name] = (conteoNombres[name] || 0) + 1;
});

for (const name in conteoNombres) {
    if (conteoNombres[name] > 1) {
        console.log(`${name} se repite ${conteoNombres[name]} veces.`);
    }
}

