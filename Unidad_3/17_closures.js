/*

Closures: Son funciones que recuerdan el entorno léxico en el que fueron creadas, incluso después de 
que la función haya terminado de ejecutarse. Esto significa que una closure tiene acceso a las variables
y funciones que estaban en el alcance cuando se creó, aunque ya haya finalizado su ejecución.

En pocas palabras, una closure es una combinación de una función y el estado léxico que la rodea. Esto 
permite que una función interna acceda a las variables de la función externa que la contiene, incluso
después de que la función externa haya terminado de ejecutarse

*/

function saludar(saludo){
    return function(nombre){
        console.log(saludo + " " + nombre);
    }
}

const saludarHola= saludar("Hola");
saludarHola("Juan")

// Ejemplo 2. Clousure que ilustra cómo se puede utilizar para crear una variable privada

function contador(){
    let cuenta = 0;

    return function(){
        cuenta++;
        return cuenta;   
    }
}

const miContador = contador();
console.log(miContador());  // 1
console.log(miContador());  // 2
console.log(miContador());  // 3