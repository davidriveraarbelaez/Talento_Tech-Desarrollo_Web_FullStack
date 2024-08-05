/*
Conversión de tipos: JavaScript es un lenguaje de tipado dinámico, 
lo que significa que no es necesario declarar el tipo de una variable 
antes de asignarle un valor. Sin embargo, es importante tener en cuenta
que JavaScript es un lenguaje de tipado débil, lo que significa que las
conversiones de tipos pueden ocurrir de forma implícita o explícita.

- conversión implícita: JavaScript convierte automáticamente un tipo de
dato a otro cuando se realiza una operación que requiere un tipo de dato
Ejemplo: 5+true
- conversión explícita: JavaScript permite convertir un tipo de dato a 
otro. Ejemplo: String(), Number(), Boolean.

Lenguajes de programación son de dos tipos:
Compilados: Son aquellos que requieren un compilador para convertir el
código fuente en código máquina. C, C++, Java, Rust, Go, Swift, 

Interpretados: Son aquellos que se ejecutan línea por línea, sin 
necesidad de compilar el código fuente. JavaScript, Python, Ruby, PHP,
Perl, Shell,
*/

const numero = 5;
const booleano = false;
console.log(numero + booleano);

const numero2 = 10;
const nombre = "David"
console.log(numero2 + nombre);

// Conversión implícita
let num = 10;
let str = "20";
let resultadoConversionImplicita = num + str;
console.log(resultadoConversionImplicita);

// Funciones de conversión
// Number(): Convierte un valor a un número
const stringToNumber = Number("157");
console.log(stringToNumber);

// Conversión explícita
let num2 = "30";
let num3 = Number(num2);
console.log(num3);
let bool = Boolean(num3);
console.log(bool);

// Operaciones con diferentes tipos
let edad = 30;
//prompt("Cuál es tu edad?");
edad = Number(edad);
console.log("En 5 años tendrás ", edad + 5, " años.");

