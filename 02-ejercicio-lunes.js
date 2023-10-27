// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula:

// peso / altura^2
// Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:

// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30


// Preguntarle al usuario el peso y altura 

function calcularIMC(peso, altura) {
    peso >= 1 && peso <= 400 && altura >= 0.50 && altura <= 3
    ?  resultado = peso/altura**2
    : alert ('Error, ingresa los datos bien')

    if (resultado <= 18.5) {
        alert (`tu peso es ${resultado}, bajo de peso`)
    }
    else if ( resultado <= 24.9 ){
        alert ('Normal')
    }
    else if (resultado <= 29.9){
        alert('sobrepreso')
    }
    else (
        alert ('obeso')
    )
}
calcularIMC(prompt('escribe peso en kg'), prompt('escribe altura en mts'))