/*
Arrow functions: Son una sintaxis más concisa para definir funciones en JavaScript. Se introdujeron en 
ECMAScript 6 y ofrecen una forma más limpia y expresiva de escribir código.

(parámetro1, parámetro2, ....) =>{
    // Cuerpo de la función
}

(): Los paréntesis engloban los parámetros. Si solamente hay un parámetro, puedes omitir los paréntesis.
=>: La flecha indica que se está definiendo la función.
{ }: Los corchetes indican que se está definiendo un bloque de código. Si el cuerpo consiste en una 
sola expresión, se pueden omitir los corchetes y el return es implícito.

*/

// Función tradicional
function sumar(a+b){
    return a + b;
}

const resultado = sumar(5, 3);
console.log(resultado)

// Función flecha equivalente
const sumar = (a,b)=> a+b;

const resultadoFuncionFlecha = sumar(5, 3);
console.log(resultadoFuncionFlecha)

/*
Ventajas de las funciones flecha
- Sintaxis más concisa -> Reducen la cantidad de código a escribir.
- Contexto léxico de this -> Heredan el valor de this del contexto en el que se definen, lo que 
simplifica el manejo de this en métodos y callbacks.
- Ideales para funciones cortas -> Son perfectas oara funciones pequeñas y simples.
*/

// Casos de uso comunes 

// Callbacks
const numeros = [1, 2, 3];  // 
const numerosDoblados = numeros.map(numero => numero*2); //
console.log(numerosDoblados) 

// Métodos de array
const nombres = ["Juan", "María", "Pedro"];
const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log(nombresMayusculas)

// Funciones de orden superior
const multiplicarPorDos = (numero) =>
    numero * 2;
    const resultadoOrdenSuperior = multiplicarPorDos(5);
    console.log(resultadoOrdenSuperior)

/* 
Características importantes:
- No tienen su propio this.
- No se pueden utilizar como métodos.
- No se puede utilizar con new.

¿Cuándo utilizar funciones flecha?
- Funciones cortas y concisas.
- Callbacks y métodos de array.
- Cuando no necesitamos un this personalizado.
*/