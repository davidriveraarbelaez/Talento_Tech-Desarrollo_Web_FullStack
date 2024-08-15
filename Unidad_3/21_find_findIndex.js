/*
find y findIndex --> Buscar elementos en arrays

Estos dos métodos son herramientas muy útiles cuando necesitamos encontrar un elemento específico
dentro de un array en JavaScript. Ambos iteran sobre los elementos del array hasta que encuntran 
uno que cumple una determinada condición.

find(): Devuelve el primer elemento que cumple una condición dada.
findIndex(): Devuelve el índice del primer elemento que cumple una condición dada.

*/

// find
const numeros = [1, 2, 3, 4, 5];
const numeroEncontrado = numeros.find(numero => numero > 3); // Busca el primer número mayor que 3
console.log(numeroEncontrado); // 4


const numeros2 = [5, 12, 8, 130, 44];
const numeroEncontrado2 = numeros2.find(numero => numero > 12); // Busca el primer número mayor que 5
console.log(numeroEncontrado2); // Imprime ¿?

// findIndex
const Numeros = [1, 2, 3, 4, 5];
const indiceEncontrado = Numeros.findIndex(numero => numero > 3); // Busca el índice del primer número mayor que 3
console.log(indiceEncontrado); // 3

/* Diferencias entre find y findIndex

find(): Devuelve el primer elemento que cumple una condición dada.
findIndex(): Devuelve el índice del primer elemento que cumple una condición dada.

Método    |   Devuelve
find      | El elemento encontrado
findIndex | El índice del elemento encontrado

¿Cuándo usar cada uno?
- find(): cuando necesitemos obtener el valor del elemento que cumple una condición.
- findIndex(): cuando necesitemos obtener el índice del elemento que cumple una condición.

*/

// Buscar un usuario por nombre

const usuarios = [
    { nombre: "Juan", edad: 25 },       // 0
    { nombre: "María", edad: 30 },      // 1
    { nombre: "Pedro", edad: 22 },      // 2
    { nombre: "Ana", edad: 28 },        // 3
    { nombre: "Luis", edad: 35 },       // 4
    { nombre: "Laura", edad: 27},       // 5
    { nombre: "Carlos", edad: 32},      // 6
    { nombre: "Sofía", edad: 29},       // 7
    { nombre: "Diego", edad: 31},
    { nombre: "Valentina", edad: 26},
    { nombre: "Andrés", edad: 33},
    { nombre: "Camila", edad: 24}
]

const usuarioBuscado = usuario.find(usuario => usuario.nombre === "Sofía")
const usuarioBuscadoFI = usuario.findIndex(usuario => usuario.nombre === "Sofía");
console.log(usuarioBuscado); // Imprime {nombre: "Sofía", edad: 29}
console.log(usuarioBuscadoFI); // Imprime 7


