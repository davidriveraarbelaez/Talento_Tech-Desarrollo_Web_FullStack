/*
PRIMITIVOS
- Inmutables: No cambian el valor original.
- Se pasan por valor: Se copian al asignarse a otra variable.

string: Almacenar cadenas de texto
number: Almacenar números
boolean: Almacena valores true o false,
null: Representa un valor nulo.
undefined= Representa un valor no definido.
symbol: Almacena valores únicos.
bigint: Almacena números muy grandes.
*/

/*
COMPLEJOS
- Mutables: Pueden cambiar el valor original.
- Se pasan por referencia: Referencian la misma ubicación en memoria.

object: Almacena colecciones de datos.
array: Almacena listas ordenadas de datos, técnicamento un tipo de objeto. 
function: Almacena funciones, que son bloques de código reutilizables.
*/

console.log("Datos primitivos:");
let numero = 45;
numero = numero + 10; // Nuevo valor: 55
console.log(numero); // Imprime 55

// Ejemplo con booleanos
let esVerdadero = true;
esVerdadero = false; // Nuevo valor false
console.log(esVerdadero); // Imprime false

console.log("Datos complejos:");

// Ejemplo con objetos
let usuario = {
    nombre: "David",
    edad: 30,
    cedula: 1234567890
};

usuario.edad = 20;    // Modificar el valor original
console.log(usuario); // Imprime {nombre: "David", edad: 20}

// Ejemplo con arrays
let frutas = ["manzana", "pera"];
console.log("Datos originales:" + frutas);
frutas[2]= "sandía"; // Modifica el valor original
console.log(frutas); // Imprime ["sandía", "pera"]
