/*
Los operadores aritméticos son los que se utilizan para realizar 
operaciones matemáticas.

En JavaScript, los operadores aritméticos son los siguientes:
1. Operadores binarios: Son los que requieren dos operandos.
 +, -, *, /, %.

2. Operadores unarios: Son los que requieren un solo operando.
    ++, --.
3. Operadores de asignación: Son los que se utilizan para asignar 
un valor a una variable.



Precedencia de los operadores aritméticos

Define el orden en que se evalúan las operaciones en una expresión.
En JavaScript, la precedencia de los operadores aritméticos es la 
siguiente:
1. Paréntesis ()
2. Exponente **
3. Multiplicación *, división /, módulo %
4. Suma +, resta - (binarios)
5. Incremento ++, decremento -- (unarios)
*/

// Entero y decimal
const numero_entero = 5;
const numero_decimal = 5.6;

// Notación científica
const numero_grande = 1e6;
const numero_pequeno = 1e-6;

// Infinitos
const infinito = Infinity;
const noEsUnNumero = NaN;

// Operaciones aritméticas
const suma = 10 + 10;
const resta = 10 - 10;
const multiplicacion = 10*10;
const division = 10/10;
const modulo = 10%10; // Residuo de la división

// Precisión
const precision = 0.8 + 0.15;
console.log(precision.toFixed(2));

// Otras operaciones
const raizCuadrada = Math.sqrt(9);
const valorAbsoluto = Math.abs(-10);
const aleatorio = Math.random();
const aleatorio2 = aleatorio.toFixed(2);
console.log(aleatorio2);
