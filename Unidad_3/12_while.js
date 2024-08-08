/*

Ciclo while: Es un ciclo que se repite mientras una condición sea verdadera.

La estructura de un ciclo while en JavaScript es la siguiente:

while (condición) {
    // código a ejecutar en cada iteración
}

*/

// Hacer un ciclo while que cuente de 0 a 10

let contador = 0;

while (contador <= 10){
    console.log("Contador ascendente: ", contador);
    contador ++;
}
console.log("--------------")
// Hacer un ciclo while que cuente de 10 a 0

let contador2 = 10;

while (contador2 >= 0){
    console.log("Contador descendente: ",contador2);
    contador2 --;
}
console.log("--------------")
// Hacer un ciclo while que cuente de 0 a 20 de 2 en 2

let contador3 = 0;

while (contador3 <= 20){
    console.log("Contador de 2 en 2: ", contador3);
    contador3 += 2;
}
console.log("--------------")
// Hacer un ciclo while que cuente de 30 a 0 de 3 en 3

let contador4 = 30;

while (contador4 >= 0){
    console.log("Contador de 3 en 3: ", contador4);
    contador4 -= 3;
}
console.log("--------------")
/* Do while: Es un ciclo que se repite mientras una condición sea verdadera.

La estructura de un ciclo do while en JavaScript es la siguiente:

do {
    // código a ejecutar en cada iteración
} while (condición);
*/

let contador5 = 0;
do {
    console.log("Do while:",contador5);
    contador5++;
} while (contador5 < 10);
console.log("--------------")