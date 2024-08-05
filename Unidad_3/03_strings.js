/*
Strings: Son cadenas de texto en JavaScript. 
Se pueden definir con comillas simples o dobles.
Son de los tipos de datos primitivos.
Se pueden concatenar con el operador +.
Se pueden acceder a sus caracteres con corchetes.
Se utilizan para representar y manipular texto en JavaScript.
*/

let saludo1 = "Hola, mundo!";
let saludo2 = '¡Hola, mundo!';
console.log("saludo1 hola");
console.log(saludo1);
console.log(saludo2);

// Concatenación de strings
/*
Puedes combinar dos o más strings en uno solo con el operador +.
También puedes combinar strings con variables o utilizando plantillas literales con backticks (``).
Adicionalmente, puedes usar el método concat() para concatenar strings.
con join() puedes unir los elementos de un array en un string.
*/
let nombre = "David";
let saludo = "Hola, " + nombre + "!";
console.log(nombre);
console.log(saludo)

// join()
console.log("join:")
let frutas = ["manzana", "pera", "sandía"];
let listaFrutas = frutas.join(", ");
console.log(listaFrutas); // Imprime "manzana, pera, sandía"

// concat()
console.log("concat:")
const hobbie1 = 'Leer'
const hobbie2 = "Programar"
const hobbie3 = "Cocinar"
const hobbies = hobbie1.concat(',',hobbie2,',',hobbie3);
console.log(hobbies); 

// Caracteres de escape
/*
Los caracteres de escape son secuencias de caracteres que se utilizan para 
representar caracteres que de otra forma no se pueden escribir o que 
tienen un significado especial.
*/

// Escape alternativo const
escapeAlternativo = "It's my life";
console.log(escapeAlternativo);

// Barra invertida const
escapeBarraAlternativa = "It\\'s my life";
console.log(escapeBarraAlternativa);

// Template literal const
escapeTemplateLiterals = `It's my life`;
console.log(escapeTemplateLiterals);

// Salto de línea
/*
Para hacer salto de línea en un string, se puede utilizar el caracter 
especial \n.

Si vamos a utilizar un string con múltiples líneas, es recomendable
utilizar plantillas literales con backticks (``).
*/

const poema = 'Las rosas son rojas, \n' + 'el cielo es azul,\n' + 'y solo se vive una vez';
console.log(poema);

const ejercicio_clase = saludo1 + "\n" + saludo2
const ejercicio_clase2 = saludo1 + saludo2
console.log(ejercicio_clase)
console.log(ejercicio_clase2)

// substring()
/*
El método substring() devuelve una subcadena de un string,
se especifica la posición inicial y final de la subcadena.
*/

let cadena = "hola mundo";
let subcadena = cadena.substring(0, 2);
console.log(subcadena); // Imprime "mundo"
