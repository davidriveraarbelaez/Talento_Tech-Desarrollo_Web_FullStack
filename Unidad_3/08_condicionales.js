/*
Ejecución de condicionales

En JavaScript, los condicionales son estructuras de control que permiten tomar decisiones en función de una condición.

La sentencia if es una estructura de control que permite ejecutar un bloque de código si una condición es verdadera.
La estructura de un condicional en JavaScript es la siguiente:

if (condición) {
    // código a ejecutar si la condición es verdadera
} else {
    // código a ejecutar si la condición es falsa
}
*/

// Ejemplo de condicional if
let edad = 17;

if (edad >= 18){
    console.log('Eres mayor de edad');
}else{
    console.log('Eres menor de edad');
}

/*
    Anidación de condicionales: En JavaScript, es posible anidar condicionales dentro de otros condicionales para crear estructuras de control más complejas.
    Esto permite evaluar múltiples condiciones y ejecutar diferentes bloques de código en función de los resultados de esas condiciones.
    La estructura de un condicional anidado en JavaScript es la siguiente:

    if (condición1) {
        // código a ejecutar si la condición1 es verdadera
        if (condición2) {
            // código a ejecutar si la condición2 es verdadera
        } else {
            // código a ejecutar si la condición2 es falsa
        }
    }
*/

// Ejemplo de condicional anidado
let Edad = 25;
let tieneCedula = true;

if (Edad >= 18) {
    // código a ejecutar si la condición1 es verdadera
    if (tieneCedula) {
        // código a ejecutar si la condición2 es verdadera
        console.log("Puedes ingresar tienes " + Edad + " años");
    } else {
        // código a ejecutar si la condición2 es falsa
        console.log("No puedes ingresar")
    }
}else{
    console.log("No puedes ingresar por ser menor de edad");
}
