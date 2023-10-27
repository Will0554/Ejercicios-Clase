function calcularPrecioSinIVA(precioConIVA) {
    if (precioConIVA === null) {
        return -1; //se devuelve -1
    }

    const ivaPorcentaje = 15; // IVA del 15%
    const precioSinIVA = precioConIVA / (1 + ivaPorcentaje / 100);

    const resultadoRedondeado = Number(precioSinIVA.toFixed(2));

    return resultadoRedondeado;
}

console.log(calcularPrecioSinIVA(230.00)); // 200.00
console.log(calcularPrecioSinIVA(345.00)); // 300.00
console.log(calcularPrecioSinIVA(null));    // -1