/*

Funciones en JavaScript: Una función es un bloque de código que se puede reutilizar en cualquier
parte de un programa. Para definir una función en JavaScript se utiliza la palabra reservada 
function seguida del nombre de la función y los parámetros que recibe. 

A continuación, se muestra la estructura de una función en JavaScript:

function nombreFuncion(parametro1, parametro2, ..., parametroN) {
    // Código a ejecutar
}

*/

function Suma(numero1, numero2) {
    return numero1 + numero2
}

Suma(4, 5);
console.log(Suma);

function CalcularPrecioDescontado(precio, porcentajeDescuento){
    const descuento = (precio * porcentajeDescuento)/100;
    const PrecioDescuento = precio - descuento;
    return PrecioDescuento;
}

const PrecioOriginal = 100000;
const PorcentajeDescuento = 15;
const PrecioFinal = CalcularPrecioDescontado(PrecioOriginal, PorcentajeDescuento)

console.log("Precio original: $" + PrecioOriginal);
console.log("Descuento:" + PorcentajeDescuento + "%");
console.log("Precio con descuento: $" + PrecioFinal);