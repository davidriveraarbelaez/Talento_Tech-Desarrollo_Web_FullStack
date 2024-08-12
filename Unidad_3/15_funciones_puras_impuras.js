/*
Función pura en JavaScript: Es una función que cumple con dos condiciones principales:

1. Determinismo: Para un mismo conjunto de argumentos, siempre devuelve el mismo resultado.
2. Sin efectos secundarios: No modifica ninguna variable o estado fuera de su ámbito local, ni depende 
de estados externos que puedan cambiar.

*/

function sumar(a, b) {
    return a + b;
}

const resultado = sumar(5, 3);
console.log(resultado)

/* 
Función impura en JavaScript: Es una función que puede tener efectos secundarios o depender de un 
estado externo.
*/

let contador = 0;

function incrementar(){
    contador++;
    return contador;
}

incrementar();
console.log(contador)

/*
¿ Por qué importan las funciones puras

- Predictibilidad.
- Reutilización.
- Paralelización.
- Pureza funcional.

Resumen de las diferencias

    Característica            | Función pura | Función impura
Efectos secundarios           | Ninguna      | Sí
Determinismo                  | Sí           | No
Dependencia de estado externo | No           | Sí
Predictibilidad               | Alta         | Baja
Reutilización                 | Alta         | Baja

¿Cuándo utilizar cada tipo?

Funciones puras: Cálculos matemáticos, manipulación de datos inmutables,reutilizables.
Funciones impuras: Interacción con el usuario, efectos secundarios intencionales (Login),trabajar con datos mutables.

Tips:
- Favorece las funciones puras siempre que sea posible.
- Minimiza los efectos secundarios en las funciones impuras.
- Utiliza variables locales en lugar de globales.
- Considera utilizar bibliotecas de programación funcional (Ramda)

*/

// Función pura para calcular el factorial

function factorial (n){
    if(n===0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}

const Resultado = factorial(5);
console.log(Resultado)