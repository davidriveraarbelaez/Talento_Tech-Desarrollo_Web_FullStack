/*
Operador de dispersión

Se representa con tres puntos (...) es una sintaxis introducida en ECMAScript6
que nos permite expandir los elementos de un iterable (arrays o strings) en otros
contextos. Esto significa que podemos tomar los elementos individuales de un
array o string y disperarlos en diferentes lugares de nuestro código

*/

// ¿Para qué sirve?

// 1. Copiar arrays

const arrayOriginal = [1, 2, 3];
const arrayCopia = [...arrayOriginal];
console.log(arrayCopia); // [1, 2, 3]

// Agregar componentes a un array existente
const array1=[1, 2, 3]; 
const array2=[4, 5];
const array12 =[...array1, ...array2];
console.log(array12); // =[1, 2, 3, 4, 5]

// 2. Concatenar arrays

