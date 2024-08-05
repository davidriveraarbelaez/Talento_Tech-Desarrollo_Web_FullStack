// Math

let numeroConDecimales = 3.14159;
let numeroConDecimalesRedondeo = numeroConDecimales.toFixed(2);
console.log(numeroConDecimalesRedondeo);
// Redondeos
const redondeoNumeroAbajo = Math.floor(numeroConDecimales); // Redondea hacia abajo
const redondeoNumeroArriba = Math.ceil(numeroConDecimales); // Redondea hacia arriba
console.log(redondeoNumeroArriba);
// Generación de números aleatorios
const numeroSecreto = Math.random(); // Genera valores aleatorios entre 0 y 1
console.log(numeroSecreto);

// Adivinar el número entre 1 y 10
let numeroAleatorio = Math.random();

// Rango deseado entre 1 y 10
numeroAleatorio = numeroAleatorio*10;
console.log(numeroAleatorio);
redondeoNumeroAleatorio = Math.ceil(numeroAleatorio);
console.log(redondeoNumeroAleatorio);
