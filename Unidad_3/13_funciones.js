/*

Funciones en JavaScript: Una función es un bloque de código que se puede reutilizar en cualquier
parte de un programa. Para definir una función en JavaScript se utiliza la palabra reservada 
function seguida del nombre de la función y los parámetros que recibe. 

A continuación, se muestra la estructura de una función en JavaScript:

function nombreFuncion(parametro1, parametro2, ..., parametroN) {
    // Código a ejecutar
}

*/


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

// Ejercicio en clase: Completar el siguiente script
function Suma(numero1, numero2) {
    return numero1 + numero2
}

const n1 = 4;
const n2 = 5;
const sumaNumeros = Suma(n1,n2)
console.log("Número 1: " + n1)
console.log("Número 2: " + n2)
console.log("El valor de la suma es igual a: " + sumaNumeros);

// Actividad final
/* 
Crear una función que sume los dos primeros números y le reste el tercero. El nombre de la
función es libre
*/

function Ejercicio(Numero1, Numero2, Numero3) {
    return Numero1 + Numero2 - Numero3
}

const N1 = 4;
const N2 = 5;
const N3 = 9;
const miFuncion = Ejercicio(N1,N2, N3)
console.log("Número 1: " + N1)
console.log("Número 2: " + N2)
console.log("Número 3: " + N3)
console.log("El resultado de la operación es igual a: " + miFuncion);