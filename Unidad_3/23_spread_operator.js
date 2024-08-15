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

// 2. Concatenar arrays
// Agregar componentes a un array existente
const array1=[1, 2, 3]; 
const array2=[4, 5];
const array12 =[...array1, ...array2];
console.log(array12); // =[1, 2, 3, 4, 5]

const array01 = [1, 2, 3];
const array02 = [4, 5, 6];
const arrayConcatenado = [...array01, ...array02];
console.log(arrayConcatenado); //

// 3. Pasar argumentos a funciones
const numeros = [1,2,3];
const suma = math.max(...numeros); // Pasa los elementos de num como arg individuales
console.log(suma) // 

// 4. Expandir objetos
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };
// Combinar los objetos en un nuevo objeto
const objetoCombinado = { ...objeto1, ...objeto2 };
console.log(objetoCombinado); // { a: 1, b: 2, c: 3, d: 4 }

// 5. Convertir strings en arrays
const texto = "Hola Mundo";
const arrayDeLetras = [...texto];
console.log(arrayDeLetras); // ['H', 'o', 'l', 'a', ' ', 'M', 'u', 'n', 'd', 'o']

// Copiar un array y agregar un elemento
const Herramientas = ['taladro', 'martillo'];
const nuevasHerramientas = ['destornillador', 'llave inglesa'];

// Pasar argumentos a una función que espera múltiples argumentos
function sumar(x, y, z){
    return x + y + z;
}

const Numeros = [1,5,7];
const Suma = sumar(...Numeros);
console.log(suma);

// Crear un nuevo objeto a partir de otros objetos
const persona = {nombre: 'Juan', edad: 25};
const direccion = {ciudad: 'Bogota', pais: 'Colombia'};
const datosPersona = {...persona, ...direccion};
console.log(datosPersona); // {nombre: 'Juan', edad: 25, ciudad: 'Bogota', pais: 'Colombia'}

/*
Ventajas del operador de dispersión

- Sintaxis concisa.
- Flexibilidad.
- Evita mutaciones accidentales

*/
