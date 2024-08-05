// Imprimir "Hola mundo" en la terminal

/*
variable: Es un contenedor con nombre que almacena un dato que puede ser utilizado en un programa

Partes de una variable
1. Palabra clave de declaración: Es la palabra clave que indica que se está declarando una variable

- var: Es la palabra clave tradicional y tiene un alcance de función
- let: Es la palabra clave más reciente que tiene un alcance de bloque
- const: Se utiliza para declarar constantes, es decir, variables cuyos valores no pueden ser modificados una vez sean inicializados

2. Nombre de la variable: Es el identificador único que utilizamos para referirnos a la variable en el código.

Reglas de nomenclatura:
- No puede contener espacios en blanco.
- No puede ser una palabra reservada de JavaScript
- Es sensible a las mayúsculas y minúsculas.

3. Operador de asignación (=): Se utiliza para asignar un valor a la variable.

4. Valor: Es el dato que se almacena en la variable. Puede ser de tipo número, cadenas de texto, booleanos, objetos, etc
*/

/* Buenas prácticas para crear variables en JavaScript 
- Utilizar nombres descriptivos: Los nombres deben ser claros y descriptivos para que se pueda entender lo que representan. Evitar nombres genéricos como a, b, c
- Utilizar el alcance de bloque: Utilizar las palabras clave let y const para declarar variables con alcance de bloque.
- Evitar variables globales: Las variables globales son accesibles desde cualquier parte del programa, esto puede conllevar a generar conflictos y dificultar la depuración.
Es mejor declarar variables dentro de las funciones o bloques donde se utilizan.
- Utilizar tipos de datos adecuados: Elegir el tipo de dato correcto para cada variable, esto permitirá prevenir errores y asegura que las variables tengan valores definidos.
- Utilizar constantes para valores inmutables: Si el valor no cambia durante la ejecución del programa, declararlo con const.
- Documentar las variables: Si es necesario, documentar las variables utilizando su propósito y uso.

Diferencias entre let y var
var:                         | let:
- Alcance de la función      | - Alcance de bloque
- Hoisting                   | - No hoisting

¿Por qué usar let en lugar de var?
- Mayor claridad y seguridad.
- Evita variables globales accidentales.
- Es parte del estándar moderno de JavaScript.

¿Cuándo usar cuál?
- var: En general, se recomienda evitar var en el código nuevo, a menos que estemos trabajando con código heredado que lo utilice.
- let: Es la opción preferida para declarar variables en la mayoría de los casos, ya que proporciona un alcance más controlado y evita muchos de los problemas asociados con var.

let NombreCompleto = "Pedro Pérez";
declaración = NombreCompleto
asignación = Pedro Pérez

*/

let nombre = "David"; // Variable para almacenar nombre (Tipo de dato: Cadena de texto)
let edad = 30; // Variable para almacenar edad (Tipo de dato: Número)
const cedula_ciudadania = 1234567890; // Constante para almacenar número de cédula
// console.log(nombre + edad + cedula_ciudadania);
/* Imprimo nombre, edad y número de cédula */
console.log("Mi nombre es " + nombre + " tengo " + edad + " años " + "y mi número de cédula es " + cedula_ciudadania);

// Mi nombre es NOMBRE, tengo EDAD años y mi número de cédula es CEDULA_CIUDADANIA 

/* Buenas prácticas para declarar variables */
// Nombres descriptivos
let verduras = ["lechuga", "tomate"]; // Correcto
let v = ["lechuga", "tomate"]; // Incorrecto

// Alcance de bloque
if (true) {
    let numero = 10; // Correcto
    var numero2 = 20; // Incorrecto
}

// Evitar variables globales
function saludar() {
    let mensaje = "Hola mundo";
    console.log(mensaje);
}

// Utilizar tipos de datos adecuados
let precio = 100; // Correcto, es numérico
let precio = "100"; // Incorrecto, no es numérico

// Utilizar constantes para valores inmutables
const PI = 3.1416; // Correcto
let PI = 3.1416; // Incorrecto
