/*
Operadores lógicos: Se utilizan para combinar dos o más expresiones booleanas en una sola expresión booleana. En JavaScript
hay tres operadores lógicos principales:

&& (and): Este operador lógico compara dos expresiones y devuelve true si ambas son verdaderas, y false en caso contrario. 
En JavaScript, el operador AND se representa con dos símbolos de ampersand (&&).

|| (or): Este operador lógico compara dos expresiones y devuelve true si al menos una de ellas es verdadera, y false en 
caso contrario.

! (not): Este operador lógico niega una expresión, es decir, devuelve true si la expresión es falsa, y false si la 
expresión es verdadera.

*/

// Ejemplo de operador lógico AND
/*
Tabla de verdad del operador AND

| A | B | A AND B |
|---|---|---------|
| F | F |    F    |
| F | V |    F    |
| V | F |    F    |
| V | V |    V    |
*/

let edad = 18;
let tieneCedula = true;

let puedeEntrar = edad >= 18 && tieneCedula;
console.log(puedeEntrar);

// Ejemplo de operador lógico OR
/*
Tabla de verdad del operador OR
| A | B | A OR B |
|---|---|--------|
| F | F |   F    |
| F | V |   V    |
| V | F |   V    |
| V | V |   V    |
*/
let estudiante = true;
let tieneDescuento = true;

let puedeComprarConDescuento = estudiante || tieneDescuento;
console.log(puedeComprarConDescuento);

// Ejemplo de operador lógico NOT
/*

Tabla de verdad del operador NOT
| A | !A |
|---|----|
| F |  V |
| V |  F |
*/

let mayorDeEdad = edad >= 18; // true
let noEsMayorDeEdad = !mayorDeEdad; // false, porque niega el valor de la variable `mayorDeEdad`
console.log('Operador NOT: ' + noEsMayorDeEdad);

/* Precedencia de los operadores lógicos: El operador NOT tiene la mayor precedencia, seguido por el operador AND y, 
por último, el operador OR. NOT > AND > OR
*/

/*
Los operadores lógicos se utilizan en una amplia variedad de situaciones en JavaScript, como:
- Validación de formularios: Para verificar si los campos de un formulario se han completado correctamente.
- Control de flujo: Para tomar decisiones basadas en múltiples condiciones.
- Filtrado de datos: Para seleccionar elementos de una lista que cumplen con ciertas condiciones.
*/
