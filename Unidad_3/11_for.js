/*
    ciclo for: es una estructura de control que permite repetir un bloque de código un número 
    determinado de veces. 
    Es una herramienta útil para realizar tareas repetitivas, como recorrer elementos 
    de un arreglo o realizar cálculos iterativos.

    La estructura de un ciclo for en JavaScript es la siguiente:

    for (inicialización; condición; actualización) {
        // código a ejecutar en cada iteración
    }

    La inicialización se ejecuta una sola vez al inicio del ciclo y se utiliza para declarar 
    y asignar valores a las variables que se utilizarán en el ciclo.

    La condición se evalúa en cada iteración del ciclo y determina si el ciclo debe continuar

    La actualización se ejecuta al final de cada iteración del ciclo y se utiliza para modificar,
    puede ser incrementar o decrementar, las variables que se utilizan en el ciclo.
*/

// Incremento
for (let i=0; i<=5; i++) {
    console.log("El valor de i es: ", i);
}

/*
let i = 0: Se declara una variable i y se inicializa en 0.
i<5: La condición se evalúa antes de cada iteración. Mientras i sea menor que 5, el bucle continuará
i++: Después de cada iteración, el valor de i se incrementa en 1.

*/

/* Reto de clase: Hora límite 635am
Crear un ciclo for que me permita contar de manera descendente desde 20 hasta 5.
*/

// Decremento

for (let j=20; j>=5; j--) {
    console.log("El valor de j es: ", j);
}

/* Reto de clase #2: Hora límite 640am
Crear un ciclo for que me permita contar de manera ascendente desde 0 hasta 20 de 2 en 2.
*/

// Incremento de 2 en 2
for (let k=0; k<=20; k+=2) {
    console.log("El valor de k es: ", k);
}

/*
ciclo for of: es una estructura de control que permite recorrer los elementos de un arreglo

La estructura de un ciclo for of en JavaScript es la siguiente:

for (let elemento of arreglo) {
    // código a ejecutar en cada iteración
}
    
*/

// Ejemplo de ciclo for of
let colores = ['rojo', 'verde', 'azul']; // Arreglo de colores

for (let color of colores) { // Recorre los elementos del arreglo
    console.log(color); // Imprime cada color
}

/*
ciclo for in: es una estructura de control que permite recorrer las propiedades de un objeto.

La estructura de un ciclo for in en JavaScript es la siguiente:

for (let propiedad in objeto) {
    // código a ejecutar en cada iteración
}

*/

// array, string

// Creamos un objeto, indicamos las propiedades que queremos que tenga

const carro = {
    marca: 'BMW',
    modelo: 'Z4',
    color: 'Negro',
    VelMax: '250km/h',
    estado: 'Bueno'
}

for (info in carro) {
    console.log(`${info} : ${carro[info]}`)
}
