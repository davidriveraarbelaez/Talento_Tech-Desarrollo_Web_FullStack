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

// splice: elimina o reemplaza elementos en una posición específica

// slice: devuelve una copia de una parte del array.

// concat: combina dos o más arrays en un nuevo array.

// join: convierte todos los elementos del array en una cadena, separados por un separador específico

// forEach: itera sobre cada elemento del array y ejecuta una función para cada uno.
frutas.forEach(fruta => console.log(fruta)); // imprime cada fruta en una línea separada

// map: crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.
let Numeros = [1, 2, 3, 4, 5];
let numerosDoblados = Numeros.map(numero => numero * 2);
let cuadrados = Numeros.map(numero => numero * numero);
console.log("Numeros:" + Numeros);  // 1,2,3,4,5
console.log("Doblados:" + numerosDoblados); // 2,4,6,8,10
console.log("Cuadrados:" + cuadrados); // 1, 4, 9, 16, 25

// filter: crea un nuevo array con los elementos que cumplen una condición dada.

// find: devuelve el primer elemento que cumple una condición dada.

// sort: ordena los elementos de un array.

// reverse: invierte el orden de los elementos de un array.

// reduce: aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor.

// Iterando sobre arrays

for (let i=0 ; i<frutas.length; i++){
    console.log(frutas[i]); // imprime cada fruta en una línea separada
}

/* forEach
frutas.forEach(fruta=>{
    console.log(fruta);
});
)

*/

// Arrays multidimensionales

/*
Los arrays pueden contener otros arrays, creando estructuras de datos más complejas.
*/

let matriz = [
//  c0 c1 c2   // c = columna
    [1, 2 ,3], //fila 0
    [4, 5 ,6], //fila 1
    [7, 8 ,9]  //fila 2
];

console.log("Matriz:" + matriz);
// Acceder a elementos específicos
// console.log(matriz[# fila][# columna]);
console.log(matriz[0][1]); // imprime 2 
console.log(matriz[2][2]); // imprime 9

/* Mutabilidad e inmutabilidad

Mutabilidad: Un objeto es mutable cuando puede ser modificado después de su creación. En el contexto
de los arrays, esto significa que podemos agregar, eliminar o cambiar elementos directamente en el
array original.

Inmutabilidad:Un objeto es inmutable cuando no puede ser modificado después de su creación. Cualquier
cambio a un objeto inmutable resulta en la creación de un nuevo objeto.

Por defecto,los arrays en JavaScript son mutables. Esto significa que puedes modificarlos directamente
utilizando métodos como push(), pop(), shift() y unshift().

*/

let Verduras = ["tomate", "cebolla", "zanahoria"];
Verduras.push("Ajo"); // Agrega "Ajo" al final del array
console.log("Verduras" Verduras); // imprime ["tomate", "cebolla", "zanahoria", "Ajo"]

/* 
¿Por qué es importante la inmutabilidad?
- Predictibilidad.
- Pureza funcional.
- React y otras frameworks.

¿Cómo logramos inmutabilidad en JavaScript?
- Spread operator (...): Crea una copia superficial de un array.
- Métodos que devuelven nuevos arrays: slice,map, filter, concat, etc.
- Librerías de programación funcional: Ramda, lodash, etc.
*/

// Ejemplo: spread operator
let vehiculos = ["moto" , "bicicleta", "carro"];
let nuevosVehiculos = [...vehiculos, "patineta"]; // Agrega "patineta" al final del array
console.log("Nuevos vehículos:" + nuevosVehiculos);

/*
¿Cuándo utilizar la inmutabilidad?
- Cuando queramos prevenir efectos secundarios no deseados.
- Cuando trabajemos con datos que no deben ser modificados.
- Cuando utilicemos frameworks que se basan en la inmutabilidad.

*/