/*

Array: Es una colección ordenada de elementos, son muy útiles para almacenar y manipular grandes
cantidades de datos de manera eficiente y estructurada.

*/

// Array vacío
let miArray = []; 

// Array con elementos predefinidos
let miArray2 = ["manzana", "banano", "pera"];

// Array a partir de un constructor
let numeros = new Array(5); // Crea un array con 5 elementos indefinidos (undefined)

console.log(miArray);
console.log(miArray2);
console.log(numeros);

/* Acceso a elementos en un array

Los elementos de un array se indexan comenzando desde 0. Esto significa que el primer elemento de un
array tiene un índice de 0, el segundo elemento tiene un índice de 1, y así sucesivamente.

*/

let frutas = ["manzana", "banano", "pera"];
console.log(frutas[0]); // imprime "manzana"
console.log(frutas[1]); // imprime "banano"
console.log(frutas[2]); // imprime "pera"

// Modificar elementos: modificar banano por uva
frutas[1] = "uva";
console.log(frutas); // manzana, UVA, pera

// Propiedades importantes 
// Longitud de un array --> length: devuelve el número de elementos en el array.
let longitud = frutas.length;
console.log(longitud);

// Métodos de array:
console.log("Métodos de array:");
// indexOf: devuelve el índice del primer elemento que coincida con el valor especificado.
let indice = frutas.indexOf("pera");
console.log(indice);
console.log(frutas.indexOf("banano")); //Imprime -1 porque banano ya no está en el array

// push: agrega un elemento al final del array.
frutas.push("naranja");
console.log("push:" + frutas);

// pop: elimina y devuelve el último elemento del array.
let ultimoElemento = frutas.pop();
console.log(ultimoElemento);
console.log("pop:" + frutas);

// shift: elimina y devuelve el primer elemento del array.
let primerElemento = frutas.shift();
console.log("shift:" + primerElemento);
console.log("shift:" + frutas);

// unshift: agrega un elemento al principio del array.
frutas.unshift("kiwi");
console.log("unshift" + frutas);