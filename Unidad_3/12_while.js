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

// Hacer un ciclo while que cuente de 10 a 0

let contador2 = 10;

while (contador2 >= 0){
    console.log("Contador descendente: ",contador2);
    contador2 --;
}
