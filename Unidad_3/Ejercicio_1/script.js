/* 
Adivina el número entre 1 y 10
*/

// Generar un número aleatorio
let numeroAleatorio = 10*Math.random();
let NumeroAleatorio = Math.ceil(numeroAleatorio);

// Ingresar número
// let numeroIngresado = 8;
let numeroIngresado = prompt("Ingresa un número del 1 al 10: ");
console.log("aleatorio: " + NumeroAleatorio);
console.log("ingresado: " + numeroIngresado);

// Si son iguales imprimir "Has ganado"
if(NumeroAleatorio == numeroIngresado){
    console.log("Has ganado");
}else{
    // Si son diferentes imprimir "Sigue participando"
    // console.log("Sigue participando");
    alert("Sigue participando, el número ingresado fue " + numeroIngresado + " y el ganador era " + NumeroAleatorio);
}
